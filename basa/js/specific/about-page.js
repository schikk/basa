$(document).ready(function() {

	// About nature tab slider
	function aboutNatureTabSlider(id) {

	    var slideList = $(id).find('.about-nature-tabs-text-container > ul, .about-nature-left-photo > ul, .about-nature-middle-photo > ul, .about-nature-right-photo > ul');
	    var controls = $(id).find('.about-nature-tabs-btns > span');

	    var controlLeft = $(id).find('#about-nature-tabs-btn1');
	    var controlRight = $(id).find('#about-nature-tabs-btn2');

	    controls.eq(0).addClass('active');
	    slideList.find('li').removeClass('active');
	    slideList.find('li:nth-of-type(1)').addClass('active');

	    $(id).find('ul > li').each(function(index, el) {

	      var activeSlideIndex = $(this).index();
	      var numberOfSlides = slideList.find('li').length;
	      var slideWidth = 100/numberOfSlides;

	      slideList.find('li').css('width', slideWidth + '%');
	      slideList.css('width', 100*numberOfSlides + '%');
	      slideList.css('transform', 'translateX(0)');
	      setTimeout(function(){
	        slideList.css('transition', 'transform .5s ease');
	      }, 600);
	    });

		controlRight.on('click', function(event) {
		  var numberOfSlides = slideList.find('li').length;
		  var slideWidth = 100/numberOfSlides;
		  var activeSlide = slideList.find('li.active');
		  var activeSlideInex = slideList.find('li.active').index();

		  if ( activeSlide.next('li').length > 0 ){
		    slideList.css('transform', 'translateX(-' + (activeSlideInex + 1)*slideWidth + '%)');
		    activeSlide.removeClass('active').next('li').addClass('active');
		    controls.removeClass('active');
		    controls.eq( activeSlideInex + 1 ).addClass('active');
		  } else {
		    slideList.css('transform', 'translateX(0)');
		    activeSlide.removeClass('active');
		    slideList.find('li:first-of-type').addClass('active');
		    controls.removeClass('active');
		    controls.eq(0).addClass('active');
		  }
		});

		controlLeft.on('click', function(event) {
		  var numberOfSlides = slideList.find('li').length;
		  var slideWidth = 100/numberOfSlides;
		  var activeSlide = slideList.find('li.active');
		  var activeSlideInex = slideList.find('li.active').index();

		  if ( activeSlide.prev('li').length > 0 ){
		    slideList.css('transform', 'translateX(-' + (activeSlideInex - 1)*slideWidth + '%)');
		    activeSlide.removeClass('active').prev('li').addClass('active');
		    controls.removeClass('active');
		    controls.eq( activeSlideInex - 1 ).addClass('active');
		  } else {
		    slideList.css('transform', 'translateX(-' + (numberOfSlides - 1)*slideWidth + '%)');
		    activeSlide.removeClass('active');
		    slideList.find('li:last-of-type').addClass('active');
		    controls.removeClass('active');
		    controls.eq( numberOfSlides - 1 ).addClass('active');
		  }
		});

	  };

	aboutNatureTabSlider('#about-nature');

	// About technology slider
    function aboutTechnologySlider(id) {

	    var technologyList = $(id).find('.about-technology-photo-list, .about-technology-text-list');
	    var controls = $(id).find('.about-technology-tabs-list > li');

	    controls.eq(0).addClass('active');
	    technologyList.find('li').removeClass('active');
	    technologyList.find('li:nth-of-type(1)').addClass('active');

	    technologyList.find('li').each(function(index, el) {

	      var activeSlideIndex = $(this).index();

	      var numberOfSlides = technologyList.find('li').length;
	      var slideWidth = 100/numberOfSlides;

	      technologyList.find('li').css('width', slideWidth + '%');
	      technologyList.css('width', 100*numberOfSlides + '%');
	      technologyList.css('transform', 'translateX(0)');
	      setTimeout(function(){
	        technologyList.css('transition', 'transform .5s ease');
	      }, 600);
	    });

	    controls.on('click', function() {
	      var thisIndex = $(this).index();
	      var numberOfSlides = technologyList.find('li').length;
	      var slideWidth = 100/numberOfSlides;

	      technologyList.find('li').removeClass('active');
	      controls.removeClass('active');
	      technologyList.find('li').eq(thisIndex).addClass('active');
	      controls.eq(thisIndex).addClass('active');
	      technologyList.css('transform', 'translateX(' + -thisIndex*slideWidth + '%)');
	    });
  	};

  	aboutTechnologySlider('#about-technology-tab-slider');

  	// Hover Effect
  	$('.home-back-link').hover(function() {
  		$('.home-back').addClass('hovered');
  	}, function() {
  		$('.home-back').removeClass('hovered');
  	});

  	// Infrastructure map
    function infrastructureMap() {

		var lat = 50.403949;
		var lng = 30.530163;

  		google.maps.event.addDomListener(window, 'load', init(lat, lng));

      function init(lat, lng) {
          var mapOptions = {
              zoom: 17,
              scrollwheel: true,
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              center: new google.maps.LatLng(lat, lng),
              styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
          };

          var mapElement = document.getElementById('infrastructure-map');
          var map = new google.maps.Map(mapElement, mapOptions);
          var image = "img/elements/logo-map.svg";
          var myLatLng = new google.maps.LatLng(lat, lng);

          var mapMarkerMain = new
              google.maps.Marker({
              position: myLatLng,
              map: map,
              title: '',
              icon: image
          });

          function restaurantsMarker() {
			var imageIcon = "img/map-icons/restaurants.svg";
			markers = [
				['Restaurant 1', 50.403730,30.528071],
				['Restaurant 2', 50.403497,30.524354],
				['Restaurant 3', 50.404707,30.525280]
			]
			for( i = 0; i < markers.length; i++ ) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        restaurantsMarker = new google.maps.Marker({
		            position: position,
		            map: map,
		            icon: imageIcon,
		            title: markers[i][0]
		        });
		    }	
          }
		  restaurantsMarker();

          function productsMarker() {
			var imageIcon = "img/map-icons/products.svg";
			var markers = [
				['Shop 1', 50.402521,30.532252],
				['АТБ', 50.401629,30.528437],
				['Shop 3', 50.401029,30.531713]
			]
			for( i = 0; i < markers.length; i++ ) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        productsMarker = new google.maps.Marker({
		            position: position,
		            map: map,
		            icon: imageIcon,
		            title: markers[i][0]
		        });
		    }        	
          }
		  productsMarker();

          function sportsMarker() {
			var imageIcon = "img/map-icons/sport.svg";
			var markers = [
				['Mixstyle Dance Studio', 50.401230,30.529176],
				['Crystal fitness', 50.403315,30.531606]
			]
			for( i = 0; i < markers.length; i++ ) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        sportsMarker = new google.maps.Marker({
		            position: position,
		            map: map,
		            icon: imageIcon,
		            title: markers[i][0]
		        });
		    }        	
          }
		  sportsMarker();

          function parksMarker() {
			var imageIcon = "img/map-icons/parks.svg";
			var markers = [
				['Park', 50.402758,30.528884]
			] 
			for( i = 0; i < markers.length; i++ ) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        parksMarker = new google.maps.Marker({
		            position: position,
		            map: map,
		            icon: imageIcon,
		            title: markers[i][0]
		        });
		    }
          }
		  parksMarker();	  
      }
		$('.infrastructure-switches-list > li').click(function(event) {
			$('#infrastructure-map img[src^="img/map-icons/"]').addClass('hover-map-icons');
			$('.infrastructure-switches-list > li').removeClass('active');
			if ($(this).hasClass('infrastructure-restaurants')) {
				$('#infrastructure-map img[src^="img/map-icons/restaurants.svg"]').removeClass('hover-map-icons');
			} else if ($(this).hasClass('infrastructure-products')) {
				$('#infrastructure-map img[src^="img/map-icons/products.svg"]').removeClass('hover-map-icons');
			} else if ($(this).hasClass('infrastructure-sport')) {
				$('#infrastructure-map img[src^="img/map-icons/sport.svg"]').removeClass('hover-map-icons');
			} else if ($(this).hasClass('infrastructure-parks')) {
				$('#infrastructure-map img[src^="img/map-icons/parks.svg"]').removeClass('hover-map-icons');
			}
			$(this).addClass('active').next('li').removeClass('active');
		});	 
    };
   infrastructureMap();

  	// Swipe slider on mobile
  	if ( $(window).width() < 767 ) {
  	  $('.about-nature-left-photo, .about-nature-middle-photo, .about-nature-right-photo').wrapAll('<div class="about-nature-tabs-photo-wrap"></div>');
	  function mobileSwipeSlider(id) {
	  	$('.img-over-view').remove();
	    var photosList = $(id).find('.about-nature-tabs-photo-wrap');
	    var controls = $(id).find('.mobile-slider-controls > li');

	    controls.eq(0).addClass('active');
	    photosList.find('div').removeClass('active');
	    photosList.find('div:nth-of-type(1)').addClass('active');

	    $(id).find('.about-nature-tabs-photo-wrap > div').each(function(index, el) {

	      var activeSlideIndex = $(this).index();
	      var numberOfSlides = photosList.find('div').length;
	      var slideWidth = 100/numberOfSlides;

	      photosList.find('div').css('width', slideWidth + '%');
	      photosList.css('width', 100*numberOfSlides + '%');
	      photosList.css('transform', 'translateX(0)');
	      setTimeout(function(){
	        photosList.css('transition', 'transform .5s ease-in-out');
	      }, 600);
	    });

	      var slides = photosList.find('div');
	      var slidesNumber=slides.length;

      	photosList.on('swipeleft', function(event){
	      var numberOfSlides = photosList.find('div').length;
	      var slideWidth = 100/numberOfSlides;
	      var activeSlide = photosList.find('div.active');
	      var activeSlideInex = photosList.find('div.active').index();

	      if ( activeSlide.next('div').length > 0 ){
	        photosList.css('transform', 'translateX(-' + (activeSlideInex + 1)*slideWidth + '%)');
	        activeSlide.removeClass('active').next('div').addClass('active');
	        controls.removeClass('active');
	        controls.eq( activeSlideInex + 1 ).addClass('active');
	      } else {
	        photosList.css('transform', 'translateX(0)');
	        activeSlide.removeClass('active');
	        controls.removeClass('active');
	        photosList.find('div:first-of-type').addClass('active');
	        controls.eq(0).addClass('active');
	      }
	    });
	    photosList.on('swiperight', function(event){
	      var numberOfSlides = photosList.find('div').length;
	      var slideWidth = 100/numberOfSlides;
	      var activeSlide = photosList.find('div.active');
	      var activeSlideInex = photosList.find('div.active').index();

	      if ( activeSlide.prev('div').length > 0 ){
	        photosList.css('transform', 'translateX(-' + (activeSlideInex - 1)*slideWidth + '%)');
	        activeSlide.removeClass('active').prev('div').addClass('active');
	        controls.removeClass('active');
	        controls.eq( activeSlideInex - 1 ).addClass('active');	        
	      } else {
	        photosList.css('transform', 'translateX(-' + (numberOfSlides - 1)*slideWidth + '%)');
	        activeSlide.removeClass('active');
	        controls.removeClass('active');
	        photosList.find('div:last-of-type').addClass('active');
	        controls.eq( numberOfSlides - 1 ).addClass('active');
	      }
	    });
	  };
	  mobileSwipeSlider('#mobile-swipe-slider');  		
  	}
})	