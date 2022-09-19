// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

//function showMultiplicationTable
//"a number" - one parameter
//console.logs the multiplication table for that number (just multiply by the numbers 1 through 10) [sounds like a FOR LOOP up to desired number]

function showMultiplicationTable(number){

    //First step- can I console.log numbers between 1 - 10? If I can, I can refactor that code to be more complicated ("show multiplication tables")
    //The second step was to add in our parameter and see it coming through live in the .log
    //The final step was to add an area for our math in the .log to evaluate and show the result of that math
    for(let i = 1; i <= 10; i++){

        //Good ol' string concatenation - no problems here, still a perfect way to write things
        // console.log(number + " x " + i + " = " + (number * i));


        //Template literals - string templating, hm. Using 'back ticks' I can start accessing even MORE advanced parts of javascript
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        //https://www.w3schools.com/js/js_string_templates.asp
        console.log(`${number} x ${i} = ${number * i}`);
    }


}




//
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

//for loop - 10 random numbers [(let i = 1; i <= 10; i++)]

// Generate a random number between 0 and 6
// let randomNumber = Math.floor(Math.random() * (200 - 20) ) + 20;

//first step - can I log 10 numbers?
//second step - can I output 10 random numbers?
//third step - can I filter those 10 random numbers if even?
//fourth step - can I filter odd numbers?


// for(let i = 1; i <= 10; i++){
//
//     let randomNumber = Math.floor(Math.random() * (200 - 20) ) + 20;
//
//     if(randomNumber % 2 === 0){
//         console.log("Here's an even number: " + randomNumber);
//     } else {
//         console.log("Here's an odd number: " + randomNumber);
//     }
//
// }

// Create a for loop that uses console.log to create the output shown below.
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//repeat
for(let i = 1; i < 10; i++){

    //With repeat, we're practicing our for loop still - we've also seen method/function chaining here thing.method().method().method()
    console.log(i.toString().repeat(i));

}


//nested loop

for(let i = 1; i < 10; i++){

    let str = "";

    for(let j = 0; j < i; j++){
        str = str + i;

    }

    console.log(str);

}


//
// Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(let i = 100; i > 0; i = i - 5){
    console.log(i);
}
