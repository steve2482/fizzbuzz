$(document).ready(function() {
'use strict';
// User Prompt-------------------------------------------------------
var userInput = parseInt(prompt("Please enter a number.", "82"));
  while ( isNaN(userInput) ) {
    alert("Please enter a numerical value!");
    userInput = parseInt(prompt("Please enter a number."));
  }
 // FizzBuzz counter-------------------------------------------------
for ( var counter = 1; counter <= userInput; counter++) {
  var value = counter
  if (value % 15 === 0) {
  	value = "fizzbuzz";
  }
  if (value % 3 === 0) {
  	value = "fizz";
  }
  if (value % 5 === 0) {
  	value = "buzz";
  }
  $(".values").append(
  	'<li class="val_list">' + 
  	value + 
  	'</li>'
  	);
  }
});