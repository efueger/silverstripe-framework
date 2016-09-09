<?php

namespace SilverStripe\Assets;

use SilverStripe\Core\Convert;
use SilverStripe\Forms\HTMLReadonlyField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\View\Parsers\ShortcodeParser;
use SilverStripe\View\Parsers\ShortcodeHandler;

/**
 * Represents an Image
 */
class Image extends File implements ShortcodeHandler {

	/**
	 * @config
	 * @var string
	 */
	private static $table_name = 'Image';

	/**
	 * @config
	 * @var string
	 */
	private static $singular_name = "Image";

	/**
	 * @config
	 * @var string
	 */
	private static $plural_name = "Images";

	public function __construct($record = null, $isSingleton = false, $model = null, $queryParams = array()) {
		parent::__construct($record, $isSingleton, $model, $queryParams);
		$this->File->setAllowedCategories('image/supported');
	}

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$width = (int)Image::config()->get('asset_preview_width');
		$previewLink = Convert::raw2att($this->ScaleMaxWidth($width)->PreviewLink());
		$image = "<img src=\"{$previewLink}\" class=\"editor__thumbnail\" />";

		$fields->insertAfter(
			'IconFull',
			LiteralField::create("ImageFull", $image)
				->addExtraClass('editor__file-preview')
		);
		$fields->removeByName('IconFull');
		$fields->insertAfter(
			'TitleHeader',
			LiteralField::create(
				"DisplaySize",
				sprintf('<div><i>%spx, %s</i></div>',
					$this->getDimensions(), $this->getSize())
			)
		);
		$fields->insertAfter(
			'Path',
			HTMLReadonlyField::create(
				'ClickableURL',
				_t('AssetTableField.URL','URL'),
				sprintf('<i class="%s"></i><a href="%s" target="_blank">%s</a>',
					'icon font-icon-link editor__url-icon', $this->Link(), $this->Link())
			)
		);

		return $fields;
	}

	public function getIsImage() {
		return true;
	}

	/**
	 * Replace"[image id=n]" shortcode with an image reference.
	 * Permission checks will be enforced by the file routing itself.
	 *
	 * @param array $args Arguments passed to the parser
	 * @param string $content Raw shortcode
	 * @param ShortcodeParser $parser Parser
	 * @param string $shortcode Name of shortcode used to register this handler
	 * @param array $extra Extra arguments
	 * @return string Result of the handled shortcode
	 */
	public static function handle_shortcode($args, $content, $parser, $shortcode, $extra = array()) {
		// Find appropriate record, with fallback for error handlers
		$record = static::find_shortcode_record($args, $errorCode);
		if($errorCode) {
			$record = static::find_error_record($errorCode);
		}
		if (!$record) {
			return null; // There were no suitable matches at all.
		}

		// Check if a resize is required
		$src = $record->Link();
		if($record instanceof Image) {
			$width = isset($args['width']) ? $args['width'] : null;
			$height = isset($args['height']) ? $args['height'] : null;
			$hasCustomDimensions = ($width && $height);
			if ($hasCustomDimensions && (($width != $record->getWidth()) || ($height != $record->getHeight()))) {
				$resized = $record->ResizedImage($width, $height);
				// Make sure that the resized image actually returns an image
				if($resized) {
					$src = $resized->getURL();
				}
			}
		}

		// Build the HTML tag
		$attrs = array_merge(
			// Set overrideable defaults
			['src' => '', 'alt' => $record->Title],
			// Use all other shortcode arguments
			$args,
			// But enforce some values
			['id' => '', 'src' => $src]
		);

		// Clean out any empty attributes
		$attrs = array_filter($attrs, function($v) {return (bool)$v;});

		// Condense to HTML attribute string
		$attrsStr = join(' ', array_map(function($name) use ($attrs) {
			return Convert::raw2att($name) . '="' . Convert::raw2att($attrs[$name]) . '"';
		}, array_keys($attrs)));

		return '<img ' . $attrsStr . ' />';
	}

	/**
	 * Regenerates "[image id=n]" shortcode with new src attribute prior to being edited within the CMS.
	 *
	 * @param array $args Arguments passed to the parser
	 * @param string $content Raw shortcode
	 * @param ShortcodeParser $parser Parser
	 * @param string $shortcode Name of shortcode used to register this handler
	 * @param array $extra Extra arguments
	 * @return string Result of the handled shortcode
	 */
	public static function regenerate_shortcode($args, $content, $parser, $shortcode, $extra = array()) {
		// Check if there is a suitable record
		$record = static::find_shortcode_record($args);
		if($record) {
			$args['src'] = $record->getURL();
		}

		// Rebuild shortcode
		$parts = array();
		foreach($args as $name => $value) {
			$htmlValue = Convert::raw2att($value ?: $name);
			$parts[] = sprintf('%s="%s"', $name, $htmlValue);
		}
		return sprintf("[%s %s]", $shortcode, implode(' ', $parts));
	}

	/**
	 * Helper method to regenerate all shortcode links.
	 *
	 * @param string $value HTML value
	 * @return string value with links resampled
	 */
	public static function regenerate_html_links($value) {
		// Create a shortcode generator which only regenerates links
		$regenerator = ShortcodeParser::get('regenerator');
		return $regenerator->parse($value);
	}

	public function PreviewLink($action = null) {
		// Since AbsoluteLink can whitelist protected assets,
		// do permission check first
		if(!$this->canView()) {
			return false;
		}
		$link = $this->AbsoluteLink();
		$this->extend('updatePreviewLink', $link, $action);
		return $link;
	}
}
