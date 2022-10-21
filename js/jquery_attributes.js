//.html() - getter and setter :D
console.log($("p").html()); //Go GET what is there

$("p").html("<h1>Good morning class, y'all look great!</h1>"); //Go SET a new thing to be what is there

console.log($("p").html());

//.css()

//getting things :D
console.log($("li").css("list-style")); //GO GET the style [if found]
console.log($("li").css("font-family")); //GO GET the style [if found]

//setting things
//chain chain chain
$("li").css("background-color", "red").css("color", "blue");

//We can use an object too

let styleObject =   {
    'color':'green',
    'background-color':'red',
};

$("p").css(styleObject)

//.addClass()
$("div").addClass("dramatic")

//.removeClass()
$("div").removeClass("dramatic")

//toggleClass()
$("div").toggleClass("toggle-size")