(function() {
    "use strict";



    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // let person = {};
    // person.firstName = "Kenneth";
    // person.lastName = "Howell"

    let person = {

        firstName: "Kenneth",
        lastName: "Howell"

    }

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
        //es6 friendly
        // console.log(`Hello from ${this.firstName} ${this.lastName}!`);

        //string concat friendly
        console.log("Hello from " + this.firstName + " " + this.lastName);
    }

    person.sayHello()

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //write a function - takes in an array
    // forEach loop is required
    //IF shoppers.amount is OVER 200 - 12 percent discount
    //ELSE they pay full price
    //Our conditional paths need to show - shopper.name, shopper.amount, discount, and adjusted shopper.amount as appropriate


    function hebOffer(arrayOfShoppers){

        arrayOfShoppers.forEach(function (shopper){

            if(shopper.amount > 200){

                console.log(`${shopper.name}, you qualified for our offer! You purchased $${shopper.amount} which earns a 12% discount. Your discount is $${(shopper.amount * .12).toFixed(2)} which gives you a new total $${(shopper.amount - (shopper.amount * .12)).toFixed(2)}`);

            } else {

                console.log(`${shopper.name} we were running a discount today if you bought over $200 - unfortunately, your total was $${shopper.amount} and you did not qualify. Perhaps you should go get some more items?`);

            }

        })

    }

    hebOffer(shoppers)

    console.log("~~~~~~~~~~~");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Franny and Zooey",
            author: {
                firstName: "J.D.",
                lastName: "Salinger"
            }
        }, {
            title: "Armor",
            author: {
                firstName: "John",
                lastName: "Steakley"
            }
        }, {
            title: "The Colour out of Space",
            author: {
                firstName: "H.P.",
                lastName: "Lovecraft"
            }
        }, {
            title: "Principia Discordia",
            author: {
                firstName: "Malacalypse",
                lastName: "the Younger"
            }
        }, {
            title: "Slaughterhouse Five",
            author: {
                firstName: "Kurt",
                lastName: "Vonnegut"
            }
        }
                ]

    console.log(books);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for(let i = 0; i < books.length; i++){
        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
        console.log("- - -");
    }

    console.log(" - - - for each - - -");

    books.forEach(function (book, index){
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("- - -");
        }

    )

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *   part two:
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, author){
        let authorName = author.split(" ")

        return {title: bookTitle,
        author: {
            firstName: authorName[0],
            lastName: authorName[1]
        }}
    }

    let books2 = [];

    books2.push(createBook("Raise High the Roof Beam, Carpenters", "J.D. Salinger"))
    books2.push(createBook("A Good Man Is Hard To Find", "Flannery O'Connor"))
    books2.push(createBook("The Swimmer", "John Cheever"))
    books2.push(createBook("The Short Happy Life of Francis Macomber", "Ernest Hemingway"))
    books2.push(createBook("The War of the Worlds", "H.G. Wells"))

    console.log(books2);

    function showBookInfo(arrayOfBooks){

        for(let i = 0; i < arrayOfBooks.length; i++){
            console.log(`Book # ${i + 1}`);
            console.log(`Title: ${arrayOfBooks[i].title}`);
            console.log(`Author: ${arrayOfBooks[i].author.firstName} ${arrayOfBooks[i].author.lastName}`);
            console.log("- - -");
        }

    }

    console.log("show book info test ~ ~ ~");
    showBookInfo((books2))

})();
