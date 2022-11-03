// fetch('https://lean-bloom-fireman.glitch.me/movies')
// .then(res => res.json())
// .then(data => console.log(data))
//
// $.get()

// CRUD
// CREATE, READ, UPDATE, DELETE


// GET REQUESTS -> get info from server
// client <--> server
// request <--> response
// request: url (location)

//POST REQUEST -> send info to the server
// request: endpoint (specific location), access (api key), headers (meta info), data/body (actual stuff we want to save in the server), data type (json or another format)

// fetch('https://jsonplaceholder.typicode.com/users/')
// .then(res => res.json())
// .then(data => console.log(data))

// physical address: api.github.com
// unit/room number: /users -endpoint

// POST REQUEST

// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// },


//POST REQUEST -> send info to the server
// request: endpoint (specific location), access (api key), headers (meta info), data/body (actual stuff we want to save in the server), data type (json or another format)
fetch('https://api.dictionaryapi.dev/api/v2/entries',{
    method: 'POST',
    body: JSON.stringify({
        word: 'sillyputty',
        origin: 'toy'
    })
})
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

// DELETE BLOG POST
// request: id of the user deleting the post, post id- the id of the post we want to delete, what kind of request being made (DELETE),
// fetch('https://jsonplaceholder.typicode.com/psts/1', {
//     method: 'DELETE'
// })
//     .then(res => console.log(res.status))
//     .catch(err => err.response.status)


// PUT / PATCH request -> edit
// fetch('https://jsonplaceholder.typicode.com/posts/5',{
//     method: 'PUT',
//     body: JSON.stringify({
//         title: "My awesome blog post!"
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// fetch()





// FETCH GET GETTING PROMISE

// list of things
// 1. get all list of things
// 2. add a new thing to the list
// 3. get all list of things AGAIN to see the most recent list



























