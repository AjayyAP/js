//function passing another function as  an argument
// *handle asynchronous operation
//* customise behaviour of general purpose functions
//* avoid blocking code execution


//this is our callback function
function greetUser(name) {
    console.log(`hello ${name}`);

}

// this function takes another function (callback function) as an parameter
function getUserInput(callback){
    const name = "ajay";
    callback(name); // calling the callback function with users name
}  getUserInput(greetUser);






// callback hell or pyramid of doom -> multiple nexted callback make the code difficult to read and maintain
