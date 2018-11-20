$(document).ready(function() {
	// Docs accordion
	$('.docs-list > li h3').click(function(event) {
		$(this).parent().find('.docs-content').slideToggle();
		$(this).parent().toggleClass('active');
	});

	// Create docs icon
	var link = document.querySelectorAll('.docs-list > li > .docs-content > a');
	var docFile = /docx$/;
	var pdfFile = /pdf$/;
	var xlsFile = /xls$/;

	function createIcon(classNames) {
	  var icon = document.createElement('i');
	  icon.className = classNames;
	  return icon;
	}

	for (var i = 0; i < link.length; i++) {
	  var href = link[i].getAttribute('href');

	  if (docFile.test(href)) {
	    link[i].appendChild(createIcon('far fa-file-word'));
	  }
	  else if (pdfFile.test(href)) {
	    link[i].appendChild(createIcon('far fa-file-pdf'));
	  }
	 else if (xlsFile.test(href)) {
	    link[i].appendChild(createIcon('far fa-file-excel'));
	  } else {
	    link[i].appendChild(createIcon('far fa-file'));
	  }
	}
})	