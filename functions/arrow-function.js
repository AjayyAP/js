// arrow function is a short term syntax for writing functions in js.indroduced in ES6(ECMA SCRIPT)

// const handlesubmit = () => {
//     // block of codes
// }

// ---function declaration
// function add(a, b) {
//     return a + b;
// }

//console.log(add(2,4));



//using arrow function

const add = (a, b) => a + b;
console.log(add(2, 2));

//----single parameters (no parentheses needed)----
const square = x => x * x;
console.log("square of 4:", square(4));


//------no parameters(empty parantheses)
const greet = () => console.log("hlo...");
greet();

//---- multi-line function----
const divide = (a, b) => {
    const result = a / b;
    return result;
}
console.log("division of 10,2is:", divide(10, 2));


