
// empty object for code to live on
var filterApp = {};
filterApp.dataAttr = ['[data-type="', '[data-shape="', '[data-color="'];

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// ======== functions that need to occur on page load ============

	/**
	*
	* Hide legend of results on page load
	*
	**/

	$("section.filterResultsCurrent").hide();

	$("section.filterableItem").addClass("animated");

	// ============ Function that listens on click & evaluates type data

	$("a.filterControl").on("click",function(){ 

		// finds the value of the user's selection (aka the desired shape to view)
		filterApp.userSelection = $(this).text();

		// displays legend after user clicks on a filter link
		$("section.filterResultsCurrent").show(); 

		// finds items NOT matching user's selection and hides them
		filterApp.hidingItems = $(".filterableItem").not(filterApp.dataAttr[0] + filterApp.userSelection + '"]').toggleClass("fadeInRight").hide();
		console.log("hiding!");

		//finds items matching user's selection and shows them
		$("section.filterableItem").filter(filterApp.dataAttr[0] + filterApp.userSelection + '"]').toggleClass("fadeInLeft").show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === "all") {
			$("section.filterResultsCurrent").hide();
			$("section.filterableItem").show();
		} else {
			$("section.filterResultsCurrent").show();
			$("li span.currentChoice").html("Type: " + filterApp.userSelection);
		}

	}); // end function on shapes select
	
	// ============ End function that listens on click & evaluates type data
	
	// // ============ Function that listens on click & evaluates shape data

	// $("a.filterControl").on("click",function(){ 

	// 	// finds the value of the user's selection (aka the desired shape to view)
	// 	filterApp.userSelection = $(this).text();

	// 	$("section.filterResultsCurrent").show(); // displays legend after user clicks on a filter link

	// 	// finds items NOT matching user's selection and hides them
	// 	filterApp.hidingItems = $("section.filterableItem").not('[data-shape="' + filterApp.userSelection + '"]').toggleClass("fadeInRight").hide();
	// 	console.log("hiding!");

	// 	//finds items matching user's selection and shows them
	// 	$("section.filterableItem").filter('[data-shape="' + filterApp.userSelection + '"]').toggleClass("fadeInLeft").show();

	// 	// hides legend if "all" is selected + shows all items when all is selected
	// 	if (filterApp.userSelection === "all") {
	// 		$("section.filterResultsCurrent").hide();
	// 		$("section.filterableItem").show();
	// 	} else {
	// 		$("section.filterResultsCurrent").show();
	// 		$("li span.currentChoice").html("Shape: " + filterApp.userSelection);
	// 	}

	// }); // end function on shapes select
	
	// // ============ End function that listens on click & evaluates shape data

	// // ============ Function that listens on click & evaluates Colour data

	// $("a.filterControl").on("click",function(){ 

	// 	// finds the value of the user's selection (aka the desired Color to view)
	// 	filterApp.userSelection = $(this).text();

	// 	$("section.filterResultsCurrent").show(); // displays legend after user clicks on a filter link

	// 	// finds items NOT matching user's selection and hides them
	// 	filterApp.hidingItems = $("section.filterableItem").not('[data-color="' + filterApp.userSelection + '"]').toggleClass("fadeInRight").hide();
	// 	console.log("hiding!");

	// 	//finds items matching user's selection and shows them
	// 	$("section.filterableItem").filter('[data-color="' + filterApp.userSelection + '"]').toggleClass("fadeInLeft").show();

	// 	// hides legend if "all" is selected + shows all items when all is selected
	// 	if (filterApp.userSelection === "all") {
	// 		$("section.filterResultsCurrent").hide();
	// 		$("section.filterableItem").show();
	// 	} else {
	// 		$("section.filterResultsCurrent").show();
	// 		$("li span.currentChoice").html("Color: " + filterApp.userSelection);
	// 	}

	// }); // end function on shapes select
	
	// // ============ End function that listens on click & evaluates color data

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

$(document).ready(function(){
	filterApp.init();
}); // end doc ready