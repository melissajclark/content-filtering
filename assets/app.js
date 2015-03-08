
// empty object for code to live on
var filterApp = {};

// array to store data-attributes on filterable items
filterApp.dataAttr = ['data-source', 
					'data-details',
					'data-subject'];

// array to store selectors used throughout JS
filterApp.selector  = ['select#sourceChoice', 
						'select#workChoice', 
						'div.filterableItem', 
						'select#subjectChoice',
						'form.filterNav'];

// array to store classes added when hiding / showing items
filterApp.transition = ['hideItemTransition', 
						'showItemTransition'];

filterApp.values = ['all'];
						
// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

$(filterApp.selector[2]).addClass("animated");

	// ============ Function that listens on click & evaluates type data

	$(filterApp.selector[4]).on("submit",function(event){ 

		event.preventDefault(); // prevents page from refreshing

		// finds the value of the user's selection (aka the desired content to view)
		filterApp.userSourceSelection = $(filterApp.selector[0]).val();
		filterApp.userWorkSelection = $(filterApp.selector[1]).val();
		filterApp.userSubjectSelection = $(filterApp.selector[3]).val();
		console.log(filterApp.userWorkSelection + filterApp.userSourceSelection + filterApp.userSubjectSelection);

		/**
		*
		* If Statement: Evaluates English values on submit
		*
		**/
		
		// checks if Source = all and Work = all
		if (filterApp.userSourceSelection === filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('All Source, Work & Subjects selected');

			$(filterApp.selector[2]).show();

		// checks if Source = all but Works & subject do not = all
		} else if (filterApp.userSourceSelection === filterApp.values[0] && filterApp.userWorkSelection != filterApp.values[0] && filterApp.userSubjectSelection != filterApp.values[0]) {
			console.log('All Source selected But Work & subject != All');

			/**
			*
			* Part 1 of Filtering: Show & Hide --> Format of work (data-details)
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				// selection: Source: all | Work != all
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').addClass(filterApp.transition[0]).hide();
				
				//finds items matching user's selection and shows them
				// selection: Source: all | Work != all
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').addClass(filterApp.transition[1]).show();

			/**
			*
			* Part 2 of Filtering: Show & Hide --> Subject of work
			*
			**/

			// finds items NOT matching user's selection and hides them
			// selection: Source: all | Subject != all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source: all | Subject != all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').addClass(filterApp.transition[1]).show();
			

		// checks is Works & Subject = all, but Source does not equal all
		} else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('All Works & Subject selected But Source != All'); 

			/**
			*
			* Parameter Filtering: Show & Hide --> Source of work (data-source)
			*
			**/

			// finds items NOT matching user's selection and hides them
			// selection: Source = !all | Work & Subject = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source = !all | Work & Subject = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').addClass(filterApp.transition[1]).show();


		// checks is Subject & Source = all, but Work does not equal all
		} else if (filterApp.userWorkSelection =! filterApp.values[0] && filterApp.userSourceSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('All Source & Subject selected But Work != All'); 

			/**
			*
			* Parameter Filtering: Show & Hide --> Type of work (data-details)
			*
			**/

			// finds items NOT matching user's selection and hides them
			// selection: Work = !all | Source & Subject = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Work = !all | Source & Subject = all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').addClass(filterApp.transition[1]).show();

		// checks is both Source, Subject & Work do not equal all
		}  else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userWorkSelection != filterApp.values[0]) {
			console.log(filterApp.values[0] + ' Source, Work, & Subject do not equal all'); 

			// finds items NOT matching user's selection and hides them
			// selection: Source = !all | Work = !all | Subject = !all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userSubjectSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userSubjectSelection + '"]').addClass(filterApp.transition[0]).hide();
			
			//finds items matching user's selection and shows them
			// selection: Source = !all | Work = !all | Subject = !all
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userSubjectSelection + '"]').addClass(filterApp.transition[1]).show();

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