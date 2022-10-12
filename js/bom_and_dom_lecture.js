// let myFirstId = setInterval(function(){
//     alert(`5 seconds - alert! myId is: ${myFirstId}`)
//
//   let stopSeeingAlert =  confirm("Do you want to stop the five second alert?")
//
//     if(stopSeeingAlert){
//         clearInterval(myFirstId)
//     }
//
// }, 5000)
//
//
//
// let mySecondId = setInterval(function(){
//     alert(`3 seconds - alert! myId is: ${mySecondId}`)
// }, 3000)

//setTimeout - I don't want something to happen OVER AND OVER every x milliseconds - I want something to happen IN x milliseconds

let spaceXLaunch = function(){
    alert("AND WE HAVE LIFTOFF! ! ~ ~ ~")
}

let timeoutId = setTimeout(spaceXLaunch, 10000);

console.log(timeoutId);

let weatherNotGood = confirm("Is the weather too poor to launch?")

if(weatherNotGood){
    clearTimeout(timeoutId)
}

