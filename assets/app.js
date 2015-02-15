
// Empty object for all code to live on

var filterApp = {};
filterApp.sort = ["type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	/**
	*
	* Hide legend of results on page load
	*
	**/

	$("p.legend").hide();
	// add class of active to all items on page load
	$(".filterable").find("section.filterableItem").addClass("active");
	

	/**
	*
	* Append sort options to selection menu
	*
	**/

	$("#filterOptions").append(
		"<option value='"+ filterApp.sort[0] + "'>" +  filterApp.sort[0] + "</option>" + 
		"<option value='"+ filterApp.sort[1] + "'>" +  filterApp.sort[1] + "</option>" +
		"<option value='"+ filterApp.sort[2] + "'>" +  filterApp.sort[2] + "</option>" +
		"<option value='"+ filterApp.sort[3] + "'>" +  filterApp.sort[3] + "</option>" +
		"<option value='"+ filterApp.sort[4] + "'>" +  filterApp.sort[4] + "</option>"
	);

	/**
	*
	* Controls form from refreshing
	*
	**/

	$("fieldset.filterResults").on("submit",function(event){
		event.preventDefault();	
	});
	

	/**
	*
	* Filters Content
	*
	**/

	$("#filterOptions").on("change", function(){ // runs when dropdown of items changes

		// finds the value of the user's selection (aka the desired type to view)
		filterApp.sortChoice = $(this).find(":selected").val();	

		/**
		*
		* Variable (filterApp.selectedFilter): 
		*
		* 	- stores the selector for items with data-type matching user's selection
		*	- filterApp.sortChoice is connected to the options in the dropdown
		*	- filterapp.sortChoice's potential values match the data-type values
		*
		**/
		
			filterApp.selectedFilter = ".filterable section[data-type='" + filterApp.sortChoice + "']";

		/**
		*
		* Variable (filterApp.selectedFilterData): 
		*
		* 	- stores data-attribute of the option selected by the user
		*
		**/

			filterApp.selectedFilterData = $(filterApp.selectedFilter).attr('data-type');


		console.log("selectedFilter = "+ filterApp.selectedFilter);
		console.log("selectedFilterData = "+ filterApp.selectedFilterData);

		// console.log(filterApp.sort);

	});


}; // end filterApp.init

/* End filterApp.init(); */

/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready