// Array Manipulation

// let animals = ['frog', 'bat', 'camel', 'bumble bee', 'wombat']
//
// // let pixarMovies = ['up', 'a bug\'s life', 'toy story', 'monster\'s inc', 'finding nemo']
//
// let favorites = ['pizza', 18, 'autumn', 2016, ['pepperoni & jalapeños', 'hawaiian', '']]

// adding movies

// methods - functions that are attached to an object
// forEach()

// push() --> add an element to the end of an array
// Kiley's favorite animal is dog
// arrayYouWantToAddTo.push('dog')

// console.log(animals)
// animals.push('dog');
// console.log(animals)
//
// animals.push('cat', 'giraffe', 'human')
// console.log(animals)

// let animals = ['frog', 'bat', 'camel', 'bumble bee', 'wombat', [1,2,3,4,5]]


// let places = ['mcdonalds', 'texas', 'the ocean', 'my house', ['berlin', 'london', 'prague']]

// let zoo = ['zebra', 'lion', 'dolphin', ['cricket', 'bee', 'butterfly'], 'wombat']

// // let symphony = ['strings', 'percussion', 'winds', 'conductor']
// let symphony = [['violin', 'cello', 'viola'], ['drumset', 'triangle', 'cymbals'], ['flute', 'clarinet', 'saxophone'], 'conductor']
//
// //
// console.log(symphony)
// // symphony.push('opera singer');
// // console.log(symphony)



// unshift

// add 'frog' at the beginning of the 'zoo' array using 'unshift()' method


// push
// -> adds to the end of the array
// -> returns the new length of the original array
// unshift
// -> adds the beginning of the array
// -> returns the new length of the original array




// removing movies

// .pop()
// -> remove last el from an arr
// -> returns the element removed

// array.pop()

// let pixarMovies = ['up', 'a bug\'s life', 'toy story', 'monster\'s inc', 'finding nemo']
//
// let removedMovie = pixarMovies.pop()
//
// console.log("removedMovie: ", removedMovie);

// .shift()
// -> removes the first el from an arr
// -> returns the element removed

// accessing movies
// nameOfTheArray[indexOfTheElYouWantToAccess]



// nested arrays

// MANIPULATING ARRAYS PART II

// slicing

let breakfastFoods = ['breakfast tacos', 'donuts', 'croissants', 'bagels', 'eggies', 'toast']


// slicing
// breakfastFoods.slice(2, 4)

// what gets returned?
// --> a brand new array containing the values from the starting point
// (including) up until ending point (excluding)

// does it change the og array?
// --> no

// let newArr = breakfastFoods.slice(2,5);
// // console.log(newArr); // ['croissants', 'bagels', 'eggies']
//
// // write a function that prints "I love ____ for breakfast"
// // ✅ write a function
// // ✅ pass in ? parameters -> yes, 1 parameter
// // ✅ pass in the argument -> the new array
// // ✅ call the function
// // inside the function?
// // console.log() -> each breakfast item
//
// function breakyFoods(foods){
//    console.log(foods);
//    // iterate through the array of foods -> forEach()
//     // print "I love" + eachFoodItem + for breakfast"
//     foods.forEach(function(food){
//         console.log("I love " + food + " for breakfast")
//     })
// }
//
// breakyFoods(newArr);




// reverse
// does it change the og array?
// -> YES
// what does it return?
// returns the array in reverse order


//sort
// does it change the og array?
// -> no
// what does it return?
// -> the og array that's been sorted

// ** which changes the og array ** //

// ** which returns a new array ** //

// ** which returns something else ** //










