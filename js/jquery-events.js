// DARK-MODE BUTTON
// 1. click on the button
// 1. identify the button that's listening for the click
$('#dark').click(function(){
    // change body background to black
    // identify the body - select using jquery
    $('body').css({
        'background-color': '#160C28',
        'color': '#E1EFE6'
    });
})

// // LIGHT MODE BUTTON
// click without function
$('#light').click(function() {
    $('body').css({
        'background-color': '#EFCB68',
        'color': '#160C28'
    })
})

// // button to listen for the click


// 2. on click of the button ...
// // background color -> black
// // font color -> white


// 1. which element is LISTENING for an event
// 2. what is the event (click, hover, etc.)
// 3. what happens once the event takes place? --> lives inside of passed in fn
// 4. which element(s) is the ACTION happening TO
// $('#change-Font').dblclick(function(){
//     $('#change-Font').css('font-size', '32px');
// })
//
// // select images
//
//
// function hoverIn(){
//     $(this).css('scale', '1.2')
// }
//
//
//
// $('img').hover(
//     // when mouse enters element's space
//    hoverIn,
//     // when the mouse leaves element's space
//     function(){
//         $(this).css('scale', '1')
//     }
// )


// TOGGLE
// toggle dark mode on/off:

// $("#dark").click(function(){
//     // what are we toggl-ing?
//     $('h1').toggleClass('borders');
//     $('p').addClass('large')
//     $('h1').removeClass('dark-mode')
// })
//
//
// $('#light').click(function(){
//     $('body').addClass('dark-mode')
// })
// // $('#light').click(function(){
// //     $('body').removeClass('dark-mode')
// // })



// KEYBOARD EVENTS


// $('#city').keydown(function(e){
//  let keyCheck = confirm(`did you typed in: ${e.key}`)
//
//
//     console.log(keyCheck);
//     if(!keyCheck){
//         let del = $.Event('keydown', {
//             keyCode: 46
//         });
//         del.key = 'z';
//         $('#city').trigger(del);
//
//     } else {
//         console.log(e.key);
//     }
// })



// KEYBOARD EVENTS


// 1. which element is listening for an event?
// 2. which event is it listening for
// 3. what's happening to WHICH event once the event happens?



$('#city').keyup(function(e){

    console.log(e.key);
    console.log(e.keyCode);
    // confirm(`Are you sure you meant to type: ${e.key}`)
})


$(document).keyup(function(event){
    console.log(event.key);

    if(event.key == 'ArrowRight'){
        // alert('right arrow clicked');
        $('#second-set').css('display', 'none');
        $('#first-set').css('display', 'flex')

    } else if(event.key == 'ArrowLeft'){
        $('#first-set').css('display', 'none');
        $('#second-set').css('display', 'flex')
    }
})

function first(e){
    // 2.
    alert('first');
    console.log('e on first: ' ,e);
    $('#dbl-click').off('click')

    // 3.
    // $('#dbl-click').click(second(e));
}



function second(e){
    // 4.

    alert('second');
    console.log('second e',e);
}

$('#dbl-click').click(function(e){
    // $(this).off('click');
    // 1.
    first(e);
});


$('#dbl-click').click(second)








// do mouse clicks have specific ids tied to them?









































