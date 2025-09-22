// app.js

// 1. Built-in modules
import fs from "fs";
import readline from "readline";

// 2. Third-party module
import chalk from "chalk";

// 3. Custom modules
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { modulus } from "./modulus.js";
import { power } from "./power.js";

// ✅ Print registration number
console.log(chalk.blue.bold("Registration Number: BD/2025/TC3/008"));
console.log(chalk.white.bold("\n=== WELCOME TO NODE.JS CALCULATOR ===\n"));

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menu function
function showMenu() {
  console.log(chalk.yellow("Choose an operation:"));
  console.log("1. Addition (+)");
  console.log("2. Subtraction (-)");
  console.log("3. Multiplication (*)");
  console.log("4. Division (/)");
  console.log("5. Modulus (%)");
  console.log("6. Power (^)");
  console.log("7. Exit\n");

  rl.question("Enter your choice (1-7): ", handleMenuChoice);
}

// Handle user choice
function handleMenuChoice(choice) {
  if (choice === "7") {
    console.log(chalk.green("\n👋 Exiting calculator. Goodbye!\n"));
    rl.close();
    return;
  }

  rl.question("Enter first number: ", (num1Str) => {
    rl.question("Enter second number: ", (num2Str) => {
      const num1 = Number(num1Str);
      const num2 = Number(num2Str);
      let result;

      try {
        switch (choice) {
          case "1":
            result = add(num1, num2);
            console.log(chalk.green(`\n➕ ${num1} + ${num2} = ${result}\n`));
            break;
          case "2":
            result = subtract(num1, num2);
            console.log(chalk.yellow(`\n➖ ${num1} - ${num2} = ${result}\n`));
            break;
          case "3":
            result = multiply(num1, num2);
            console.log(chalk.cyan(`\n✖️  ${num1} * ${num2} = ${result}\n`));
            break;
          case "4":
            result = divide(num1, num2);
            console.log(chalk.magenta(`\n➗ ${num1} / ${num2} = ${result}\n`));
            break;
          case "5":
            result = modulus(num1, num2);
            console.log(chalk.blue(`\n🔢 ${num1} % ${num2} = ${result}\n`));
            break;
          case "6":
            result = power(num1, num2);
            console.log(chalk.redBright(`\n✨ ${num1} ^ ${num2} = ${result}\n`));
            break;
          default:
            console.log(chalk.red("\n❌ Invalid choice. Try again.\n"));
            return showMenu();
        }

        // Save result to file
        const logText = `Operation: ${choice}, Num1: ${num1}, Num2: ${num2}, Result: ${result}\n`;
        fs.appendFileSync("calculations.txt", logText);

      } catch (error) {
        console.error(chalk.red(`\n${error.message}\n`));
      }

      // Show menu again after calculation
      showMenu();
    });
  });
}

// Start the program
showMenu();
