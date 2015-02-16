
// Empty object for all code to live on

var filterApp = {};
filterApp.sortTypes = ["all", "type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering
filterApp.sortShapes = ["all", "circle", "hexagon", "square"]; // object to hold options for filtering
filterApp.eachItem = "";

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// ======== functions that need to occur on page load ============

	/**
	*
	* Hide legend of results on page load + add active class to all items
	*
	**/

	$("section.filterResultsCurrent").hide();

	// $("section.filterableItem").addClass("active");
	
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


	// ======== End functions that need to occur on page load ===========

		/**
		*
		* Variable (filterApp.alDataTypes): 
		*
		* 	- finds all items in the DOM with the attribute of 'data-type'
		*	- returns HTML of all items
		*
		**/

			filterApp.allDataTypes = $(".filterable").find(".filterableItem[data-type]");

			// console.log(filterApp.allDataTypes);

	// ======== Function that listens on click & type data ==============

	/**
	*
	* Filters Content: Types
	*
	**/

	$("#filterOptionsTypes a.filterControl").on("click", function(){ // runs when dropdown of items changes

		// finds the value of the user's selection (aka the desired type to view)
		filterApp.sortChoice = $(this).text();
		console.log(filterApp.sortChoice);


		/**
		*
		* Variable (filterApp.selectedFilter): 
		*
		*	- searches the div with a class of "filterable"
		*	- locates any elements with the data-attribute "data-type"
		*	- checks the data-type attributes for the value matching the user's selection
		*	- when console logged it returns HTML from the DOM for each item 
		*
		**/

			filterApp.selectedFilter = $(".filterable").find("[data-type='" + filterApp.sortChoice + "']");
			// console.log(filterApp.selectedFilter);

		/**
		*
		* Variable (filterApp.selectedFilterData): 
		*
		* 	- grabs the data-attribute value from any items in the DOM that match the user's selection 
		*
		**/

			filterApp.selectedFilterData = $(filterApp.selectedFilter).attr('data-type');
			console.log("filterApp.selectedFilterData = " + filterApp.selectedFilterData);

		/**
		*
		* If Statement to evaluate results
		*
		**/

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

		if (filterApp.sortChoice === "all") {
			$("section.filterResultsCurrent").hide();
		} else {
			$("section.filterResultsCurrent").show();
			$("li span.currentChoice").html("Type: " + filterApp.selectedFilterData);
		}

	 }); // end on click function: types

	// ======== End function that listens on click & type data ==============

	
		/**
		*
		* Variable (filterApp.allShapes): 
		*
		* 	- finds all items in the DOM with the attribute of 'data-type'
		*	- returns HTML of all items
		*
		**/

			filterApp.allShapes = $(".filterable").find(".filterableItem[data-shape]");

			// console.log(filterApp.allShapes);
	
	// ============ Function that listens on click & evaluates shape data

	$("#filterOptionsShapes a.filterControl").on("click",function(){ 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.sortChoiceShape = $(this).text();

		$("section.filterResultsCurrent").show(); // displays legend after user clicks on a filter link

		
		filterApp.filteredItems = $( "section.filterableItem" ).filter( $('[data-shape="' + filterApp.sortChoiceShape + '"]' ).toggleClass("active") );

		filterApp.filterActiveItem = $("section.filterableItem").hasClass("active");

		console.log(filterApp.filterActiveItem);

		// if ( $("section.filterableItem").hasClass("active") ) != true) {
		// 	$("section.filterableItem").addClass("inactive");
		// 	console.log("if statement");
		// }; 

		console.log(filterApp.filteredItems);

		/**
		*
		* Variable (filterApp.selectedShape): 
		*
		*	- searches the div with a class of "filterable"
		*	- locates any elements with the data-attribute "data-shape"
		*	- checks the data-shape attributes for the value matching the user's selection
		*	- when console logged it returns HTML from the DOM for each item 
		*
		**/

			filterApp.selectedShape = $(".filterable").find("[data-shape='" + filterApp.sortChoiceShape + "']");
			// console.log(filterApp.selectedShape);

		/**
		*
		* Variable (filterApp.selectedShapeData): 
		*
		* 	- grabs the data-attribute value from any items in the DOM that match the user's selection 
		*
		**/

			filterApp.selectedShapeData = $(filterApp.selectedShape).attr('data-shape');
			console.log("filterApp.selectedShapeData = " + filterApp.selectedShapeData);
		/**
		*
		* If Statement to evaluate results
		*
		**/

		// if (filterApp.selectedShapeData === "circle" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "hexagon") {
		// 	$(".filterable section.filterableItem[data-shape='circle']").show(); // active item
		// 	$(".filterable section.filterableItem[data-shape='square']").hide(); 
		// 	$(".filterable section.filterableItem[data-shape='hexagon']").hide();
		// } else if (filterApp.selectedShapeData === "square" && filterApp.selectedShapeData != "circle" && filterApp.selectedShapeData != "hexagon") {
		// 	$(".filterable section.filterableItem[data-shape='square']").show(); // active item
		// 	$(".filterable section.filterableItem[data-shape='circle']").hide(); 
		// 	$(".filterable section.filterableItem[data-shape='hexagon']").hide(); 
		// } else if (filterApp.selectedShapeData === "hexagon" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "circle") {
		// 	$(".filterable section.filterableItem[data-shape='hexagon']").show(); // active item
		// 	$(".filterable section.filterableItem[data-shape='square']").hide(); 
		// 	$(".filterable section.filterableItem[data-shape='circle']").hide(); 
		// } else if (filterApp.sortChoiceShape === "all" && filterApp.selectedShapeData != "square" && filterApp.selectedShapeData != "circle" && filterApp.selectedShapeData != "hexagon"){
		// 	$(".filterable section.filterableItem[data-shape='hexagon']").show();
		// 	$(".filterable section.filterableItem[data-shape='square']").show(); 
		// 	$(".filterable section.filterableItem[data-shape='circle']").show();
		// }


		if (filterApp.sortChoiceShape === "all") {
			$("section.filterResultsCurrent").hide();
		} else {
			$("section.filterResultsCurrent").show();
			$("li span.currentChoice").html("Shape: " + filterApp.sortChoiceShape);
		}

	}); // end function on shapes select
	
	// ============ End function that listens on click & evaluates shape data

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready