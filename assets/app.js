
// empty object for code to live on
var filterApp = {};
filterApp.dataAttr = ['data-content', 'data-shape', 'data-color'];
filterApp.dataName = ['Content', 'Shape', 'Color'];
filterApp.navSelector  = ['ul.filterNavContent a.filterControl', 'ul.filterNavShapes a.filterControl', 'ul.filterNavColors a.filterControl', '.active'];

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// =========== Functions to occur on page load:

		$('section.filterResultsCurrent').hide();

		$('section.filterableItem').addClass('animated');

	// ============ Function that listens on click & evaluates filterApp.dataAttr[0] (Types)

	$(filterApp.navSelector[0]).on('click',function(event){

		event.preventDefault(); 

		filterApp.userSelection = $(this).text();

		// remove "active" class from any items	
		$(filterApp.navSelector[0] + filterApp.navSelector[3]).removeClass('active');

		// add active class to user's selection
		$('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').addClass('fadeOutRight').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').addClass('fadeInLeft').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[0] + ': ' + filterApp.userSelection);
		}

		console.log(filterApp.userSelection);

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[0] (Types)


	// ============ Function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)

	$(filterApp.navSelector[1]).on('click',function(event){

		event.preventDefault(); 

		filterApp.userSelection = $(this).text();

		// remove "active" class from any items	
		$(filterApp.navSelector[1] + filterApp.navSelector[3]).removeClass('active');

		// add active class to user's selection
		$('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').addClass('fadeOutRight').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').addClass('fadeInLeft').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[1] + ': ' + filterApp.userSelection);
		}

		console.log(filterApp.userSelection);

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)	


	// ============ Function that listens on click & evaluates filterApp.dataAttr[2] (Colors)

	$(filterApp.navSelector[2]).on('click',function(event){

		event.preventDefault(); 

		filterApp.userSelection = $(this).text();

		// remove "active" class from any items	
		$(filterApp.navSelector[2] + filterApp.navSelector[3]).removeClass('active');

		// add active class to user's selection
		$('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').addClass('fadeOutRight').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').addClass('fadeInLeft').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[2] + ': ' + filterApp.userSelection);
		}

		console.log(filterApp.userSelection);
	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[2] (Colors)

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready