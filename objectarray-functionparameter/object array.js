const students = [
    { name: 'thrishna', age: 18, grade: 'A' },
    { name: 'Ajay', age: 20, grade: 'C' },
    { name: 'Sourav', age: 22, grade: 'B' }
]

// accessing datas
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array
students.forEach(students => {
    console.log(`${students.name} is ${students.age} years old`);

})

