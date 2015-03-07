
// empty object for code to live on
var filterApp = {};

// array to store data-attributes on filterable items
filterApp.dataAttr = ['data-source', 
					'data-details'];

// array to store selectors used throughout JS
filterApp.selector  = ['select#sourceChoice', 
						'select#workChoice', 
						'div.filterableItem', 
						'.filterableContent',
						'form.filterNav'];

// array to store classes added when hiding / showing items
filterApp.transition = ['hideItemTransition', 
						'showItemTransition'];

filterApp.values = ['English: ',
					'all',
					'French: ',
					'Tous'];
						
// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

$(filterApp.selector[2]).addClass("animated");

	// ============ Function that listens on click & evaluates type data

	$(filterApp.selector[4]).on("submit",function(event){ 

		event.preventDefault(); // prevents page from refreshing

		// finds the value of the user's selection (aka the desired content to view)
		filterApp.userSourceSelection = $(filterApp.selector[0]).val();
		filterApp.userLanguageSelection = $(filterApp.selector[1]).val();
		console.log(filterApp.userLanguageSelection + filterApp.userSourceSelection);

		/**
		*
		* If Statement: Evaluates English values on submit
		*
		**/
		
		// checks if Source = all and language = all
		if (filterApp.userSourceSelection === filterApp.values[1] && filterApp.userLanguageSelection === filterApp.values[1] || filterApp.userSourceSelection === filterApp.values[3] && filterApp.userLanguageSelection === filterApp.values[3]) {
			console.log(filterApp.values[0] + 'or' + filterApp.values[2] + ' all Source & languages selected');

			$(filterApp.selector[2]).show();

		// checks if Source = all but languages do not = all
		} else if (filterApp.userSourceSelection === filterApp.values[1] && filterApp.userLanguageSelection != filterApp.values[1] || filterApp.userSourceSelection === filterApp.values[3] && filterApp.userLanguageSelection != filterApp.values[3]) {
			console.log(filterApp.values[0] + 'or' + filterApp.values[2] + ' All Source selected But language != All');

			// finds items NOT matching user's selection and hides them
			// selection: Source: all | Language != all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userLanguageSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source: all | Language != all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userLanguageSelection + '"]').addClass(filterApp.transition[1]).show();

		// checks is languages = all, but Source does not equal all
		} else if (filterApp.userSourceSelection != filterApp.values[1] && filterApp.userLanguageSelection === filterApp.values[1] || filterApp.userSourceSelection != filterApp.values[3] && filterApp.userLanguageSelection === filterApp.values[3]) {
			console.log(filterApp.values[0] + 'or' + filterApp.values[2] + ' All languages selected But Source != All'); 

			// finds items NOT matching user's selection and hides them
			// selection: Source = !all | Language = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source = !all | Language = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').addClass(filterApp.transition[1]).show();

		// checks is both Source & language do not equal all
		}  else if (filterApp.userSourceSelection != filterApp.values[1] && filterApp.userLanguageSelection != filterApp.values[1] || filterApp.userSourceSelection != filterApp.values[3] && filterApp.userLanguageSelection != filterApp.values[3]) {
			console.log(filterApp.values[0] + 'or' + filterApp.values[2] + ' Source & video both do not equal all'); 

			// finds items NOT matching user's selection and hides them
			// selection: Source = !all | Language = !all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userLanguageSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source = !all | Language = !all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userLanguageSelection + '"]').addClass(filterApp.transition[1]).show();

		} 

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[1] 

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready