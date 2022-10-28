/**
 * AM Proposal Builder - builder.js
 */

$(function() {

	// Update merchant name live
	$('input.merchant-name').on('input', function() {
		var newValue = $(this).val(),
			$previewItem = $('.masthead .merchant-name');

		if (newValue.length > 0) {
			$previewItem.html(newValue);
		} else {
			$previewItem.html($previewItem.attr('data-default'));
		}
	});

	// Update proposal greeting live
	$('textarea.greeting').on('input', function() {
		var newValue = $(this).val(),
			$previewItem = $('.preview .preview-greeting');

		if (newValue.length > 0) {
			newValue = newValue.replace(/(?:\r\n|\r|\n)/g, '<br />');
			$previewItem.html(newValue);
		} else {
			$previewItem.html($previewItem.attr('data-default'));	
		}
	});

	// Update email address live
	$('input.your-email').on('input', function() {
		var newValue = $(this).val(),
			$previewItem = $('.preview h5.email');

		if (newValue.length > 0) {
			$previewItem.find('a').html(newValue).attr('href', "mailto:" + newValue);
		} else {
			$previewItem.find('a').html($previewItem.attr('data-default')).attr('href', "mailto:" + $previewItem.attr('data-default'));
		}
	});

	// Update phone number live
	$('input.your-phone-number').on('input', function() {
		var newValue = $(this).val(),
			$previewItem = $('.preview h5.phone');

		if (newValue.length > 0) {
			$previewItem.find('a').html(newValue).attr('href', "tel:" + newValue);
		} else {
			$previewItem.find('a').html($previewItem.attr('data-default')).attr('href', "tel:" + $previewItem.attr('data-default'));
		}
	});

	/**
	 * Changing selection of Customization section
	 */
	$(document).on('click', 'section.customization a', function() {
		var $a = $(this),
			$section = $a.parents('section.customization'),
			$span = $a.find('span'),
			$masthead = $('.masthead');

		$section.find('a').removeClass('selected');

		$a.addClass('selected');

		$masthead.attr('class', $a.attr('class') + " masthead");

		/*
		if ($a.hasClass('blue')) $masthead.attr('class', 'masthead blue');
		if ($a.hasClass('black')) $masthead.removeClass().addClass('black');
		if ($a.hasClass('green')) $masthead.removeClass().addClass('green');
		if ($a.hasClass('yellow')) $masthead.removeClass().addClass('yellow');
		*/

		return false;
	});

	/**
	 * Collapse/expand of Introduction section
	 */
	$(document).on('click', 'section h2', function() {
		var $h2 = $(this),
			$section = $h2.parents('section'),
			$caret = $h2.find('img'),
			$p = $section.find('p'),
			$ul = $section.find('ul')
			$a = $section.find('a');

		$caret.toggleClass('closed');
		$p.toggleClass('closed');
		$a.toggleClass('closed');
		$ul.toggleClass('closed');
	});

	/**
	 * Clone and insertAfter the form item, then clone and insertAfter the
	 * matching preview item on the right
	 */
	$(document).on('click', '.proposal-item button.add', function() {
		var $proposalItemOriginal = $(this).parents('.proposal-item'),
			$currentDropdown = $proposalItemOriginal.find('.item-name'),
			_id = $proposalItemOriginal.attr('id'),
			_preview_id = "preview-" + _id,
			$previewItemOriginal = $("#" + _preview_id);

		var newID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		
		// Currently-selected item value in the dropdown is not being copied over
		// successfully so we need to manually find it and set it correctly
		var $clonedProposalItem = $proposalItemOriginal.clone();

		$clonedProposalItem.attr('id', newID);

		$clonedProposalItem.find('select.item-name option').each(function() {
			if ($(this).html() == $currentDropdown.val()) {
				$(this).attr('selected', 'selected');
			}
		});

		$clonedProposalItem.insertAfter($proposalItemOriginal);

		$previewItemOriginal.clone().attr('id', 'preview-' + newID).insertAfter($previewItemOriginal);
	});

	$(document).on('click', '.proposal-item button.remove', function() {
		var $proposalItemOriginal = $(this).parents('.proposal-item'),
			_id = $proposalItemOriginal.attr('id'),
			_preview_id = "preview-" + _id,
			$previewItemOriginal = $("#" + _preview_id);

		// Can't remove the last proposal item
		if ($('.proposal-item').length == 1) return;

		$proposalItemOriginal.remove();
		$previewItemOriginal.remove();

	});

	// Update the corresponding proposal item comments area live
	$(document).on('input', '.proposal-item textarea.textarea-comments', function() {
		var _id = $(this).parents('.proposal-item').attr('id'),
			_preview_id = "preview-" + _id,
			value = this.value;

		$("#" + _preview_id + " .comments").html(value);
	});

	// Update rate, quantity, price, total on the corresponding proposal item live
	$(document).on('input', '.proposal-item li.half input[type=text]', function() {
		var _id = $(this).parents('.proposal-item').attr('id'),
			_preview_id = "preview-" + _id,
			value = this.value,
			$match;

		if ($(this).hasClass('rate')) $match = $("#" + _preview_id + " li.rate");
		if ($(this).hasClass('quantity')) $match = $("#" + _preview_id + " li.quantity");
		if ($(this).hasClass('price')) $match = $("#" + _preview_id + " li.price");
		if ($(this).hasClass('total')) $match = $("#" + _preview_id + " li.total");

		if (value.length == 0) {
			$match.hide();
		} else {
			$match.show().find('big').html(value);
		}			
	});

	// Swap the proposal item based on the selected type of product
	$(document).on('change', '.proposal-item select.item-name', function() {
		var $proposalItem = $(this).parents('.proposal-item'),
			_id = $proposalItem.attr('id'),
			_preview_id = "preview-" + _id,
			value = this.value,
			$match = $("#" + _preview_id);

		$proposalItem.find('h3.product-name').html(value);

		// Need to get current comments and keep them or it'll be out of sync
		if ($proposalItem.find('.textarea-comments').val().length > 0) {
			$("#" + _preview_id + " h3.name").html(value + "<small class='comments'>" + $(this).parents('.proposal-item').find('.textarea-comments').val() + "</small>");
		} else {
			$("#" + _preview_id + " h3.name").html(value + "<small class='comments'></small>");
		}

		// $("#" + _preview_id + " h3.name").text(value);



		if (value == "Square Point of Sale") {
			$match.removeClass().addClass('square-point-of-sale preview-item software clearfix');
			$match.find('img').hide();
		} else if (value == "Square Online") {
			$match.removeClass().addClass('square-online preview-item software clearfix');
			$match.find('img').hide();
		} else if (value == "Square for Restaurants") {
			$match.removeClass().addClass('square-for-restaurants preview-item software clearfix');
			$match.find('img').hide();
		} else if (value == "Square for Retail") {
			$match.removeClass().addClass('square-for-retail preview-item software clearfix');
			$match.find('img').hide();
		} else if (value == "Square Appointments") {
			$match.removeClass().addClass('square-appointments preview-item software clearfix');
			$match.find('img').hide();
		} else if (value == "Square Payroll") {
			$match.removeClass().addClass('preview-item software square-payroll clearfix');
			$match.find('img').hide();
		} else if (value == "Square Invoices") {
			$match.removeClass().addClass('preview-item software square-invoices clearfix');
			$match.find('img').hide();
		} else if (value == "Square Payments") {
			$match.removeClass().addClass('preview-item software square-payments clearfix');
			$match.find('img').hide();
		} else if (value == "Square Marketing") {
			$match.removeClass().addClass('preview-item software square-marketing clearfix');
			$match.find('img').hide();
		} else if (value == "Square Messages") {
			$match.removeClass().addClass('preview-item software square-messages clearfix');
			$match.find('img').hide();
		} else if (value == "Square Loyalty") {
			$match.removeClass().addClass('preview-item software square-loyalty clearfix');
			$match.find('img').hide();
		} else if (value == "Square Banking") {
			$match.removeClass().addClass('preview-item software square-banking clearfix');
			$match.find('img').hide();
		} else if (value == "Square Register") {
			$match.removeClass().addClass('preview-item hardware register clearfix');
			$match.find('img').show().attr('src', 'css/images/products/register@2x.png');
		} else if (value == "Square Terminal") {
			$match.removeClass().addClass('preview-item hardware terminal clearfix');
			$match.find('img').show().attr('src', 'css/images/products/terminal@2x.png');
		} else if (value == "Square Stand") {
			$match.removeClass().addClass('preview-item hardware stand clearfix');
			$match.find('img').show().attr('src', 'css/images/products/stand@2x.png');
		} else if (value == "Square Stand Mount") {
			$match.removeClass().addClass('preview-item hardware stand-mount clearfix');
			$match.find('img').show().attr('src', 'css/images/products/stand-mount@2x.png');
		} else if (value == "Square Reader") {
			$match.removeClass().addClass('preview-item hardware reader clearfix');
			$match.find('img').show().attr('src', 'css/images/products/reader@2x.png');
		}
	});


});