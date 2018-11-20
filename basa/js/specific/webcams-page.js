$(document).ready(function() {
	// Init webcams
	this.player = new Uppod({
		m:"video",
		uid:"videoplayer",
		file:"http://stream.dimgroup.com.ua:1936/cam8/stream.m3u8",
		poster:"../img/genplan.jpg"
	});
	this.player = new Uppod({
		m:"video",
		uid:"videoplayer2",
		file:"http://stream.dimgroup.com.ua:1936/cam8/stream.m3u8",
		poster:"../img/genplan.jpg"
	});

	// Webcams tabs
    function webcamsSlider(id) {

	    var technologyList = $(id).find('.webcams-list');
	    var controls = $(id).find('.webcams-tabs-list > li');

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

  	webcamsSlider('#webcams-page'); 
})	