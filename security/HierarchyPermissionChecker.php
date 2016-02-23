<?php
class HierarchyPermissionChecker {

	/**
	 * Pre-populate the cache of canEdit, canView, canDelete, canPublish permissions.
	 * This method will use the static can_(perm)_multiple method for efficiency.
	 *
	 * @param string $class   Class name of the checked class (the extension owner)
	 * @param string          $permission    The permission: edit, view, publish, approve, etc.
	 * @param array           $ids           An array of page IDs
	 * @param callable|string $batchCallback The function/static method to call to calculate permissions.
	 * @throws InvalidArgumentException
	 */
	public function prepopulatePermissionCache($class, $permission = 'CanEditType', $ids, $batchCallback = null) {
		if(!$batchCallback && $permission == 'CanEditType') {
			$batchCallback = array($this, 'canEditMultiple');
		} else {
			throw new InvalidArgumentException('Can\'t determine $batchCallback');
		}

		if(!is_callable($batchCallback)) {
			throw new InvalidArgumentException('Invalid $batchCallback');
		}

		$member = Member::currentUser();
		call_user_func($batchCallback, $class, $ids, $member, false);
	}

	/**
	 * Get the 'can view' information for a number of records.
	 *
	 * @param string $class    Class name of the checked class (the extension owner)
	 * @param array  $ids       An array of IDs of records to look up
	 * @param Member $member
	 * @param bool   $useCached Return values from the permission cache if they exist
	 * @return array A map where the IDs are keys and the values are booleans stating whether the given page can be
	 *                         edited
	 */
	public function canViewMultiple($class, $ids, $member, $useCached = true) {
		return $this->batchPermissionCheck($class, $ids, $member, 'CanViewType', 'SiteTree_EditorGroups', 'canViewPages', null, $useCached);
	}

	/**
	 * Get the 'can edit' information for a number of records.
	 *
	 * @param string $class    Class name of the checked class (the extension owner)
	 * @param array  $ids       An array of IDs of records to look up
	 * @param Member $member
	 * @param bool   $useCached Return values from the permission cache if they exist
	 * @return array A map where the IDs are keys and the values are booleans stating whether the given page can be
	 *                         edited
	 */
	public function canEditMultiple($class, $ids, $member, $useCached = true) {
		return $this->batchPermissionCheck($class, $ids, $member, 'CanEditType', 'SiteTree_EditorGroups', 'canEditPages', null, $useCached);
	}

	/**
	 * Get the 'can delete' information for a number of SiteTree pages.
	 *
	 * @param string $class    Class name of the checked class (the extension owner)
	 * @param array  $ids       An array of IDs of records to look up
	 * @param Member $member
	 * @param bool   $useCached Return values from the permission cache if they exist
	 * @return array
	 */
	public function canDeleteMultiple($class, $ids, $member, $useCached = true) {
		$deletable = array();
		$result = array_fill_keys($ids, false);
		$cacheKey = "$class-delete-{$member->ID}";
		$table = ClassInfo::baseDataClass($class);

		// Look in the cache for values
		if($useCached && isset($this->cachePermissions[$cacheKey])) {
			$cachedValues = array_intersect_key($this->cachePermissions[$cacheKey], $result);

			// If we can't find everything in the cache, then look up the remainder separately
			$uncachedValues = array_diff_key($result, $this->cachePermissions[$cacheKey]);
			if($uncachedValues) {
				$cachedValues = $this->canDeleteMultiple(array_keys($uncachedValues), $member, false)
					+ $cachedValues;
			}
			return $cachedValues;
		}

		// You can only delete pages that you can edit
		$editableIDs = array_keys(array_filter($this->canEditMultiple($class, $ids, $member)));
		if($editableIDs) {

			// You can only delete pages whose children you can delete
			$editablePlaceholders = DB::placeholders($editableIDs);
			$childRecords = $class::get()->where(array(
				"\"$table\".\"ParentID\" IN ($editablePlaceholders)" => $editableIDs
			));
			if($childRecords) {
				$children = $childRecords->map("ID", "ParentID");

				// Find out the children that can be deleted
				$deletableChildren = $this->canDeleteMultiple($class, $children->keys(), $member);

				// Get a list of all the parents that have no undeletable children
				$deletableParents = array_fill_keys($editableIDs, true);
				foreach($deletableChildren as $id => $canDelete) {
					if(!$canDelete) unset($deletableParents[$children[$id]]);
				}

				// Use that to filter the list of deletable parents that have children
				$deletableParents = array_keys($deletableParents);

				// Also get the $ids that don't have children
				$parents = array_unique($children->values());
				$deletableLeafNodes = array_diff($editableIDs, $parents);

				// Combine the two
				$deletable = array_merge($deletableParents, $deletableLeafNodes);

			} else {
				$deletable = $editableIDs;
			}
		} else {
			$deletable = array();
		}

		// Convert the array of deletable IDs into a map of the original IDs with true/false as the value
		return array_fill_keys($deletable, true) + array_fill_keys($ids, false);
	}

