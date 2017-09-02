# React Js and Google Places Api case study

You are going to build a React JS application wizard which consumes an API service. The application should guide a user through a three step application process with the following constraints:

1. User should choose an option which comes from the first API integration
2. User should provide custom data which needs to be validated accordingly
3. User can move forward and backward in the three steps but can only finish when all required data is entered

## Step 1
Ask for the city in which the user lives. It should be an autocomplete/typeahead field using the Google Places API for city around the world.

## Step 2
Ask for contact information, email and mobile phone number. 

## Step 3.
Review information entered, and place a Confirm button. Clicking the Confirm button the system should prepare a JSON object with all the info gathered, and send it to a fictional URL as a post query.
It would probably be best to focus on the basic requirements first but if you feel like you have time, feel free to do any nice "extras" you want. For instance, if you've worked with react before, maybe you have a favorite framework/library to handle data-flow. If you've worked with design/ux/styling and have time, maybe you can even make the application look and feel nice when using it :)