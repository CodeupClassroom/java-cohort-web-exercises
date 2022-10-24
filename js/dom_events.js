//Okay - so I want to see what my user is doing in some way [listen for an event]

//I need to tell JavaScript some key things:
//a. Where is the event you want me to listen for [what element or element(s)]
//The where involves DOM - grabbing parts of the DOM tree to attach a 'listener' to

//Step one: Target for our event listener

let topHeading = document.getElementById("top-heading")

console.log(topHeading);

//Side note: HTML5 will automatically offer up variables with unique id attributes on the element


//Step two: Let's add an event listener to our target
//Answer this question: What event am I listening for? [dblclick, click, hover, keypressUp]

//element.addEventListener(typeOfEvent, instructions[FN])

// topHeading.addEventListener("click",
//
//         function (){
//      alert("Heading clicked");
//     }
//
// )

//We can wrap the function in a variable and send it up with the listner as well:

let eventInstructions = function(){
    alert("Hello, I'm inside this variable :D")}


topHeading.addEventListener("click", eventInstructions);

let bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

let keyPressFunction = function(event){
    console.log(event);
}

bodyElement[0].addEventListener("keydown", keyPressFunction)

//Let's remove our keypress event:

let removeEventButton = document.getElementById("removeEvent"); //getting our target


removeEventButton.addEventListener("click", function(){
    bodyElement[0].removeEventListener("keydown", keyPressFunction)
})