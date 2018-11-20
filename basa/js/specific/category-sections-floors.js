$(document).ready(function() {

	if (screen.width <= 720) {
		window.location = "category-apartments-filter.php";
	}

	(function(){
	    var popup = document.getElementById('apartment-info-pop-up');

		$('.floor-plan svg a').hover(function(e) {
	        e.preventDefault();
	        var attrName = $(this).attr('data-aprtment-name');
	        var attrSquare = $(this).attr('data-aprtment-square');
	        $('.apartment-type-name').html(attrName);
	        $('.apartment-square-value').html(attrSquare);
	        popup.style.opacity = '1';
	        popup.style.left = e.pageX - popup.offsetWidth + 'px';
	        popup.style.top = e.pageY + 'px';
		}, function() {
			popup.style.opacity = '0';
		});

	})();

})	
