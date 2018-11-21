$(document).ready(function() {
	// Mobile scripts
	if (screen.width <= 720) {
		window.location = "category-apartments-filter.php";
	}	
	// Genplan hover
	$('#genplan > a').mousemove(function (eventObject) {
          $data_tooltip = $(this).attr("data-description");
           $('.genplan-text').html($data_tooltip)
              .css({ 
                "top" : eventObject.pageY + 10,
                "left" : eventObject.pageX + 10
              })
              .show();
          }).mouseout(function () {
             $('.genplan-text').hide()
              .html("")
              .css({
                  "top" : 0,
                  "left" : 0
              });
      });
})	