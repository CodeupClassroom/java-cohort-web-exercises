"use strict";

console.log("Hello from external JavaScript - glad to be here as well :)");

alert("Welcome to my website!");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
//     For example, if the user enters "blue", your code should alert a message that says:
//
//     "Great, blue is my favorite color too!"

//prompt - ask favorite color from user
//Grab the user's response - for an alert

let userInput = prompt("What is your favorite color, USER");

//alert - looks like I need to use what the user typed in INSIDE of my alert message back OUT to the user [verde] "hey love [verde] too"; [blue] "hey love [blue] too"

alert("Hey " + userInput.trim() + ", I like that color too!")

