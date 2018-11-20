$(document).ready(function() {

	// Constriction news pie chart
	$('.construction-news-pie-chart-list > li').each(function(index, el) {
		var constrictionPercent = $(this).find('.construction-news-pie-percent').html();
		var initCircliful = $(this).find('.construction-news-pie');

	    initCircliful.circliful({
	        animation: 1,
	        animationStep: 5,
	        animateInView: true,
	        foregroundBorderWidth: 12,
	        backgroundBorderWidth: 12,
	        percent: constrictionPercent,
	        textSize: 40,
	        backgroundColor: '#ebebeb',
	        foregroundColor: '#f9a01a',
	        percentageTextSize: '24',
	        textAdditionalCss: 'font-weight: bold;',
	        fontColor: '#414042'
	    });
	});
	// Decorate line
	$('.construction-news-photo-list > li').each(function(index, el) {
		var line = $('<div class="point-line-item"><span></span></div>');
		$('.decorate-point-line').append(line);
	});

	// Content photos lightbox

	function contentPhotosLightbox() {
		var $lightbox = $('.photos-lightbox-modal'),
			$lightboxContent = $lightbox.find('.photos-lightbox-modal-content'),
			$closeBtn = $lightbox.find('.photos-lightbox-modal-close-btn'),
			$thumbnails = $('.news-photo-container'),
			$html = $('body');

		// Events
		$thumbnails.click(function (event) {
			event.preventDefault();
			var thisIndex = $.inArray(this, $thumbnails);

			if (!$lightbox.hasClass('filled')) {
				var ul = $(this).find('.news-photo-gallery-list li');
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
	if ( $(window).width() < 767 ) {
		$('.construction-news-info-left-col .text, .construction-news-info-left-col .basa-btn').wrapAll('<div class="mobile-construction-news-info-wrapper"></div>');
		$('.mobile-construction-news-info-wrapper').insertAfter('.construction-news-info-right-col');
	}
})