	/**
	 * This method is NOT a full replacement for the individual can*() methods, e.g. {@link canEdit()}. Rather than
	 * checking (potentially slow) PHP logic, it relies on the database group associations, e.g. the "CanEditType" field
	 * plus the "EditorGroups" many-many table. By batch checking multiple records, we can combine the queries
	 * efficiently.
	 *
	 * Caches based on $typeField data. To invalidate the cache, use {@link reset()} or set the $useCached
	 * property to FALSE.
	 *
	 * @param string $class            Class name of the checked class (the extension owner)
	 * @param array  $ids              Collection of {@link DataObject} identifiers matching the owner of this extension
	 * @param Member $member
	 * @param string $typeField        A property on the data record, e.g. "CanEditType".
	 * @param string $groupJoinTable   A many-many table name on this record, e.g. "SiteTree_EditorGroups"
	 * @param string $siteConfigMethod Method to call on {@link SiteConfig} for toplevel items, e.g. "canEdit"
	 * @param string $globalPermission If the member doesn't have this permission code, don't bother iterating deeper
	 * @param bool   $useCached
	 * @return array An map of {@link DataObject} ID keys to boolean values
	 */
	public function batchPermissionCheck($class, $ids, $member, $typeField, $groupJoinTable, $siteConfigMethod,
	                                              $globalPermission = null, $useCached = true) {
		if($globalPermission === NULL) $globalPermission = array('CMS_ACCESS_LeftAndMain', 'CMS_ACCESS_CMSMain');

		$table = ClassInfo::baseDataClass($class);
		$joinField = Injector::inst()->get($class)->getRemoteJoinField($groupJoinTable, 'many_many');

		// Sanitise the IDs
		$ids = array_filter($ids, 'is_numeric');

		// This is the name used on the permission cache
		// converts something like 'CanEditType' to 'edit'.
		$cacheKey = "$class-" . strtolower(substr($typeField, 3, -4)) . "-{$member->ID}";

		// Default result: nothing editable
		$result = array_fill_keys($ids, false);
		if($ids) {

			// Look in the cache for values
			if($useCached && isset($this->cachePermissions[$cacheKey])) {
				$cachedValues = array_intersect_key($this->cachePermissions[$cacheKey], $result);

				// If we can't find everything in the cache, then look up the remainder separately
				$uncachedValues = array_diff_key($result, $this->cachePermissions[$cacheKey]);
				if($uncachedValues) {
					$cachedValues = $this->batchPermissionCheck(array_keys($uncachedValues), $member,
							$typeField, $groupJoinTable, $siteConfigMethod, $globalPermission, false
						) + $cachedValues;
				}
				return $cachedValues;
			}

			// If a member doesn't have a certain permission then they can't edit anything
			if(!$member || ($globalPermission && !Permission::checkMember($member, $globalPermission))) {
				return $result;
			}

			// Placeholder for parameterised ID list
			$idPlaceholders = DB::placeholders($ids);

			// Get the groups that the given member belongs to
			$groupIDs = $member->Groups()->column("ID");
			$SQL_groupList = implode(", ", $groupIDs);
			if (!$SQL_groupList) $SQL_groupList = '0';

			$combinedStageResult = array();

			foreach(array('Stage', 'Live') as $stage) {
				// Start by filling the array with the pages that actually exist
				$tableWithStage = ($stage=='Stage') ? $table : "{$table}_{$stage}";

				if($ids) {
					$idQuery = "SELECT \"ID\" FROM \"$tableWithStage\" WHERE \"ID\" IN ($idPlaceholders)";
					$stageIds = DB::prepared_query($idQuery, $ids)->column();
				} else {
					$stageIds = array();
				}
				$result = array_fill_keys($stageIds, false);

				// Get the uninherited permissions
				$uninheritedPermissions = Versioned::get_by_stage($class, $stage)
					->where(array(
						"(\"$typeField\" = 'LoggedInUsers' OR
						(\"$typeField\" = 'OnlyTheseUsers' AND \"$groupJoinTable\".\"$joinField\" IS NOT NULL))
						AND \"$table\".\"ID\" IN ($idPlaceholders)"
						=> $ids
					))
					->leftJoin($groupJoinTable, "\"$groupJoinTable\".\"$joinField\" = \"$table\".\"ID\" AND \"$groupJoinTable\".\"GroupID\" IN ($SQL_groupList)");

				if($uninheritedPermissions) {
					// Set all the relevant items in $result to true
					$result = array_fill_keys($uninheritedPermissions->column('ID'), true) + $result;
				}

				// Get permissions that are inherited
				$potentiallyInherited = Versioned::get_by_stage(
					$class,
					$stage,
					array("\"$typeField\" = 'Inherit' AND \"$table\".\"ID\" IN ($idPlaceholders)" => $ids)
				);

				if($potentiallyInherited) {
					// Group $potentiallyInherited by ParentID; we'll look at the permission of all those parents and
					// then see which ones the user has permission on
					$groupedByParent = array();
					foreach($potentiallyInherited as $item) {
						if($item->ParentID) {
							if(!isset($groupedByParent[$item->ParentID])) $groupedByParent[$item->ParentID] = array();
							$groupedByParent[$item->ParentID][] = $item->ID;
						} else {
							// Might return different site config based on record context, e.g. when subsites module
							// is used
							$siteConfig = $item->getSiteConfig();
							$result[$item->ID] = $siteConfig->{$siteConfigMethod}($member);
						}
					}

					if($groupedByParent) {
						$actuallyInherited = $this->batchPermissionCheck($class, array_keys($groupedByParent), $member, $typeField, $groupJoinTable, $siteConfigMethod);
						if($actuallyInherited) {
							$parentIDs = array_keys(array_filter($actuallyInherited));
							foreach($parentIDs as $parentID) {
								// Set all the relevant items in $result to true
								$result = array_fill_keys($groupedByParent[$parentID], true) + $result;
							}
						}
					}
				}

				$combinedStageResult = $combinedStageResult + $result;

			}
		}

		if(isset($combinedStageResult)) {
			// Cache the results
			if(empty($this->cachePermissions[$cacheKey])) $this->cachePermissions[$cacheKey] = array();
			$this->cachePermissions[$cacheKey] = $combinedStageResult + $this->cachePermissions[$cacheKey];

			return $combinedStageResult;
		} else {
			return array();
		}
	}

	/**
	 * Clear the permissions cache for this object type
	 */
	public function reset() {
		$this->cachePermissions = array();
	}

}