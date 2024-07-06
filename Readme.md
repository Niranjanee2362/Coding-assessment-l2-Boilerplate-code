# Responsive Product Tabs
Here is the deployed version of the project: [Project Link](https://marmeto-task-niranjanee.netlify.app/)
I thank you for providing me with an opportunity to appear for this test and allow me to challenge myself. I thouroughly enjoyes taking up this assessment.

## Features
1. *Responsive Design*: The layout adjusts to different screen sizes using CSS Grid and media queries.
2. *Tabbed Navigation*: Users can switch between different product categories using tabs.
3. *Product Display*: Each product is displayed with an image, title, description, original price, discounted price, and a badge for special offers.

## Usage

1. *Open the HTML file*: Load the HTML file in a web browser.
2. *Navigate through Tabs*: Click on the tabs to switch between different product categories.
3. *View Product Details*: Each tab displays products with details such as image, title, vendor, price, original price, discount percentage, and a badge if applicable.

## Key Functions and Components

1. *DOMContentLoaded Event Listener*: Ensures that the script runs only after the DOM content has fully loaded.
2. *Tab Navigation Functionality*:
    - *Setting Up Event Listeners*: Sets up click event listeners on each tab.
    - *Handling Tab Clicks*: Activates the clicked tab and its corresponding tab panel while deactivating others.
3. *Fetching Product Data from API*:
    - *Fetching Data*: Fetches product data from the given API endpoint.
    - *Handling Responses*: Processes the API response and handles the JSON.
    - *Processing Data*: Passes the fetched data to a function for further processing.
    - *Error Handling*: Logs any errors encountered during the fetch process.
4. *Processing and Displaying Products*:
    - *Iterating Over Categories*: Iterates over the product categories and appends products to the corresponding tab panels.
5. *Creating Product Elements*:
    - *Creating the Product Element*: Creates a product element with the appropriate structure and styles.
    - *Creating the Inner HTML*: Sets up the inner HTML of the product element, including the badge, image, title, vendor, prices, discount, and a button.
6. *Calculating Discount*: Calculates the discount percentage based on the product's price and the original compare-at price.


