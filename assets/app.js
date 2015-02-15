$(document).ready(function(){

// Empty object for all code to live on

var filterApp = "";

// ------------------------------------

	// filters type1 content
	filterApp.typeOne = $("a.typeOneFilter").on("click", function(){
		console.log("hi");
		$(".filterableItem.type1").toggleClass("hiddenByFilter");
	});


}); // end doc ready