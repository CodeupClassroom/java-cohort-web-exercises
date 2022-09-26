let drawers = ['drawer 1','drawer 2','drawer 3','drawer 4']
undefined
drawers.length
4
for(let i = 0; i <= drawers.length; i++){}
undefined
for(let i = 0; i <= drawers.length; i++){
    console.log(`add this paper to ${drawers[i]}`
}
for(let i = 0; i <= drawers.length; i++){
    console.log(`add this paper to ${drawers[i]})`
}

for(let i = 0; i <= drawers.length; i++){
    console.log(`add this paper to ${drawers[i]}`)
}

for(let i = 0; i < drawers.length; i++){
    console.log(`add this paper to ${drawers[i]}`)
}


// while loop --> always checks first
var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++; // i += 1 // i = i + 1
}

// do while loop ---> runs at least once before checking
var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

var i = 0;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

//

function timesFour(input) {
    console.log(input)
    if(typeof input ==  'number'){
        return input * 4;
    } else {
        return false
    }
}