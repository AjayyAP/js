const prompt = require('prompt-sync')();
let day = prompt("enter the day: ");

// let day = monday

switch (day) {
    case "monday":
        console.log("strat of work week");
        break;

    case "friday":
        console.log("end of work week");
        break;

    case "sunday":
        console.log("weeekend!");
        break;

    default:
        console.log("you are entered wrong");

        break;
}