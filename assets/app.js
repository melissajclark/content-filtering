$(document).ready(function(){

// Empty object for all code to live on

var filterApp = "";

// ------------------------------------

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

	fi
}); // end doc ready