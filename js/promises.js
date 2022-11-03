
// 1. make a request at an api address using the fetch keyword
// fetch - keyword making request
// url - address which you're looking for info for

// // console.log(fetch('https://api.github.com/users')) // setTimeout
// function errHandler(){
//     alert('sorry something went wrong')
// }
//
// fetch('https://api.github.cm/users') // promise created
//
//     // 2. IF SUCCESSFUL -> we get back a response (based on our req)
//     // .then(response => console.log(response.json()))
//     .then(function(response){
//         console.log(response);
//         console.log(response.json())
//     })
//     //3. IF ERROR, RUN FUNCTION INSIDE THE CATCH METHOD
//     .catch(err=> console.log(err.status))

//
//
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)
//     data.map(obj => {console.log(obj)})
// } )

// fetch('https://api.thub.com/users')
//     .then(function(res){
//         console.log('res: ', res)
//         let jsonifiedData = res.json();
//         return jsonifiedData
//     })
//     .then(function(jsonifiedData){
//         console.log(jsonifiedData);
//
//         // // looping through the array of objects
//         // jsonifiedData.map(function(obj, index, arr){
//         //     // logging out each user object
//         //     console.log();
//         //     console.log(obj)
//         // })
//     }).catch(error => console.log(error.message));
//
//
// console.log('i love pizza!')
//
// const blogPostsPromise = fetch('https://jsonplaceholder.typicode.com/posts'); // returns a promise
// const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');
//
// //
// Promise.all([blogPostsPromise, photosPromise])
//     .then(function(data) {
//         console.log(data);
//         // let jsonified;
//         data.map((response) => {
//             var jsonified = response.json()
//             console.log(jsonified)
//         })
//         return jsonified;
//     })
//     .then(jsonData => {console.log(jsonData)})
//     .catch(function(error) {
//         // handle errors
//         console.log(error)
//     });

//
// data.map(response =>  response.json())


// DIFFERENCE BETWEEN .MAP AND .FOREACH
// let myArr = [1,2,3,4];
//
// myArr.forEach(item => console.log(item *2));
//
// console.log(myArr)
//
// "------ map ------"
//
// let mapArr = [1,2,3,4];
//
// mapArr.map(item => console.log(item *2));
//
// console.log(mapArr)

// promise.all () - triggers the .then OR .catch AFTER all promsies have been completed


// const blogPostsPromise = fetch('https://jsonplaceholder.typicode.com/posts'); // returns a promise
// const photosPromise = fetch('https://jsonlaceholder.typicode.com/phtos');
//
// // console.log(blogPostsPromise, photosPromise)
//
// Promise.race([blogPostsPromise, photosPromise])
//     .then(res => res.json())
//     .then(data => console.log(data))


// CUSTOM PROMISES

// const myPromise = new Promise((resolve, reject) => {
//     let num = Math.random()
//     if (num > 0.5) {
//         console.log(num)
//         resolve('val from resolve');// run this if successful if random > .5
//     } else {
//         console.log(num)
//         reject('reason from reject'); // run this fn
//     }
// });
//
//
// myPromise.then(() => alert('resolved!'))
// myPromise.catch(() => alert('rejected!'))



// fetch -> url
// response -> json
// data -> do whatever you need to with that data
// .catch -> if anything goes wrong


function ghUser(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {
        headers: {
            'Authorization': GITHUB_API
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

ghUser('SuitcaseCoder')














