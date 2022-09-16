// CONDITIONALS

// operators review:

//**
// 5 >= -5 --> true
// true || "42"  --> true
// 'false' == false --> false
// 5 > 4 && 1 === 1 --> true
// 6 % 3 === 0 --> true
// **//

// if statements

// if(conditional){
//     // run this code if conditional is true
// }

// let x = 3;
//
// if (x > 5){
//     console.log("hey x IS greater tha 5, so hello form inside the if" +
//         " statement")
// }
//
// console.log("outside of the if statement")

// if(true){
//     run this code
// }

// let userName = prompt("hey what's your username");
//
// if(userName.toLowerCase() == "laura"){
//     alert("welcome to the website of Lauras");
// } else {
//     alert("welcome everyone else");
// }

// ✅if the temperature is greater than 75 -> bring sunglasses

// if the temperature is between 55-74 -> bring a sweater
// if the temp is below 54 -> stay inside

// let temperature = 45;
//
// if(temperature >= 75){
//     console.log("bring sunglasses 😎😎😎😎")
// } else if (temperature > 55 && temperature < 75){
//     alert("bring a sweater 👕👕👕")
// } else if (temperature > 30 && temperature <= 55) {
//     alert("bring gloves 🧤🧤🧤🧤")
// } else {
//     alert("stay inside 🏠🏠🏠🏠")
// }

// function addTwoIfDivisible(num){
//     if(num % 2 === 0 ){
//         console.log("this number is even");
//     } else {
//         console.log("this number is odd");
//     }
// }
//
// addTwoIfDivisible(17)


// ternary
// num > 10 // num greater than 10  // conditional
// console.log("num is greater than 10")// print " greater than 10"
// console.log("num is less than 10")// if num < 10 print num is less than 10

// let num = 18
//
// // let condition = num > 10 ? console.log("greater than 10") : console.log("less than 10")
// // console.log(condition)
//
// var message = (true) ? "Operation was successful." : "Oops, something" +
//     " went wrong.";
// console.log(message)


// let ifStatement = if(num > 10){
//     console.log("greater than 10")
// } else {
//     console.log("less than 10")
// }



// switch


var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        let color = "pink"
        console.log(pizzaPreference)
        alert("What a coincidence, that's my favorite!");
        console.log(color)

    case "cheese":
        console.log(color)
        console.log(pizzaPreference)
        alert("Just plain cheese? Okay...");
        break;
    default:
        console.log(pizzaPreference)
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

console.log("outside of switch statement")