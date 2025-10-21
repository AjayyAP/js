function checkOddEven(...numbers) {
    numbers.forEach(num => {
        if (num % 2 == 0) {
            console.log(`${num} is EVEN`);
        } else {
            console.log(`${num} is ODD`);
        }
    })
}
checkOddEven(20, 7, 3, 11, 5, 10);