<?php

/**
 * Campaign section of the CMS
 *
 * @package framework
 * @subpackage admin
 */
class CampaignAdmin extends LeftAndMain implements PermissionProvider {

	private static $allowed_actions = [];

	private static $menu_priority = 999;

	private static $menu_title = 'Campaigns';

	private static $url_rule = '/$Action/$ID/$OtherID';

	private static $url_segment = 'campaigns';

	public function init() {
		parent::init();

		Requirements::javascript(FRAMEWORK_ADMIN_DIR . '/javascript/dist/bundle-react.js');
		Requirements::javascript(FRAMEWORK_ADMIN_DIR . '/javascript/dist/campaign-admin.js');
	}

	public function getEditForm($id = null, $fields = null) {
		return '';
	}

}
