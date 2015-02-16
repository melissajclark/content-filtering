
// Empty object for all code to live on

var filterApp = {};
filterApp.sortTypes = ["All", "type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering
filterApp.sortShapes = ["All", "circle", "hexagon", "square"]; // object to hold options for filtering
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
	* Append sort options to selection menu: types
	*
	**/

	$("#filterOptionsTypes").append(
		"<option value='"+ filterApp.sortTypes[0] + "'>" +  filterApp.sortTypes[0] + "</option>" + 
		"<option value='"+ filterApp.sortTypes[1] + "'>" +  filterApp.sortTypes[1] + "</option>" +
		"<option value='"+ filterApp.sortTypes[2] + "'>" +  filterApp.sortTypes[2] + "</option>" +
		"<option value='"+ filterApp.sortTypes[3] + "'>" +  filterApp.sortTypes[3] + "</option>" +
		"<option value='"+ filterApp.sortTypes[4] + "'>" +  filterApp.sortTypes[4] + "</option>" +
		"<option value='"+ filterApp.sortTypes[5] + "'>" +  filterApp.sortTypes[5] + "</option>"
	);

	/**
	*
	* Append sort options to selection menu: shapes
	*
	**/

	$("#filterOptionsShapes").append(
		"<option value='"+ filterApp.sortShapes[0] + "'>" +  filterApp.sortShapes[0] + "</option>" + 
		"<option value='"+ filterApp.sortShapes[1] + "'>" +  filterApp.sortShapes[1] + "</option>" +
		"<option value='"+ filterApp.sortShapes[2] + "'>" +  filterApp.sortShapes[2] + "</option>" +
		"<option value='"+ filterApp.sortShapes[3] + "'>" +  filterApp.sortShapes[3] + "</option>"
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
	* Filters Content: Types
	*
	**/

	$("#filterOptionsTypes").on("change", function(){ // runs when dropdown of items changes

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
			$(".filterable section.filterableItem[data-type='type1']").show(); // active item
			$(".filterable section.filterableItem[data-type='type2']").hide(); 
			$(".filterable section.filterableItem[data-type='type3']").hide(); 
			$(".filterable section.filterableItem[data-type='type4']").hide(); 
			$(".filterable section.filterableItem[data-type='type5']").hide(); 
			console.log(filterApp.selectedFilterData);
		 } else if (filterApp.selectedFilterData === "type2" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type2 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type2']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide(); 
		 	console.log(filterApp.selectedFilterData);
		 } else if (filterApp.selectedFilterData === "type3" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type3']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide(); 
		 	console.log(filterApp.selectedFilterData);
		} else if (filterApp.selectedFilterData === "type4" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type4']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide(); 
		 	console.log(filterApp.selectedFilterData);
		 } else if (filterApp.selectedFilterData === "type5" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type5']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide(); 
		 	console.log(filterApp.selectedFilterData);}
		 else {
 		 	// hides item without the type3 data-type attribute
 		 	$(".filterable section.filterableItem[data-type='type5']").show(); // active item
 		 	$(".filterable section.filterableItem[data-type='type1']").show(); 
 		 	$(".filterable section.filterableItem[data-type='type2']").show(); 
 		 	$(".filterable section.filterableItem[data-type='type3']").show(); 
 		 	$(".filterable section.filterableItem[data-type='type4']").show(); 
 		 	console.log(filterApp.selectedFilterData);}

	 }); // end on click function: types

	

	$("#filterOptionsShapes").on("change",function(){ 

		/**
		*
		* Get Value of user's selection
		*
		**/
		
			filterApp.sortChoiceShape = $(this).find(":selected").val();

		/**
		*
		* Uses user's selection within variable to store choice
		*
		**/
		
			filterApp.selectedShape = ".filterable section[data-shape='" + filterApp.sortChoiceShape + "']";

		/**
		*
		* Gets the data-shape's value from user's selection
		*
		**/

			filterApp.selectedShapeData = $(filterApp.selectedFilterShape).attr('data-shape');





	}); // end function on shapes select

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready