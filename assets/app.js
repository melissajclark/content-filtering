
// Empty object for all code to live on

var filterApp = {};
filterApp.sort = ["Type One", "Type Two", "Type Three", "Type Four", "Type Five"]; // object to hold options for filtering

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

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
	* Filters Content
	*
	**/
	
	// filters type1 content
	filterApp.typeOne = $("a.typeOneFilter").on("click", function(){
		$(".type1").toggleClass("filterableItemHidden");
		$(".type1").toggleClass("filterableItem");
	}); // end click function

	// filters type2 content
	filterApp.typeTwo = $("a.typeTwoFilter").on("click", function(){
		$(".type2").toggleClass("filterableItemHidden");
		$(".type2").toggleClass("filterableItem");
	}); // end click function

	// filters type3 content
	filterApp.typeThree = $("a.typeThreeFilter").on("click", function(){
		$(".type3").toggleClass("filterableItemHidden");
		$(".type3").toggleClass("filterableItem");
	}); // end click function

		// filters type4 content
	filterApp.typeFour = $("a.typeFourFilter").on("click", function(){
		$(".type4").toggleClass("filterableItemHidden");
		$(".type4").toggleClass("filterableItem");
	}); // end click function

	// filters type1 content
	filterApp.typeFive = $("a.typeFiveFilter").on("click", function(){
		$(".type5").toggleClass("filterableItemHidden");
		$(".type5").toggleClass("filterableItem");
	}); // end click function

	filterApp.typeAll = $("a.typeAll").on("click", function(){
		$(".filterable").find(".filterableItemHidden").removeClass("filterableItemHidden");
		$(".type1, .type2, .type3, .type4, .type5").addClass("filterableItem");
	}); // end view all click function

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