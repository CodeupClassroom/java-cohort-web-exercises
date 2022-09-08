// alert("Sanity check!");

//We want to learn tools and methods to manipulate and work with strings :)

//.length = how long was the string?

let myString = "A man, a plan, a canal - Panama!";

console.log("The length of my string is: " + myString.length);

// .indexOf(char): returns the index of the specified character in the string.

let texasString = "Texas";

console.log("Where is the letter 'x'? Can you tell me the INDEX OF that character?: " + texasString.indexOf('x'));

texasString = "Texas is full of my exes";

console.log(texasString.indexOf("x") + " - was it two again?");

console.log(texasString.lastIndexOf("x") + " is where the last letter 'x' is");

//What is there's an x in the middle of the action? :(

texasString = "Texas is full of my exes, but I hope all my exes are well";

console.log(texasString.lastIndexOf("x") + " was the last index, and " + texasString.indexOf("x") + " was the first index");


//     .replace(find, replace): returns a copy of the string after performing a substitution.

let newString = texasString.replace("Texas", "The planet Earth");

console.log("Our new string is: " + newString);

//     .substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.

console.log(texasString.substring(texasString.indexOf("f")));

console.log(texasString.substring(0, 5));

console.log(texasString);

let theWordTexas = texasString.substring(0,5);

console.log(theWordTexas);

console.log(texasString);

//     .toUpperCase(): returns a copy of the string in all upper case.

// .toLowerCase(): returns a copy of the string in all lower case.

let yellAboutTexas = " the stars at night are big and bright clapclapclapclap deep in the heart of texas                ";

console.log(yellAboutTexas.toUpperCase().toLowerCase());

// .trim(): returns a copy of the string with whitespace at the beginning and end removed.

console.log("Did we trim?" + yellAboutTexas + " - let's see");
console.log("This should look ab it better - " + yellAboutTexas.trim() + ", see?");