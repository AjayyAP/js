const person = { name: 'neha', age: 20, country: 'india' };

//basic destructuring
const { name, age } = person;
console.log(name);


//rename variables
const { country: nation } = person
console.log(nation);


//default values
const { gender = "female" } = person
console.log(gender);


