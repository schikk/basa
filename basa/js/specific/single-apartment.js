$(document).ready(function() {
	// Print page onclick
	$('.print-presentation').click(function(event) {
		event.preventDefault();
		window.print();
	});
	// Apartment view tab
	$('.apartment-view-btns span').click(function(event) {
		$('.apartment-view-btns span').removeClass('active');
		$(this).addClass('active').next('span').removeClass('active');
		if ($('#left-ap-view-btn').hasClass('active')) {
			$('#layout-scheme').addClass('active');
		} else {
			$('#layout-scheme').removeClass('active');
		}
		if ($('#right-ap-view-btn').hasClass('active')) {
			$('#layout-scheme-furniture').addClass('active');
		} else {
			$('#layout-scheme-furniture').removeClass('active');
		}
	});
	// Apartment window view modal
	function contentPhotosLightbox() {
		var $lightbox = $('.photos-lightbox-modal'),
			$lightboxContent = $lightbox.find('.photos-lightbox-modal-content'),
			$closeBtn = $lightbox.find('.photos-lightbox-modal-close-btn'),
			$thumbnails = $('.apartment-window-view-container'),
			$html = $('body');

		// Events
		$thumbnails.click(function (event) {
			event.preventDefault();
			var thisIndex = $.inArray(this, $thumbnails);

			if (!$lightbox.hasClass('filled')) {
				var ul = $(this).find('.apartment-window-view-gallery-list li');
				ul.each(function (index, li) {
					var src = $(this).find('img').attr('src');
					$lightboxContent.append('<img src="' + src + '">');
				})
				$lightbox.addClass('filled');
			}
			$html.addClass('overflow');
			$lightbox.addClass('visible');
			$lightboxContent.scrollTop(0);
		});

		$closeBtn.click(function (event) {
			$html.removeClass('overflow');
			$lightbox.removeClass('visible');
			$lightbox.removeClass('filled');
			setTimeout(function() {
      			$lightboxContent.empty();
		    }, 1000);  
		});
	}
	contentPhotosLightbox();

	// Mobile scripts
    if ($(window).width() < 767) {
        $('.single-apartment-left-col').insertAfter('.single-apartment-main-col');
        $('.main-apartment-descr-col h1').insertBefore('.main-apartment-description');
        $('.apartment-window-view-container').insertAfter('.apartment-location-list');
        $('.single-apartment-left-col').insertAfter('.main-apartment-descr-list');
    }
})	