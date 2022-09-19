//Array - a data structure, organized, has a 0 -> wherever we stop adding things in


//JavaScript arrays can contain any combo of primitives or objects into an array - don't have to only have numbers or only strings for example

//Array 'literal' - straight bracket notation []

// [] //empty
//
// [1,2,3,4,5] //all numbers array literal
//
// [true, "Java Cohort", 1230, [1, "2", "three", true]] //Combining all kinds of data - even an ARRAY inside an array

//Power arrives first by combining the above with a variable - now we're slapping a LABEL onto the array

let lunchItems = ["sushi and sashimi", "enchiladas verdes", "chicken tendies", "pho tai"]

//What is the FIRST ELEMENT of my array?
//At the ZERO INDEX we have a STRING LITERAL of "sushi and sashimi"

//In english: "JavaScript, how many items do you have inside an array labeled 'x'?"
//.length

console.log("How many elements [items] are in an array called lunchItems?");
console.log(lunchItems.length);

let citiesInTexas = ["San Antonio", "Austin", "Waco", "Dallas", "Houston", "Ft Worth", "El Paso", "Boca Chica", "Galveston", "Corpus Christi"]


console.log("How many elements [items] are in an array called citiesInTexas?")

console.log(citiesInTexas.length);

//In english: How would I get ONE ELEMENT [item] out of my array?
//For example, last summer for my birthday I went to Galveston - I'd love to pull that one city out. . how would I do that?

//How to access an element: We refer to it by index
console.log("Where did Ken go on vacation?");
console.log(citiesInTexas[8]);

//Do-together: How do I let you know I just want enchiladas verdes for lunch?

console.log("I would like something specific for lunch:");
console.log(lunchItems[1]);

//This all looks pretty cool - but what if I wanted to go through each part [each element] of my array one by one somehow?

//Iterate with my arrays: We see a familiar face [for loops] and we have some NEW OPTIONS *air horn*

for(let i = 0; i < citiesInTexas.length; i++){
    console.log("Here's a cool town in Texas:");
    console.log(citiesInTexas[i]);
}

//When we return from lunch: Some NEW LOOP STRUCTURES

//.forEach - takes in a CALLBACK FUNCTION [function expression or anonymous function in variable] looking for at least what "element" in the internal function we're working with

// someArray.forEach(function(element, index, array) {
//     // ...
// })

citiesInTexas.forEach(

    function(city){ //"element" parameter is needed for sure, we name that parameter appropriately. . so for me, it's a CITY from an ARRAY OF CITIES

        console.log("What is the type of this element " + typeof city);

    }
)

//Do-together: Can you help me write a forEach that would tell me the typeof the elements in 'favoriteNumbers'

let favoriteNumbers = [7, 13, 222]

//Do-together: Can you help me write a forEach that would tell me the typeof the elements in 'favoriteNumbers'

// favoriteNumbers.forEach(function(number){
//     console.log(typeof number);
// })

//It would be easier to see the above if we included the index

favoriteNumbers.forEach(function(number, index){
    console.log("Current index is: " + index + " and the data type was " + typeof number);

})


//forOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//for (let element of array1) {
//   console.log(element);
// }

for (let city of citiesInTexas){
    console.log(`Have you ever been to ${city} before?`);
}

//Broader function idea?

function tellMeAboutCities(array){

    for (let city of array){
        console.log(`Have you ever been to ${city} before?`);
    }
}

let otherCities = ["Milwaukee", "Cape Cod", "San Diego", "Compton", "Charlotte"]