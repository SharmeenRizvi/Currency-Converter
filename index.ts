#!/usr/bin/env node


import inquirer from "inquirer"

let conversionRate = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1

    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1

    }
}

const answers: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number

} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency: "
    },
    { 
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select the currency you want to convert to: "

    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert: "
    }
]);

const {from, to, amount} = answers;

if (from && to && amount){
    let result = conversionRate[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
} else {
    console.log("Invalid input");
}







  











