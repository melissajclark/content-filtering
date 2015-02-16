
// Empty object for all code to live on

var filterApp = {};
filterApp.sortTypes = ["all", "type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering
filterApp.sortShapes = ["all", "circle", "hexagon", "square"]; // object to hold options for filtering
filterApp.eachItem = "";

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	/**
	*
	* Hide legend of results on page load
	*
	**/

	$("section.filterResultsCurrent").hide();
	
	/**
	*
	* Append sort options to selection menu: types
	*
	**/

	$("#filterOptionsTypes").append(
		"<li value='"+ filterApp.sortTypes[0] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[0] + "</a></li>" + 
		"<li value='"+ filterApp.sortTypes[1] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[1] + "</a></li>" +
		"<li value='"+ filterApp.sortTypes[2] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[2] + "</a></li>" +
		"<li value='"+ filterApp.sortTypes[3] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[3] + "</a></li>" +
		"<li value='"+ filterApp.sortTypes[4] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[4] + "</a></li>" +
		"<li value='"+ filterApp.sortTypes[5] + "'><a class='filterControl' href='#'>" +  filterApp.sortTypes[5] + "</a></li>"
	);

	/**
	*
	* Append sort options to selection menu: shapes
	*
	**/

	$("#filterOptionsShapes").append(
		"<li value='"+ filterApp.sortShapes[0] + "'><a class='filterControl' href='#'>" +  filterApp.sortShapes[0] + "</a></li>" + 
		"<li value='"+ filterApp.sortShapes[1] + "'><a class='filterControl' href='#'>" +  filterApp.sortShapes[1] + "</a></li>" +
		"<li value='"+ filterApp.sortShapes[2] + "'><a class='filterControl' href='#'>" +  filterApp.sortShapes[2] + "</a></li>" +
		"<li value='"+ filterApp.sortShapes[3] + "'><a class='filterControl' href='#'>" +  filterApp.sortShapes[3] + "</a></li>"
	);	

	/**
	*
	* Filters Content: Types
	*
	**/


	$("#filterOptionsTypes a.filterControl").on("click", function(){ // runs when dropdown of items changes

		// finds the value of the user's selection (aka the desired type to view)
		filterApp.sortChoice = $(this).text();
		console.log(filterApp.sortChoice);


		$("section.filterResultsCurrent").show();

	
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

		/**
		*
		* Updates span with current filter choice
		*
		**/
		
		$("#filterOptionsCurrent.filterNav li span.currentChoice").html(filterApp.selectedFilterData);


		filterApp.itemData = $(".filterable section.filterableItem").attr('data-type');

		if (filterApp.sortChoice === "all") {
			// Important: above uses different variable than rest of if statement
			// this is because "all" is not a data-attribute, but simply an item in the list of options (text)
			$(".filterable section.filterableItem[data-type='type1']").show(); // active item
			$(".filterable section.filterableItem[data-type='type2']").show(); 
			$(".filterable section.filterableItem[data-type='type3']").show(); 
			$(".filterable section.filterableItem[data-type='type4']").show(); 
			$(".filterable section.filterableItem[data-type='type5']").show();
			console.log("all selected"); 

		} else if (filterApp.selectedFilterData === "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5") {
			// hides items without the type1 data-type attribute
			$(".filterable section.filterableItem[data-type='type1']").show(); // active item
			$(".filterable section.filterableItem[data-type='type2']").hide(); 
			$(".filterable section.filterableItem[data-type='type3']").hide(); 
			$(".filterable section.filterableItem[data-type='type4']").hide(); 
			$(".filterable section.filterableItem[data-type='type5']").hide(); 
			
		 } else if (filterApp.selectedFilterData === "type2" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type2 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type2']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide();	  
		 	
		 } else if (filterApp.selectedFilterData === "type3" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type4" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type3']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide();

		 	
		} else if (filterApp.selectedFilterData === "type4" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type5"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type4']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type5']").hide();

		 	
		 } else if (filterApp.selectedFilterData === "type5" && filterApp.selectedFilterData != "type1" && filterApp.selectedFilterData != "type2" && filterApp.selectedFilterData != "type3" && filterApp.selectedFilterData != "type4"){
		 	// hides item without the type3 data-type attribute
		 	$(".filterable section.filterableItem[data-type='type5']").show(); // active item
		 	$(".filterable section.filterableItem[data-type='type1']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type2']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type3']").hide(); 
		 	$(".filterable section.filterableItem[data-type='type4']").hide();

		 	}

	 }); // end on click function: types

	

	$("#filterOptionsShapes a.filterControl").on("click",function(){ 

		$("section.filterResultsCurrent").show();


		/**
		*
		* Get Value of user's selection
		*
		**/
		
			filterApp.sortChoiceShape = $(this).text();

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

			filterApp.selectedShapeData = $(filterApp.selectedShape).attr('data-shape');

		/**
		*
		* If statement to evaluate data & compare
		*
		**/

		if (filterApp.selectedShapeData === "circle" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "hexagon") {
			$(".filterable section.filterableItem[data-shape='circle']").show(); // active item
			$(".filterable section.filterableItem[data-shape='square']").hide(); 
			$(".filterable section.filterableItem[data-shape='hexagon']").hide(); 
		} else if (filterApp.selectedShapeData === "square" && filterApp.selectedShapeData != "circle" && filterApp.selectedShapeData != "hexagon") {
			$(".filterable section.filterableItem[data-shape='square']").show(); // active item
			$(".filterable section.filterableItem[data-shape='circle']").hide(); 
			$(".filterable section.filterableItem[data-shape='hexagon']").hide(); 
		} else if (filterApp.selectedShapeData === "hexagon" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "circle") {
			$(".filterable section.filterableItem[data-shape='hexagon']").show(); // active item
			$(".filterable section.filterableItem[data-shape='square']").hide(); 
			$(".filterable section.filterableItem[data-shape='circle']").hide(); 
		} else if (filterApp.sortChoiceShape === "all" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "circle" && filterApp.selectedShapeData != "hexagon"){
			$(".filterable section.filterableItem[data-shape='hexagon']").show();
			$(".filterable section.filterableItem[data-shape='square']").show(); 
			$(".filterable section.filterableItem[data-shape='circle']").show();
			console.log("all selected"); 
		}

		$("#filterOptionsCurrent.filterNav li span.currentChoice").html(filterApp.selectedShapeData);
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