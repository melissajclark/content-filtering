
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
filterApp.transition = ['itemTransition'];

filterApp.values = ['all'];
						
// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

$(filterApp.selector[2]).addClass("animated");

filterApp.totalItems = $(filterApp.selector[2]).length;
console.log('Total # of Items: ' + filterApp.totalItems);


filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
console.log('Visible # of Items: ' + filterApp.visibleItemCount + '. Hidden # of Items: ' + filterApp.hiddenItemCount);		


	// ============ Function that listens on click & evaluates type data

	$(filterApp.selector[4]).on("change",function(event){ 

		event.preventDefault(); // prevents page from refreshing

		// finds the value of the user's selection (aka the desired content to view)
		filterApp.userSourceSelection = $(filterApp.selector[0]).val();
		filterApp.userWorkSelection = $(filterApp.selector[1]).val();
		filterApp.userSubjectSelection = $(filterApp.selector[3]).val();
		console.log('Selection: Format= ' + filterApp.userWorkSelection + '. Source= ' + filterApp.userSourceSelection + '. Subject= ' + filterApp.userSubjectSelection);

		filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
		console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

		filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
		console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		/**
		*
		* If Statement: Evaluates values on submit
		*
		**/
		
		// checks if Source = all and Work = all and Subject = all (default)
		if (filterApp.userSourceSelection === filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('All Source, Work & Subjects selected');

			$(filterApp.selector[2]).show();

			filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
			console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

			filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
			console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Source is selected but Subject & Work === all
		} else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('Source selected But Work & subject === All');

			/**
			*
			*  Filters for selection of DataAttr0 | other parameters are === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]').show();

				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Work Format is selected but Subject & Source === all
		} else if (filterApp.userWorkSelection != filterApp.values[0] && filterApp.userSourceSelection === filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('Work selected But Source & subject === All');

			/**
			*
			*  Filters for selection of DataAttr1 | other parameters are === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').show();

				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Subject is selected but Work & Source === all
		} else if (filterApp.userSubjectSelection != filterApp.values[0] && filterApp.userSourceSelection === filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0]) {
			console.log('Subject selected But Source & Work === All');

			/**
			*
			*  Filters for selection of DataAttr2 | other parameters are === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').show();

				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Source & Work are selected | Subject === all
		} else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userWorkSelection != filterApp.values[0] && filterApp.userSubjectSelection === filterApp.values[0]) {
			console.log('Source & Work selected | Subject === all');

			/**
			*
			*  Filters for selection of DataAttr0 + 1 | 2 parameter  === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]').show();

				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Source & Subject are selected | Work === all
		} else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userSubjectelection != filterApp.values[0] && filterApp.userWorkSelection === filterApp.values[0]) {
			console.log('Source & Subject selected | Work === all');

			/**
			*
			*  Filters for selection of DataAttr0 + 2 | 1 parameter  === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').show();


				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

		// checks if Work & Subject are selected | Source === all
		} else if (filterApp.userSourceSelection === filterApp.values[0] && filterApp.userSubjectelection != filterApp.values[0] && filterApp.userWorkSelection != filterApp.values[0]) {
			console.log('Work & Subject are selected | Source === all');

			/**
			*
			*  Filters for selection of DataAttr1 + 2 | 0 parameter  === 'All'
			*
			**/
			
				// finds items NOT matching user's selection and hides them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').hide();
				
				//finds items matching user's selection and shows them
				$(filterApp.selector[2] + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').show();

				filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
				console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

				filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
				console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);


		// checks if all options are selected (none === all)
		}  else if (filterApp.userSourceSelection != filterApp.values[0] && filterApp.userWorkSelection != filterApp.values[0] && filterApp.userSubjectSelection != filterApp.values[0]) {
			console.log(filterApp.values[0] + ' Source, Work, & Subject do not equal all'); 

			// finds items NOT matching user's selection and hides them
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').hide();
			
			//finds items matching user's selection and shows them
			$(filterApp.selector[2] + '[' + filterApp.dataAttr[0] + ']' + '[' + filterApp.dataAttr[1] + ']' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSourceSelection + '"]' + '[' + filterApp.dataAttr[1] + '="' + filterApp.userWorkSelection + '"]' + '[' + filterApp.dataAttr[2] + '="' + filterApp.userSubjectSelection + '"]').show();

			filterApp.visibleItemCount = $(filterApp.selector[2] + ':visible').length;
			console.log('Visible # of Items: ' + filterApp.visibleItemCount);		

			filterApp.hiddenItemCount = $(filterApp.selector[2] + ':hidden').length;
			console.log('Hidden # of Items: ' + filterApp.hiddenItemCount);

			if (filterApp.hiddenItemCount === filterApp.totalItems) {
				console.log("All items hidden!")
			} else if (filterApp.hiddenItemCount != filterApp.totalItems){
				console.log("only some items hidden!")
			};

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