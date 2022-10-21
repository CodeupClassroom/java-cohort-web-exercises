console.log($('#helloWorld'));


// jquery syntax for selecting elements

// console.log($('h1'));

console.log($('#main-heading'));

// any element -> vague
// $('name-of-element')
$('h1') // -> selected ALL h1 elements in my document

// any element with a specific class name/value
// $('.name-of-class')
let rows = $('.row') // -> select ANY element with the CLASS value of 'row'
// rows.css('border', '2px solid red');


// THE element with an id value of ..
// $('#name-of-id')
$('#main-heading') // -> return the element with id of main-heading
// equivalent in bom/dom
document.getElementById('main-heading')


$('#main-heading').css('color', 'orange');

// how to select multiple unique elements at the same time?
$('h2,img').css({
    'border': '2px dotted blue',
    'background-color': 'orange'
});


// selecting EVERYTHING
$('*').css({
    'padding': '40px',
    'color': 'purple'
})

jQuery('h2').css('border-radius', '80px')

$('#box').append(`<p id="helloWorld">Hello world</p>`);
$('#helloWorld').css('font-size', '30px');

alert($('h1').html())