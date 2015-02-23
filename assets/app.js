
// empty object for code to live on
var filterApp = {};
filterApp.dataAttr = ['data-content', 'data-shape', 'data-color'];
filterApp.dataName = ['Content', 'Shape', 'Color'];

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// =========== Functions to occur on page load:

		$('section.filterResultsCurrent').hide();

		$('section.filterableItem').addClass('animated');

	// ============ Function that listens on click & evaluates filterApp.dataAttr[0] (Types)

	$('ul.filterNavContent a.filterControl').on('click',function(event){

		event.preventDefault(); 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.userSelection = $(this).text();
		console.log("Content Filter = " + filterApp.userSelection);

		// remove "active" class from any items	
		$('a.filterControl.active').removeClass('active');

		// add active class to user's selection
		$('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[0] + ': ' + filterApp.userSelection);
		}

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[0] (Types)


	// ============ Function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)

	$('ul.filterNavShapes a.filterControl').on('click',function(event){

		event.preventDefault(); 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.userSelection = $(this).text();
		console.log("Shape Filter = " + filterApp.userSelection);

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[1] + ': ' + filterApp.userSelection);
		}

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)	


	// ============ Function that listens on click & evaluates filterApp.dataAttr[2] (Colors)

	$('ul.filterNavColors a.filterControl').on('click',function(event){

		event.preventDefault(); 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.userSelection = $(this).text();
		console.log("Colour Filter = " + filterApp.userSelection);

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').hide();

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			$('section.filterResultsCurrent').hide();
			$('section.filterableItem').show();
		} else {
			$('section.filterResultsCurrent').show();
			$('li span.currentChoice').html(filterApp.dataName[2] + ': ' + filterApp.userSelection);
		}

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