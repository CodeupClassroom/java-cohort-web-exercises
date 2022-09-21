// objects -


// let myArr = [4, 'strawberries', ['a', 'b', 'c']]
//
// let myObject = {
//     myFavoriteNumber: 4,
//     myFavoriteFruit: 'strawberries',
//     letters: ['a', 'b', 'c']
// }
// console.log("hi my name is Laura and my fave num is: " + myArr[0])
//
// console.log("hi my name is Laura and my fave num is: " + myObject.myFavoriteNumber)
//
// console.log(myObject.letters[2]);


// creating a new object

//object constructor -- instantiating a new object
// var car = new Object();
// console.log(typeof car);

// // object literal notation
// let javaCohort = {
//     cohortName: 'Java',
//     classSize: 24,
//     location: 'Remote',
//     gradDate: 'Feb 17, 2023',
//     instructors: ['Ana', 'Kenneth', 'Trevor', 'Laura'],
//     programLength: 6
// }
//
// let myFeelings = {
//     currently: 'tired',
//     yesterday: 'happy'
// }

// let shoes = new Object();
// console.log(shoes);
//
// shoes.aglets = 'plastic';
// console.log(shoes);
//
// shoes.size = 8;
// console.log(shoes)
//
// shoes["brand"] = 'nike';
// console.log(shoes);


let airplane = {
    model: 747,
    brand: 'boeing',
    seats: 120,
    color: 'blue and white',
    age: 17,
    crew: ['pilots', 'flight attendants' ],
    sayAirplaneAge: function () {
        console.log(this)
        return "airplane age is: " + this.age
    },
    passengers: [
        {
            name: 'Ethan',
            location: 'brownsville',
            sayAge: function () {
                console.log("passenger Ethan: ")
                console.log(this)
                return "hello, I am " + this.age + " years old";
            }
        },
        {
            name: 'Jordan',
            age: 28,
            location: 'Pana, IL'
        },
        {
            name: 'Riley',
            age: 18,
            location: 'Hartly, DE'
        }
    ]
}
//
//
//
// airplane.crew // what data type? --> array


// let airplane = {
//     model: 777,
//     brand: 'boeing',
//     seatsAvail: 120,
//     numPassengers: 28,
//     fly: function(){
//         console.log("The airplane can fly!")
//     },
//     remainingSeats:  function(){
//         return this.seatsAvail - this.numPassengers;
//     },
//     takeoff: function (){
//        return "the " + this.model + " is taking off"
//     }
// }

// console.log(airplane.fly);
// airplane.fly();
// console.log(airplane.remainingSeats());


// methods -> functions that live inside of objects


// let car = new Object()












