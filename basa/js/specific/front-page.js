$(document).ready(function() {		
	
	if ( $(window).width() > 767 ) {
		// Fade on scroll
		$(window).on('scroll', function() {
			if ( $(window).scrollTop() > 50 ){
				$('.main-logo').addClass('faded');
			} else {
				$('.main-logo').removeClass('faded');
			}
		});
		$(window).on('scroll', function() {
			if ( $(window).scrollTop() > 420 ){
				$('.intro-content').addClass('faded');
			} else {
				$('.intro-content').removeClass('faded');
			}
		});
		// hover flats
		$('.bf-flats-category-list > li a').hover(function() {
		 $(this).addClass('hover');
		 $('.bf-flats-category-list > li a').not($(this)).addClass('over-hover');
		}, function() {
		  $(this).removeClass('hover');
		  $('.bf-flats-category-list > li a').removeClass('over-hover');
		});
	}

	// In view animations

	var $animation_elements = $('.map-video, .our-news');
	var $window = $(window);

	function check_if_in_specific_view() {

	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {

	  var $element = $(this);
	  var element_height = $element.outerHeight();
	  var element_top_position = $element.offset().top;
	  var element_bottom_position = (element_top_position + element_height);

	  //check to see if this current container is within viewport

		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position - 100 <= window_bottom_position)) {
		    $element.addClass('onload-view');
		    if ($('.map-video').hasClass('onload-view')) {
		      $('.map-video').get(0).play();
		      setTimeout(function() {
		        $('.location-map-container img').css('opacity', '1');
		        $('.map-video').css('opacity', '0');
		      }, 5000);
		    }
			} else {
			// $element.removeClass('onload-view');
			}
		});
	}

	if ( $(window).width() > 767 ){

	check_if_in_specific_view();

	$window.on('scroll resize', check_if_in_specific_view);
	$window.trigger('scroll');

	}

	// Full completion process in %
	var summ = 0;
	var fullProcess = $('.progress-precent .count');
	$('.work-schedule-list > li span.count').each(function() {
		summ += parseInt($(this).html(), 10);
		fullProcess.html(summ / 4);
	});		

		// Animated number counter
	var $findme = $('#anim-counts');
	var exec = false;
	// $('.scales-done').addClass('zero-width');
	function Scrolled() {
	  $findme.each(function() {
	    var $section = $(this),
	      findmeOffset = $section.offset(),
	      findmeTop = findmeOffset.top,
	      findmeBottom = $section.height() + findmeTop,
	      scrollTop = $(document).scrollTop(),
	      visibleBottom = window.innerHeight,
	      prevVisible = $section.prop('_visible');

	    if ((findmeTop > scrollTop + visibleBottom) ||
	      findmeBottom < scrollTop) {
	      visible = false;
	    } else visible = true;

	    if (!prevVisible && visible) {
	    	if(!exec){
				$('.count').each(function() {
				  $(this).prop('Counter', 0).animate({
				    Counter: $(this).text()
				  }, {
				    duration: 6000,
				    step: function(now) {
				      $(this).text(Math.ceil(now));
				      exec = true;
				    }
				  });
				});
				// Add count value to diagram
				$('.construction-news-list > li').each(function() {
					var cont = $(this).find('.count');
					var countValue = cont.html();
					$(this).find('.scales-done').css('width', countValue + '%');
				});
	      	}
			// if ($('.our-news').hasClass('onload-view')) {
			// 	svgAnimationInit();
			// }
	    }
	    $section.prop('_visible', visible);
	  });

	}

	function Setup() {
	  var $top = $('#top'),
	    $bottom = $('#bottom');

	  $top.height(500);
	  $bottom.height(500);

	  $(window).scroll(function() {
	    Scrolled();
	  });
	}
	$(document).ready(function() {
	  Setup();
	});

	// News svg hover

	function NewsSvgHover() {
		var newsWorkDescription = $('.work-schedule-list > li');
		var cursorPoint = $('.work-schedule-point');
		var generalFasadView = $('#general-view');
		newsWorkDescription.hover(function() {
			generalFasadView.addClass('opacity');
			newsWorkDescription.not($(this)).addClass('opacity');
		}, function() {
			generalFasadView.removeClass('opacity');
			newsWorkDescription.removeClass('opacity');
		});
		$('#news-general-hover').hover(function() {
			$('#all-view').css('opacity', '1');
		}, function() {
			$('#all-view').css('opacity', '0');
		});
		$('#news-fasad-hover').hover(function() {
			$('#fasad-view').css('opacity', '1');
		}, function() {
			$('#fasad-view').css('opacity', '0');
		});
		$('#news-trees-hover').hover(function() {
			$('#trees-view').css('opacity', '1');
		}, function() {
			$('#trees-view').css('opacity', '0');
		});
		$('#news-communications-hover').hover(function() {
			$('#communications-view').css('opacity', '1');
		}, function() {
			$('#communications-view').css('opacity', '0');
		});					
	};
	NewsSvgHover();


})	