(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define('ss.UploadField', ['./jQuery', './i18n', 'dropzone'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./jQuery'), require('./i18n'), require('dropzone'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.jQuery, global.i18n, global.dropzone);
		global.ssUploadField = mod.exports;
	}
})(this, function (_jQuery, _i18n, _dropzone) {
	'use strict';

	var _jQuery2 = _interopRequireDefault(_jQuery);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _dropzone2 = _interopRequireDefault(_dropzone);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	_jQuery2.default.entwine('ss', function ($) {

		$('div.ss-upload').entwine({

			Config: null,

			onmatch: function onmatch() {

				if (this.is('.readonly,.disabled')) {
					return;
				}

				var $fileInput = this.find('.ss-uploadfield-fromcomputer-fileinput'),
				    $dropZone = this.find('.ss-uploadfield-dropzone'),
				    config = $fileInput.data('config'),
				    form = $fileInput.closest('form');

				if ($dropZone.length < 1) {
					$dropZone = this.closest('.ss-uploadfield-dropzone');
				}

				var ssDropzone = new _dropzone2.default($dropZone[0], {
					url: config['url'],
					paramName: $fileInput.attr('name'),
					maxFiles: config['maxNumberOfFiles'],
					maxFilesize: config['maxFileSize'] / 1048576,
					thumbnailWidth: config['previewMaxWidth'],
					thumbnailHeight: config['previewMaxHeight'],
					addRemoveLinks: true
				});

				console.log(ssDropzone);

				ssDropzone.on('dragover', function (e) {
					e.preventDefault();
				}).on('dragenter', function (e) {
					$dropZone.addClass('hover active');
				}).on('dragleave', function (e) {
					if (e.target === $dropZone[0]) {
						$dropZone.removeClass('hover active');
					}
				}).on('drop', function (e) {
					$dropZone.removeClass('hover active');

					if (e.target !== $dropZone[0]) {
						return false;
					}
				}).on('sending', function (file, xhr, formData) {
					formData.append('SecurityID', form.find(':input[name=SecurityID]').val());
				}).on('success', function (file, response) {
					if (config.changeDetection) {
						form.trigger('dirty');
					}
				}).on('error', function (file, errorMessage, xhr) {
					jQuery.noticeAdd({ text: errorMessage, type: 'error', stayTime: 5000, inEffect: { left: '0', opacity: 'show' } });
				});
			},
			onunmatch: function onunmatch() {
				$('.ss-uploadfield-dropzone').off('dragover dragenter dragleave drop');
				this._super();
			},
			openSelectDialog: function openSelectDialog(uploadedFile) {
				var self = this,
				    config = this.find('.ss-uploadfield-fromcomputer-fileinput').data('config'),
				    dialogId = 'ss-uploadfield-dialog-' + this.attr('id'),
				    dialog = jQuery('#' + dialogId);
				if (!dialog.length) dialog = jQuery('<div class="ss-uploadfield-dialog" id="' + dialogId + '" />');

				var iframeUrl = config['urlSelectDialog'];
				var uploadedFileId = null;
				if (uploadedFile && uploadedFile.attr('data-fileid') > 0) {
					uploadedFileId = uploadedFile.attr('data-fileid');
				}

				dialog.ssdialog({ iframeUrl: iframeUrl, height: 550 });

				dialog.find('iframe').bind('load', function (e) {
					var contents = $(this).contents(),
					    gridField = contents.find('.ss-gridfield');

					contents.find('table.ss-gridfield').css('margin-top', 0);

					contents.find('input[name=action_doAttach]').unbind('click.openSelectDialog').bind('click.openSelectDialog', function () {
						var ids = $.map(gridField.find('.ss-gridfield-item.ui-selected'), function (el) {
							return $(el).data('id');
						});
						if (ids && ids.length) self.attachFiles(ids, uploadedFileId);

						dialog.ssdialog('close');
						return false;
					});
				});
				dialog.ssdialog('open');
			},
			attachFiles: function attachFiles(ids, uploadedFileId) {
				var self = this,
				    config = this.find('.ss-uploadfield-fromcomputer-fileinput').data('config'),
				    indicator = $('<div class="loader" />'),
				    target = uploadedFileId ? this.find(".ss-uploadfield-item[data-fileid='" + uploadedFileId + "']") : this.find('.ss-uploadfield-addfile');

				target.children().hide();
				target.append(indicator);

				$.ajax({
					type: "POST",
					url: config['urlAttach'],
					data: { 'ids': ids },
					complete: function complete(xhr, status) {
						target.children().show();
						indicator.remove();
					},
					success: function success(data, status, xhr) {
						if (!data || $.isEmptyObject(data)) return;

						this.attach({
							files: data,
							options: config,
							replaceFileID: uploadedFileId
						});
					}
				});
			},

			attach: function attach(data) {
				var self = this,
				    files = data.files,
				    replaceFileID = data.replaceFileID,
				    valid = true,
				    config = this.find('.ss-uploadfield-fromcomputer-fileinput').data('config');

				if (this.options.changeDetection) {
					this.element.closest('form').trigger('dirty');
				}

				var replacedElement = null;

				data.isAdjusted = true;
				data.files.valid = data.isValidated = valid;

				data.context = this._renderDownload(files);
				if (replacedElement) {
					replacedElement.replaceWith(data.context);
				} else {
					data.context.appendTo(this._files);
				}
				data.context.data('data', data);

				this._reflow = this._transition && data.context[0].offsetWidth;
				data.context.addClass('in');
			}
		});
		$('div.ss-upload *').entwine({
			getUploadField: function getUploadField() {

				return this.parents('div.ss-upload:first');
			}
		});

		$('div.ss-upload .ss-uploadfield-fromfiles').entwine({
			onclick: function onclick(e) {
				this.getUploadField().openSelectDialog(this.closest('.ss-uploadfield-item'));
				e.preventDefault();
				return false;
			}
		});
	});
});