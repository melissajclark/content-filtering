
// Empty object for all code to live on

var filterApp = {};
filterApp.sort = ["type1", "type2", "type3", "type4", "type5"]; // object to hold options for filtering

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

	$("#filterOptions").on("change", function(){
		filterApp.sortChoice = $(this).find(":selected").val();
		filterApp.sort = filterApp.sortChoice;
		
		// add legend of what is on view:
		$("fieldset.filterResults").after("<p>Currently viewing: " + "<span class='currentContent'></span>");
		console.log(filterApp.sortChoice);

		if (filterApp.sortChoice === "type1") {
			// hides all other types
			$(".type2, .type4, .type5, .type3").toggleClass("filterableItemHidden");
			$(".type2, .type4, .type5, .type3").toggleClass("filterableItem");
			$("span.currentContent").append("Type1");

		} else if (filterApp.sortChoice === "type2") {
			$(".type2").toggleClass("filterableItemHidden");
			$(".type2").toggleClass("filterableItem");
			console.log("type2 selected");
		}; 

	});

	
	
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