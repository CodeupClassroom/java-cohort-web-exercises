const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users);

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let atLeastThree = users.filter(function(user){
    return user.languages.length >= 3;
})

console.log(atLeastThree);

//     Use .map to create an array of strings where each element is a user's email address

let usersEmails = users.map((user) => user.email)
//function(user){
// return user.email
//}

console.log(usersEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce(function(previousValue, currentValue){
    console.log(previousValue);
    return previousValue + currentValue.yearsOfExperience
    }

, 0)

console.log("Total years summed:" + totalYears);
console.log(`Average experience math: ${totalYears / users.length}`);

//     Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce(function(previousValue, currentValue){

    if(currentValue.email.length > previousValue.length){
        previousValue = currentValue.email
    }

    console.log(`Current email is: ${previousValue}`);
    return previousValue;

}, "")

console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructorsAsString = users.reduce(function(previousValue, currentValue, currentIndex, myArray){
    let punctuation = ","

    if(currentIndex === myArray.length - 1){
        punctuation = "."
    }

    return previousValue + currentValue.name + punctuation + " "


}, "Your instructors are : ")

console.log(instructorsAsString.length);
console.log(instructorsAsString.trim().length);