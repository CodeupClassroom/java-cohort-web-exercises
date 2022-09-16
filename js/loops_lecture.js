// console.log("Sanity check!")
//Cautionary note:
//If your browser/computer/tab etc. starts acting funky during this part of the course - you probably have an infinite loop you created accidentally
//cmd+w end tab or cmd+q end application - nuclear option [task manager] activity monitor

//While
//The condition is evaluated FIRST and then runs

//while(condition){ //instructions }

//while(true){ //This is an infinite loop if I cannot change that condition being checked :(
// }

//TRUTHY FALSY still something to remember - try while(0){ //instructions} and see if anything happens. . .

//example 1

// let password = prompt("Welcome to the website - please enter your password");
//
// while(password !== "correctPassword"){
//     alert("Incorrect password! Please try again!")
//
//     password = prompt("Please try to enter your password again")
// }

//example 2
// let notNiceEnough = confirm("Do you think it's true that the weather outside is nice enough to go out in?");
//
// while(!notNiceEnough){
//     alert("I REALLLLLLLY WANNA GO OUTSID THOUGH - are you SURE?")
//     notNiceEnough = confirm("Do you think it's true that the weather outside is nice enough to go out in?");
//
// }

//example 3

// let wearingHat = true;
//
// alert("We are not doing hats today - you need to take it off before you can come in.")
//
// while(wearingHat){
//     wearingHat = confirm("Do you leave your hat on and maintain your authenticity and integrity?!")
// }

// let i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//

//Do - while
//The code will always be executed at least once regardless of the condition being true

//do { //instructions executed at least once before checking to see if we need to do them again } while (conditionToCheck);
// let i = -5;
// let i = 0;
//
// //loop structure 1
// do{
//     console.log("Hello! I'm Do-While. Let's do some stuff as long as 'i' was below zero!")
//     i++
// } while (i < 0);
//
// // i = -5;
//
// //loop structure 2
// while(i < 0){
//     console.log("Hello! I'm while-loop - let's do some stuff while 'i' is less than zero")
//     i++;
// }

// let wantToTalkToSalesperson = false;
//
// do {
//     alert("Welcome to Cavender Toyota - my name is Kenneth Howell, what are you looking for?");
//     wantToTalkToSalesperson = confirm("Did Kenneth charm you over? Do you continue to talk to Kenneth?");
// } while (wantToTalkToSalesperson); //Even though this is "false" - do while will always execute at least once

//For loop - a little different from the two above types of loops..

//for(initializer; condition; incrementation){
// code to execute..
// }

//A while loop would probably be good for something like "Is our user an administrator?" [while(!isAdmin){ //code to verify admin }]

//A for loop would be good for - how many users do I have in total and can I send a alert matching that number of them? How many cards do I have to populate a page and how many times to populate the page with cards?

// for(let i = 0; i > 0; i++){ //initialize i as 0. . while i is less than 10 execute body of code. . after EVERY iteration [run] of the loop, add ONE to i
//     alert("Hey 'i' - what number value is inside of you now? i says: " + i);
//
//
// }

//Maximum occupancy for Chet Ken is 20 customers
//our for loop will help us stay legal with Chet Ken
// for(let numCustomer = 0; numCustomer < 20; numCustomer++){
//     alert ("Customer arrived! Used to be " + (numCustomer) + " were in house before they showed up!");
//
// }

//For with condition as string

// let fullName = "Kenneth";
//
// for(let i = 0; i < fullName.length; i++){
//     console.log("Here's a cool letter from my name " + fullName[i])
// }

//Now with user interaction:

// let userFirstName = prompt("What is your first name, user?")
//
// for(let i = 0; i < userFirstName.length; i++){
//
//     alert("Here's a letter from your name : " + userFirstName[i]);
// }

//Break? Continue? How do I use them in a loop?

//These are keywords - break will be read as "exit the loop and do not do another run of the loop"; continue will be read as "skip THIS run of the loop, and get into the next run"

// for(let i = 0; i < 10; i++){
//     alert("i is currently: " + i);
//
//     if(i === 5){
//         alert("Stopping loop at 5");
//         break;
//     }
// }

// for(let i = 0; i < 10; i++){
//     alert("i is currently: " + i);
//
//     if(i === 5){
//         alert("5 is cool because of Mambo Number 5 - great song, right?");
//         //“hey I want to do this real quick, then continue the loop”
//         continue;
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log("loop has run x times : " + i);
//
//     if(i % 2 === 0){
//         alert("Here's a cool even number: " + i);
//         //“hey I want to do this real quick, then continue the loop”
//         continue;
//
//
//     }
//
//
// }

//Let's pop this in a function to see it work

function countTimes(number){
    for(let i = 0; i < number; i++){

        alert("Counting up to your number of " + number + ". We are currently on number " + i);
    }
}