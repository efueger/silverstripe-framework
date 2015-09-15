<?php

/**
 * Represents an Image
 *
 * @package framework
 * @subpackage filesystem
 */
class Image extends File {
	public function __construct($record = null, $isSingleton = false, $model = null) {	
		parent::__construct($record, $isSingleton, $model);
		$this->File->setAllowedCategories('image');
	}

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->insertAfter(
			'LastEdited',
			new ReadonlyField("Dimensions", _t('AssetTableField.DIM','Dimensions') . ':')
		);
		return $fields;
	}

	public function getIsImage() {
		return true;
	}
}

/**
 * @deprecated since version 4.0
 */
class Image_Cached extends Image {
	public function __construct($record = null, $isSingleton = false, $model = null) {
		parent::__construct($record, $isSingleton, $model);
		Deprecation::notice("4.0", "Image_Cached is no longer used");
	}
}