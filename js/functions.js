// (function (){
//     "use strict";

    console.log("FUNCTIONS LECTURE");

// WHAT ARE FUNCTIONS
// -> chunks of code that can be re-used
//

// DEFINING FUNCTIONS & FUNCTIONS SYNTAX
    function nameOfFunction(){
        // code goes here
        console.log('hello from inside of nameOfFunction');
    } // function defined here from the function keyword to the end curly
// bracket

    nameOfFunction(); // calls the function to run the code that's living
// inside of the curly brackets in the function you called (by its name)


// WHAT DOES "RETURN" MEAN

// // write a function that returns my age
// function returnAge(){
//     return 31 // return a value once the function is run
// }
//
// console.log(returnAge())
//
// function addTwoNumbers(){
//     return 7 + 3;
// }
//
// console.log(addTwoNumbers()); // calls the function
// alert(addTwoNumbers());


// write a function that prompts the user for their age and returns the
// users age:

// 1. prompt the user
// 2. save age to a variable
// 3. pass users age into the function
// 4. return users Age
// 5. call the function to run

// let usersAge = prompt("what's your age?");
// console.log(usersAge);
//
// function whatsYourAge(age){
//     return age;
// }
//
// console.log(whatsYourAge(usersAge)); //100

// * come back to this with various users ages


// // write a function that returns the sum of 2 numbers;
//
// // 2 numbers stored in variables
// // 1. defining a function - placeholders for the 2 numbers that the
// // function will need in order to complete its functionality
// // 2. call the function with the 2 numbers - arguments : the ACTUAL
// // values being passed in
//
//
// // placeholders for 2 numbers? up to you!
// function sumTwoNumbers(num1, num2){
//     let sum = num1 + num2;
//     return sum;
//     console.log("inside function after return statement"); // we will
//     // not see this run
// }
//
// // console.log(sumTwoNumbers(18, 22)); //arguments: 18, 22
// // console.log(sumTwoNumbers(25, 13)); //arguments: 18, 22
//
// let firstNumber = parseFloat(prompt("give me digits?"));
// let secondNumber = parseFloat(prompt("more numbers pls"));
//
// // console.log("result of sumTwoNumbers: " + sumTwoNumbers(firstNumber, secondNumber))


// write a function that returns the first and last name of a student

// 1. prompts for first and last name
// 2. store first and last name in variables
// 3. define the function -> parameters? yes
// // first name * lastName
// 4. call the function --> arguments? yes
// // variables

// function addNumbers(num1, num2){
//     return num1 + num2;
// }
//
// function subtractumbers(num1, num2){
//     return num2 - num1;
// }
//
// addNumbers(10,2)
// subtractumbers(20,40)

// PARAMETERS VS ARGUMENTS?
// parameters -> placeholders for values that will be used in a
// function, we reference the placeholders when defining a function

// arguments -> the actual values that get passed in when calling the
// function

// TODO: write a function that prompts the user for their full name and
//  returns their full name. Console log the result of the function

// ANONYMOUS FUNCTIONS

// function favoriteAnimal(){
//     return "frog"
// }
//
// favoriteAnimal();





// // anonymous
// var increment = function(theNumberThatWillGetPassedIn) {
//     return theNumberThatWillGetPassedIn + 1;
// };
//
// console.log("calling the variable that's storing the" +
//     " anonymous fn " + increment(7));
//
// var two = increment(1);


// SCOPE
// declare a global variable
// var globalVar = "Look, I'm Global!";
//
// // define the sayHello function
// function sayHello() {
//     // globalVar is accessible here since the sayHello function scope is a sub-scope of the global scope
//     alert(globalVar);
// }
//
// sayHello();

// // local scope
// let globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var localVar = "Look, I'm Local!"; // declare a local variable
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
// }
//
// console.log("localVar: " + localVar)
// console.log("globalVar: " + globalVar)
//
// // scopeExample(); // 2 alerts: 1 'look i'm local 2 'look i'm global'
// alert(localVar); // localVar is NOT accessible here and this will produce an error


// var city1 = "Berlin";
// let city2 = "NYC";
// let city3 = "Paris";
//
// console.log(city1, city2, city3); //
//
// function cities(a,b,c){
//     var city4 = "San Antonio";
//     var city5 = "Dallas";
//
//     console.log("a: " + a)
//     console.log("b: " + b)
//     console.log("c: " + c)
//
//
//     console.log('city 4: ' + city4);
//     console.log('city 5: ' + city5);
//
// }
//
// cities(city1, city2, city3);
// console.log(city4);


// IIFE

// function addNumbers(a,b){
//     return a+b;
// }
//
// addNumbers(2,4);

// // define a function and immediately invoke (i.e. call) it
// (function () {
//     var iffeVar = "I'm local to the IIFE.";
//     alert(iffeVar);
// })();
//
// // alert(iffeVar); // undefined


    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    // ✅ create a function - sayHello
    // ✅ function takes a parameter - 'name'  --> how does a function take
    // in a parameter
    // ✅ call the function
    // ✅ inside the function -> return "hello " + name passed in?
    // ✅ pass into the function , the name we're ACTUALLY using?

    function sayHello(name){
        return "hello " + name;
    }

    console.log(sayHello("Laura"));
    console.log(sayHello("John"));
    console.log(sayHello("Dustin"));

// })

