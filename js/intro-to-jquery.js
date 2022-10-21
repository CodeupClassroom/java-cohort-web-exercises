// step 7.
window.onload = function(){
    alert('windown.onload');
}

function anotherFunction(){
    alert('another function just ran');
}

// step 1 - run anotherfunction
anotherFunction();

// step 2
alert('global alert')

// step 4
$(function() {
    // step 5
    alert( 'The DOM has finished loading! -> jquery' );
    // step 6
    console.log("inside jquery fn")
    console.log($('#download-jquery-btn'));
});

// step 3
console.log('global:')
console.log($('#download-jquery-btn'));