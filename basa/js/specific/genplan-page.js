$(document).ready(function() {
	// Mobile scripts
	if (screen.width <= 720) {
		window.location = "category-apartments-filter.php";
	}	
	// Genplan hover

	(function(){
	    var popup = document.getElementById('genplan-text');

		$('#genplan > a').hover(function(e) {
	        e.preventDefault();
	        var bodyOffsets = document.body.getBoundingClientRect();
	        var attrDescr = $(this).attr('data-description');
	        $('.genplan-text').html(attrDescr);
	        popup.style.opacity = '1';
	        popup.style.left = e.pageX - bodyOffsets.left  + 'px';
	        popup.style.top = e.pageY - popup.offsetHeight + 'px';
		}, function() {
			popup.style.opacity = '0';
		});

	})();
})	