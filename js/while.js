// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let number = 2;
//
// while(number <= 65536){
//     console.log(number);
//     number = number * 2;
//
// }

// An ice cream seller can't go home until she sells all of her cones.
//
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
//
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
//
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;


do {

    console.log("Welcome to Howell's Howlin' Ice Creams and Sundries");

    // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
    let conesSold = Math.floor(Math.random() * 5) + 1;

    console.log(`Excellent you want ${conesSold} - I have ${allCones} here to sell, let me get that order for you`);

    if(conesSold > allCones){ //Make sure I got the cones to sell - if not, CONTINUE to skip the actual "sale" on the line below
        console.log(`Woops - don't have that many, come back tomorrow :D`);
        continue;
    }

    allCones -= conesSold;

    console.log(`Word - sold you ${conesSold}, now I have ${allCones} left to sell!`);


} while (allCones > 0)
