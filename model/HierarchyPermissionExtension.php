<?php
class HierarchyPermissionExtension extends DataExtension {

	private static $db = array(
		'CanViewType' => "Enum('Anyone, LoggedInUsers, OnlyTheseUsers, Inherit', 'Inherit')",
		'CanEditType' => "Enum('LoggedInUsers, OnlyTheseUsers, Inherit', 'Inherit')",
	);

	private static $many_many = array(
		"ViewerGroups" => "Group",
		"EditorGroups" => "Group",
	);

	/**
	 * This function should return true if the current user can view this page.
	 *
	 * Denies permission if any of the following conditions is true:
	 * - "CanViewType" directive is set to "Inherit" and any parent page return false for canView()
	 * - "CanViewType" directive is set to "LoggedInUsers" and no user is logged in
	 * - "CanViewType" directive is set to "OnlyTheseUsers" and user is not in the given groups
	 *
	 * @uses ViewerGroups()
	 *
	 * @param Member|int $member
	 * @return bool True if the current user can view this page
	 */
	public function canView($member = null) {
		if(is_numeric($member)) $member = Member::get()->byID($member);
		if(!$member) $member = Member::currentUser();

		$type = $this->owner->CanViewType;

		// check for empty spec
		if(!$type || $type == 'Anyone') return true;

		// check for inherit
		if($type == 'Inherit') {
			if($this->owner->ParentID) return $this->owner->Parent()->canView($member);
			else return $this->owner->getSiteConfig()->canViewPages($member);
		}

		// check for any logged-in users
		if($type == 'LoggedInUsers' && $member) {
			return true;
		}

		// check for specific groups
		if($type == 'OnlyTheseUsers' && $member && $member->inGroups($this->owner->ViewerGroups())) {
			return true;
		}

		return false;
	}

	/**
	 * This function should return true if the current user can edit this page. It can be overloaded to customise the
	 * security model for an application.
	 *
	 * Denies permission if any of the following conditions is true:
	 * - canEdit() on any extension returns false
	 * - canView() return false
	 * - "CanEditType" directive is set to "Inherit" and any parent page return false for canEdit()
	 * - "CanEditType" directive is set to "LoggedInUsers" and no user is logged in or doesn't have the
	 *   CMS_Access_CMSMAIN permission code
	 * - "CanEditType" directive is set to "OnlyTheseUsers" and user is not in the given groups
	 *
	 * @uses canView()
	 * @uses EditorGroups()
	 * @uses DataExtension->canEdit()
	 *
	 * @param Member $member Set to false if you want to explicitly test permissions without a valid user (useful for
	 *                       unit tests)
	 * @return bool True if the current user can edit this page
	 */
	public function canEdit($member = null) {
		$checker = Injector::inst()->get('HierarchyPermissionChecker');

		if(is_numeric($member)) $member = Member::get()->byID($member);
		if(!$member) $member = Member::currentUser();

		if($this->owner->ID) {
			// Regular canEdit logic is handled by can_edit_multiple
			$results = $checker->canEditMultiple(get_class($this->owner), array($this->owner->ID), $member);

			// If this object no longer exists in stage/live results won't contain the page. Fail-over to false.
			return isset($results[$this->owner->ID]) ? $results[$this->owner->ID] : false;
		} else {
			// Default for unsaved objects
			$siteConfig = $this->getSiteConfig();
			// TODO
			return $siteConfig ? $siteConfig->canEditFiles($member) : null;
		}
	}

	/**
	 * This function should return true if the current user can delete this record.
	 *
	 * Denies permission if any of the following conditions is true:
	 * - canEdit() returns false
	 * - any descendant record returns false for canDelete()
	 *
	 * @uses canDelete()
	 * @uses SiteTreeExtension->canDelete()
	 * @uses canEdit()
	 *
	 * @param Member $member
	 * @return bool True if the current user can delete this page
	 */
	public function canDelete($member = null) {
		$checker = Injector::inst()->get('HierarchyPermissionChecker');

		if(is_numeric($member)) $member = Member::get()->byID($member);
		if(!$member) $member = Member::currentUser();

		// Regular canEdit logic is handled by can_edit_multiple
		$results = $checker->canDeleteMultiple(get_class($this->owner), array($this->owner->ID), $member);

		// If this object no longer exists in stage/live results won't contain the page. Fail-over to false.
		return isset($results[$this->owner->ID]) ? $results[$this->owner->ID] : false;
	}

	/**
	 * Clear the permissions cache for SiteTree
	 */
	public static function reset() {
		$checker = Injector::inst()->get('HierarchyPermissionChecker');
		$checker->reset();
	}

	static public function on_db_reset() {
		$checker = Injector::inst()->get('HierarchyPermissionChecker');
		$checker->reset();
	}

	/**
	 * Stub method to get the site config, unless the current class can provide an alternate.
	 *
	 * @return SiteConfig
	 */
	protected function getSiteConfig() {
		if(!class_exists('SiteConfig')) {
			return null;
		}

		if($this->owner->hasMethod('alternateSiteConfig')) {
			$altConfig = $this->owner->alternateSiteConfig();
			if($altConfig) return $altConfig;
		}

		return SiteConfig::current_site_config();
	}

}