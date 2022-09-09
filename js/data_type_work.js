//To store my work on an exercise

let sample = "Hello Codeup";

sample.length;

sample.toLowerCase();

sample.toUpperCase();

sample = sample + " Students";

sample = sample.replace("Students", "Class");

sample.indexOf("c");
//Get back a -1 - in my mind, that means "not found"

sample.indexOf("C");
//Case sensitive too - now it finds the first "C" running left to right


sample.lastIndexOf("C");
//Bonus example: lastIndexOf performs a similar operation, but runs back to front!

sample.substring(sample.indexOf("C"), sample.indexOf("p")+1 );

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

//BB 5 days

let brotherBear = 5;

//LM 3 days

let littleMermaid = 3;

//Hercules 1 day

let herculesMovie = 1;

//Price per day = 3

let rentalPrice = 3;

// Total price?

// let totalPrice = (brotherBear * rentalPrice) + (littleMermaid * rentalPrice) + (herculesMovie * rentalPrice);

let totalPrice = (brotherBear + littleMermaid + herculesMovie) * rentalPrice;

totalPrice;


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

//Google
let googlePay = 400;

//Amazon
let amazonPay = 380;

//Facebook
let facebookPay = 350;

//total pays per company!
let googleTotal = googlePay * 6;

let amazonTotal = amazonPay * 4;

let facebookTotal = facebookPay * 10;

//summary of weekly pay
let weeklyPay = googleTotal + amazonTotal + facebookTotal;

console.log(weeklyPay);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

//canBeEnrolled = IF NOT FULL and SCHEDULE DOES NOT CONFLICT


let spaceInClass = true;

let spaceInSchedule = false;

let canBeEnrolled = spaceInClass && spaceInSchedule;

console.log("Can I be enrolled?: " + canBeEnrolled);


//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//offerCanBeApplied = IF MORE THAN 2 ITEMS and OFFER NOT EXPIRED or IS PREMIUM MEMBER

let offerNotExpired = true;

let moreThan2 = false;

let isPremiumMember = true;

let offerCanBeApplied = offerNotExpired && (moreThan2 || isPremiumMember);


console.log("Hey welcome to Howell's Howlin' Haberdashery - we got hats! It is  " + offerCanBeApplied + " that our offer is in effect today. I see that it is also " + moreThan2 + " that you purchased more than one item. Additionally, you let me know it was " + isPremiumMember + " that you are a premium member. Therefore, it is " + offerCanBeApplied + " that we can offer you a discount today.");


//     Use the following code to follow the instructions below:
//

let username = 'codeup';
let password = 'notastrongpassword';

//
// Create a variable that holds a boolean value for each of the following conditions:

//     the password must be at least 5 characters

let passwordOverFive = password.length >= 5;

// the password must not include the username
let noUsernameInPassword = (password === password.replace(username, ""));

// the username must be no more than 20 characters

let usernameLengthOkay = username.length < 20;

// neither the username or password can start or end with whitespace

let noWhiteSpace = (password.length === password.trim().length) && (username.length === username.trim().length);



