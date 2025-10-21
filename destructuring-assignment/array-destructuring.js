const numbers = [10, 20, 40, 50];

//basic destructuring

const [a, b] = numbers;
console.log(a);
console.log(b);

//skipping values

const [, , c] = numbers;
console.log(c);


//using spread oprator

const [x, ...rest] = numbers;
console.log(x);
console.log(rest);


