
// Empty object for all code to live on

var filterApp = {};
filterApp.sort = ["type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering
filterApp.eachItem = "";

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	/**
	*
	* Hide legend of results on page load
	*
	**/

	$("p.legend").hide();
	// add class of active to all items on page load
	
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

		/**
		*
		* If Statement to evaluate results
		*
		**/ 

		// I want to
		// - check what values are present
		// - compare the present values to the user's selection
		// - hide items that do not match the user's selection

		// filterApp.eachItem = $("").attr('data-type');

		// $(".filterable section.filterableItem[data-type='type1']");
		filterApp.itemData = $(".filterable section.filterableItem").attr('data-type');

		if (filterApp.selectedFilterData === "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5") {
			// hides items without the type1 data-type attribute
			$(".filterable section.filterableItem[data-type='type2']").removeClass("activeItem").addClass("hiddenItem"); 
			$(".filterable section.filterableItem[data-type='type3']").toggleClass("activeItem hiddenItem"); 
			$(".filterable section.filterableItem[data-type='type4']").toggleClass("activeItem hiddenItem"); 
			$(".filterable section.filterableItem[data-type='type5']").toggleClass("activeItem hiddenItem"); 
		 } else if (filterApp.selectedFilterData === "type2" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type2 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type1']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type3']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type4']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type5']").toggleClass("activeItem hiddenItem"); 
		 } else if (filterApp.selectedFilterData === "type3" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type1']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type2']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type4']").toggleClass("activeItem hiddenItem"); 
		 	$(".filterable section.filterableItem[data-type='type5']").toggleClass("activeItem hiddenItem"); 
		}


	 }); // end on click function

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready