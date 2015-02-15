$(document).ready(function(){

// Empty object for all code to live on

var filterApp = "";

// ------------------------------------

	// filters type1 content
	filterApp.typeOne = $("a.typeOneFilter").on("click", function(){
		console.log("hi");
		$(".type1").toggleClass("filterableItemHidden");
		$(".type1").toggleClass("filterableItem");
	}); // end click function

	// filters type2 content
	filterApp.typeOne = $("a.typeTwoFilter").on("click", function(){
		console.log("hi");
		$(".type2").toggleClass("filterableItemHidden");
		$(".type2").toggleClass("filterableItem");
	}); // end click function

	// filters type3 content
	filterApp.typeOne = $("a.typeThreeFilter").on("click", function(){
		console.log("hi");
		$(".type3").toggleClass("filterableItemHidden");
		$(".type3").toggleClass("filterableItem");
	}); // end click function

		// filters type4 content
	filterApp.typeOne = $("a.typeFourFilter").on("click", function(){
		console.log("hi");
		$(".type4").toggleClass("filterableItemHidden");
		$(".type4").toggleClass("filterableItem");
	}); // end click function

	// filters type1 content
	filterApp.typeOne = $("a.typeFiveFilter").on("click", function(){
		console.log("hi");
		$(".type5").toggleClass("filterableItemHidden");
		$(".type5").toggleClass("filterableItem");
	}); // end click function
}); // end doc ready