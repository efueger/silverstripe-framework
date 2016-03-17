<?php

class AddToCampaignHandler_FormAction extends FormAction {

	function __construct() {
		parent::__construct('addtocampaign', _t('CAMPAIGNS.ADDTOCAMPAIGN', 'Add to campaign'));
		$this->addExtraClass('add-to-campaign-action');
	}
}

class AddToCampaignHandler {

	protected $editForm;
	protected $data;

	public function __construct($editForm, $data) {
		$this->editForm = $editForm;
		$this->data = $data;
	}

	public function handle() {
		$object = $this->getObject($this->data['ID'], $this->data['ClassName']);

		if (empty($this->data['Campaign'])) {
			return $this->Form($object)->forTemplate();
		}
		else {
			return $this->addToCampaign($object, $this->data['Campaign']);
		}
	}

	protected function getAvailableChangeSets() {
		return ChangeSet::get()
			->filter('State', ChangeSet::STATE_OPEN)
			->filterByCallback(function($item) {
				return ($item->canView());
			});
	}

	protected function getObject($id, $class) {
		$id = (int)$id;
		$class = ClassInfo::class_name($class);

		if (!$class || !is_subclass_of($class, 'DataObject') || !Object::has_extension($class, 'Versioned')) {
			return $this->editForm->httpError(400, _t(
				'AddToCampaign.ErrorGeneral',
				'We apologise, but there was an error'
			));
		}

		$object = $class::get()->byID($id);

		if (!$object) return $this->editForm->httpError(404, _t(
			'AddToCampaign.ErrorNotFound',
			'That {Type} couldn\'t be found',
			'',
			['Type' => $class]
		));

		if (!$object->canView()) return $this->editForm->httpError(403, _t(
				'AddToCampaign.ErrorItemPermissionDenied',
				'It seems you don\'t have the necessary permissions to add {ObjectTitle} to a campaign',
				'',
				['ObjectTitle' => $object->Title]
			)
		);

		return $object;
	}

	public function Form($object) {

		$inChangeSets = array_unique(ChangeSetItem::get_for_object($object)->column('ChangeSetID'));
		$changeSets = $this->getAvailableChangeSets()->map();

		$campaignDropdown = DropdownField::create('Campaign', '', $changeSets);
		$campaignDropdown->addExtraClass('noborder');
		$campaignDropdown->setDisabledItems($inChangeSets);

		$fields = new FieldList([$campaignDropdown]);

		foreach ($this->editForm->Fields()->dataFields() as $field) {
			$fields->push(new HiddenField($field->getName(), null, $field->Value()));
		}

		$form = new Form(
			$this->editForm->getController(),
			$this->editForm->getName(),
			new FieldList(
				$header = new CompositeField(
					new LiteralField(
						'Heading',
						sprintf('<h3>%s</h3>', _t('Campaigns.AddToCampaign', 'Add To Campaign'))
					)
				),

				$content = new CompositeField($fields)
			),
			new FieldList(
				$action = AddToCampaignHandler_FormAction::create()
			)
		);

		$header->addExtraClass('add-to-campaign__header');
		$content->addExtraClass('add-to-campaign__content');
		$action->addExtraClass('add-to-campaign__action');

		$form->setHTMLID('Form_EditForm_AddToCampaign');

		$form->unsetValidator();
		$form->loadDataFrom($this->data);
		$form->addExtraClass('add-to-campaign__form');

		return $form;
	}

	public function addToCampaign($object, $campaignID) {
		$changeSet = ChangeSet::get()->byID($campaignID);

		if (!$changeSet) {
			return $this->editForm->httpError(404, _t(
				'AddToCampaign.ErrorNotFound',
				'That {Type} couldn\'t be found',
				'',
				['Type' => 'Campaign']
			));
		}

		if (!$changeSet->canEdit()) {
			return $this->editForm->httpError(403, _t(
				'AddToCampaign.ErrorCampaignPermissionDenied',
				'It seems you don\'t have the necessary permissions to add {ObjectTitle} to {CampaignTitle}',
				'',
				['ObjectTitle' => $object->Title, 'CampaignTitle' => $changeSet->Title]
			));
		}

		$changeSet->addObject($object);

		if (Director::is_ajax()) {
			$response = new SS_HTTPResponse(_t(
				'AddToCampaign.Success',
				'Successfully added {ObjectTitle} to {CampaignTitle}',
				'',
				['ObjectTitle' => $object->Title, 'CampaignTitle' => $changeSet->Title]
			), 200);

			$response->addHeader('Content-Type', 'text/plain');

			return $response;
		}
		else {
			$this->controller->redirectBack();
		}
	}
}
