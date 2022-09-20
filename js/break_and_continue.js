// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//while or a do-while loop - force it to "loop" with a true boolean
//prompt() - ask for an odd number between 1 - 50
//remember how to check for odd / even numbers in JS - [ number % 2 === 0 ]

let userNumber = Number(prompt("Hey user! Can you give me an odd number between 1 - 50?"));

//Use "break" to force user into giving the right number if they didn't

while(true){

    if(userNumber % 2 !== 0 && userNumber < 50 && userNumber > 1){ //If the user gives me an odd number AND it is below 50 AND it is above 1 . . let them out of the loop
        break;
    }

    userNumber = prompt("Can you give me an odd number between 1 - 50?")

}

//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

//for loop - good for X number of times running loop [for example, we want it to run up to the number 50 here]
//Can I log all numbs 1 - 50?

console.log(typeof userNumber);

console.log(`Number to skip is ${userNumber}`);

for(let i = 1; i <= 50; i++){

    if(userNumber === i){

        console.log(`Yikes! Skipping number ${userNumber}`);
        continue;
    }

//Hey bud, we just want to see odd numbers >:(
    if(i % 2 !== 0){
        console.log("I love this odd number: "+ i);
    }





}