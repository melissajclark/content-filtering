
// empty object for code to live on
var filterApp = {};
filterApp.dataAttr = ['data-type', 'data-shape', 'data-color'];
filterApp.dataName = ['Type', 'Shape', 'Color'];

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// ======== functions that need to occur on page load ============

	/**
	*
	* Hide legend of results on page load
	*
	**/

	$('section.filterResultsCurrent').hide();

	$('section.filterableItem').addClass('animated');

	// ============ Function that listens on click & evaluates type data

	$('ul.filterNavTypes a.filterControl').on('click',function(){ 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.userSelection = $(this).text();

		// displays legend after user clicks on a filter link
		$('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').css('background', 'grey');
		console.log('hiding: [' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"] !');

		//finds items matching user's selection and shows them
		$('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').css('background', 'yellow');


		// hides legend if "all" is selected + shows all items when all is selected
		// if (filterApp.userSelection === 'all') {
		// 	$('section.filterResultsCurrent').hide();
		// 	$('section.filterableItem').show();
		// } else {
		// 	$('section.filterResultsCurrent').show();
		// 	$('li span.currentChoice').html(filterApp.dataName[0] + ': ' + filterApp.userSelection);
		// }

	});  
	// ============ End function that listens on click & evaluates type data

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready