# Content-Filtering

**By**: [Melissa Jean Clark](http://melissajclark.ca)  
**When**: February - March 2015

-----

## About Content-Filtering

This project is an exploration of how to filter data using HTML, CSS (SCSS) and JavaScript / jQuery, without using a plugin. The values are stored using data-attributes like this:

    <div class="filterableItem" data-source="Unsplash" data-details="black and white" data-subject="landscape"> 
            <img src="assets/images/BW-bridge.jpg" alt="black and white bridge">
    </div><!-- / .filterableItem -->

### About the Code

The code (see the `app.js` file) makes use of variables and arrays to store essentially all of the values. Filtering content is a common, useful web design pattern. This way, I can easily swap out the selector values stored in the array for a new project. 