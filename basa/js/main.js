$(document).ready(function() {

  if ( window.location.pathname === '/' ){
    setTimeout(function() {
      $('.scroll-burger-wrapper').addClass('onload');
    }, 4300);
  
  } else {
    setTimeout(function() {
      $('.scroll-burger-wrapper').addClass('onload');
    }, 500);   
  }
  /*Main Preloader*/
  setTimeout(function() {
    $('.preloader').addClass('onload onload-img');
  }, 1000);
  setTimeout(function() {
    $('.intro-preloader').addClass('load');
  }, 2500);
  setTimeout(function() {
    $('.preloader .pr-white').addClass('fade');  
  }, 2800);  
  setTimeout(function() {
    $('.intro').addClass('onload');
    $('.intro-content').addClass('in-view');
  }, 4000);
  setTimeout(function() {
    $('.preloader').hide();
    $('.main-logo').addClass('in-view');

  // Parallax initial 
  if ( $(window).width() > 767 ){
    $(window).stellar({
      positionProperty: 'transform',
      horizontalScrolling: false,
      hideDistantElements: false,
    });
    $.stellar.positionProperty.foobar = {
      setPosition: function($el, x, startX, y, startY) {
        $el.css('transform', 'translateY(' +
          (x - startX) + 'px, ' +
          (y - startY) + 'px, ' +
          '0)');
      }
    }
  }
  }, 4800);
        
  // Add animation for text
  $('.basa-text p').addClass('animation-element-text');

  // Menu init
  $('.scroll-burger').click(function(event) {
    $('.main-menu-container').addClass('active');
    $('body').addClass('overflow');
    $('.main-menu-container .animation-element').addClass('in-view');

  });
  $('.close-menu-btn').click(function(event) {
    $('.main-menu-container').removeClass('active');
    $('body').removeClass('overflow');
    $('.main-menu-container .animation-element').removeClass('in-view');
  });

  // Form init
	$('.form-initial-btn').click(function(event) {
		event.preventDefault();
		$('.content').addClass('form-active');
		$('.feedback-form').addClass('form-active');
    $('.page-overlay').addClass('active');
    $('body').addClass('overflow');
	});

	$('.close-modal-btn').click(function(event) {
		event.preventDefault();
		$('.content').removeClass('form-active');
		$('.feedback-form').removeClass('form-active');
    $('.page-overlay').removeClass('active');
     $('body').removeClass('overflow');
	});

  // Animations on scroll

  var $animation_elements = $('.animation-element, .bg-parallax, .animation-element-text, .animation-element-list, .img-animation-element, .animation-element-content, .map-video');
  var $window = $(window);

  function check_if_in_view() {

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
          setTimeout(function() {
            $element.addClass('in-view-text');
          }, 200);
            $element.addClass('in-view');
      } else {
        // $element.removeClass('in-view');
      }
    });
  }

  if ( $(window).width() > 767 ) {
    check_if_in_view();
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
  }

	// FORM VALIDATION
    function sendContactsForm(){
        var inputs = $('.modal-contacts-input-wrapper input');
        var nameInput = $('#user-name');
        var phoneInput = $('#user-tel');
        var emailInput = $('#user-email');
        var submitBtn = $('#submit-btn');
        var form = $('#feedback-form');
        var succesMessage = $('.success-mssg-block');
        var antiBotInput = $('.varificate-input');

      // Form fields label up
      inputs.on('keyup', function(event) {
        if ( $(this).val() != '' ){
          $(this).addClass('filled');
        } else {
          $(this).removeClass('filled');
        }
      });

      inputs.each(function(index, el) {
        if ( $(this).val() != '' ){
          $(this).addClass('filled');
        } else {
          $(this).removeClass('filled');
        }
      });

        function validateName($name) {
            var nameReg = /^[a-zA-Zа-яА-Я ]{2,3000}$/;
            return nameReg.test( $name );
        }

        function validatePhone($phone) {
            var phoneReg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
            return phoneReg.test( $phone );
        }
        function validateEmail($email) {
            var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailReg.test( $email );
        }        

        // Form AJAX
        form.on('submit', function(event) {
          
          event.preventDefault();
    			if ( !validateName( $('#user-name').val() ) ){
    				$('#user-name').parent().addClass('invalid');
    				setTimeout(function(){
    					$('#user-name').parent().removeClass('invalid');
    				}, 800);
    			}
    			if ( !validatePhone( $('#user-tel').val() ) ){
    				$('#user-tel').parent().addClass('invalid');
    				setTimeout(function(){
    					$('#user-tel').parent().removeClass('invalid');
    				}, 800);
    			}
    			if ( !validateEmail( $('#user-email').val() ) ){
    				$('#user-email').parent().addClass('invalid');
    				setTimeout(function(){
    					$('#user-email').parent().removeClass('invalid');
    				}, 800);
    			} 			                                            
                       
          if (validateName(nameInput.val()) && validatePhone(phoneInput.val()) && validateEmail(emailInput.val()) ) {
            // Serialize the form data.
            var formData = $(this).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
            })
          .done(function(response) {
             form[0].reset();
             nameInput.removeClass('invalid');
             $('#feedback-form').css('display', 'none');
             $('.success-msg').css('display', 'block');
               var succesMessage = setTimeout(function(){
                $('#feedback-form').css('display', 'block');
                // open success massamge
                $('.success-msg').css('display', 'none');
                inputs.removeClass('filled');
              }, 5000);
            })
            .fail(function(data) {
                submitBtn.html('Failed');
            });
          } 
          else {
            if ( validateName(nameInput.val()) == false ){
              nameInput.addClass('invalid');
            }
            if ( validatePhone(phoneInput.val()) == false ){
              phoneInput.addClass('invalid');
            }
            if ( validateEmail(emailInput.val()) == false ){
              emailInput.addClass('invalid');
            }                             
          }
      });
    };

    sendContactsForm();

    // Back btn on hover
    $('#back-btn').hover(function() {
      $('.back-text').css('opacity', '1');
    }, function() {
      $('.back-text').css('opacity', '0');
    });
    $('#back-genplan-btn').hover(function() {
      $('.back-genplan-text').css('opacity', '1');
    }, function() {
      $('.back-genplan-text').css('opacity', '0');
    });
    $('#back-news-btn').hover(function() {
      $('.back-to-news-btn').css('opacity', '1');
    }, function() {
      $('.back-to-news-btn').css('opacity', '0');
    });

    // Google maps init
    function googleMap() {

      $('.watch-on-map-link').on('click', function(event) {

        event.preventDefault();

        $('.maps-container').addClass('active');
        var lat = $(this).attr('data-lat');
        var lng = $(this).attr('data-lng');
        
        $('.map-lightbox-wrapper').addClass('visible');
        $('#map').html('');

        setTimeout(function(){
          google.maps.event.addDomListener(window, 'load', init(lat, lng));
        }, 500);
      });

      $('.modal-close-btn').on('click', function() {
       $('.maps-container').removeClass('active');
        setTimeout(function(){
        $('#map').html('');
        }, 500);
      });

      function init(lat, lng) {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 17,
              scrollwheel: true,
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,

              // The latitude and longitude to center the map (always required)
              center: new google.maps.LatLng(lat, lng),

              // How you would like to style the map. 
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
          };
          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);
          var image = "img/elements/logo-map.svg";
          var myLatLng = new google.maps.LatLng(lat, lng);
          var myLatLng2 = new google.maps.LatLng(49.445273, 32.052885);

          // Let's also add a marker while we're at
          var mapMarker = new
              google.maps.Marker({
              position: myLatLng,
              map: map,
              title: '',
              icon: image
          });
      }  
    };
   googleMap();

  // Smoothly anchor link
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

  // Swipe events init
  var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });    

    // Mobile sripts
    if ( $(window).width() < 767 ) {
      $('.mobile-read-more').click(function() {
        $('.basa-mobile-text').toggleClass('full-text');
        $('.mobile-anchor').toggleClass('hide-text');
        $('.mob-read-more-text').toggleClass('hide-text');
      });
      $('.cs-content-container .mobile-btn-container').insertAfter('.cs-info-container');
      $('.bf-left-col .cs-info-list').insertAfter('.bf-left-col .bf-content');
      $('.news-right-col h2').insertBefore('.news-img-container');
      $('.news-left-col-content .basa-btn').insertAfter('.our-news-wrapper');
      $('.copyright').insertAfter('.footer-social-list');
      $('.m-m-left-col, .m-m-right-col').wrapAll('<div class="mobile-menu-wrap"></div>');
      $('.m-m-left-col').insertAfter('.m-m-right-col');
      $('.scroll-down-contacts-mobile-anchor').click(function(event) {
        $('.mobile-menu-wrap').animate({
            scrollTop: $('.mobile-menu-wrap').height()
        }, 400);
      });
    } 

})