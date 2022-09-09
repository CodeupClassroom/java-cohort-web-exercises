"use strict";

//alert - I want to SHOW MY USER INFORMATION. . with a button, but I do not take BACK anything from that interaction

let goodmorningMessage = "Good morning, User - thank you for logging in, and I hope are able to execute some tasks well today.";

// alert("User detected"); //See a window that says this first message
// alert(goodmorningMessage); //See a window with the string inside of this variable
//
// alert(6 * 6);

//confirm - I want to ask my user a TRUE or FALSE question

let hadBreakfast = confirm("Do you have some breakfast today?")

alert("Hey, you told me that it was " + hadBreakfast + " that you had some breakfast.")

//prompt

let whatDidYouHaveForBreakfast = prompt("What did you have to eat for breakfast?");

alert("Nice, I like to eat " + whatDidYouHaveForBreakfast + " too! Sounds delicious :D");