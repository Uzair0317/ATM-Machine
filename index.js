#!/usr/bin/env node
// Show Current Balance   Done
//Require My Pin
//Withdraw Balance
//Balance Check
import inquirer from "inquirer";
let MyBalance = 10000; //Dollar
let MyPin = 1234;
let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
});
if (pinanswer.pin === MyPin) {
    let OperationAns = await inquirer.prompt([
        { name: "Opperation",
            message: "Please Salect Option",
            type: "list",
            choices: ["Withdraw", "CheckBalance"]
        }
    ]);
    if (OperationAns.Opperation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        MyBalance -= amountAns.amount;
        if (amountAns.amount <= MyBalance) {
            console.log("Your Remaining Balance is = " + MyBalance);
        }
        else {
            console.log("Your Balance is insufficient !!");
        }
    }
    else if (OperationAns.Opperation === "CheckBalance") {
        console.log(`Your Current Balance = ${MyBalance}`);
    }
}
else {
    console.log("Incorrect PinCode!! Please Enter Your Correct PinCode!");
}
