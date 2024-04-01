import inquirer from "inquirer";
import addition from "./addition.js";
import division from "./division.js";
import multplication from "./multplication.js";
import substraction from "./substraction.js";
import chalk from 'chalk';
async function main() {
    const answar = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number",
        },
        {
            type: "list",
            name: "operator",
            message: "Please select the operation",
            choices: [
                { name: "Addition", value: addition },
                { name: "Division", value: division },
                { name: "Multiplication", value: multplication },
                { name: "Substraction", value: substraction },
            ]
        },
    ]);
    console.log(chalk.bgGreen(answar.operator(answar.number1, answar.number2)));
}
let confirm;
do {
    await main();
    confirm = await inquirer.prompt([
        {
            type: "confirm",
            name: "continue",
            message: "Do you want to restart operation",
        },
    ]);
} while (confirm.continue);
