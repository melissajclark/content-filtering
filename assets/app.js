$(document).ready(function(){

// Empty object for all code to live on

var filterApp = "";

// ------------------------------------

	// filters type1 content
	filterApp.typeOne = $("a.typeOneFilter").on("click", function(){
		console.log("hi");
		$(".type1").toggleClass("filterableItemHidden");
		// $(".type1").toggleClass("filterableItem");
	}); // end click function


}); // end doc ready