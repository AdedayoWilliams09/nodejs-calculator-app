// 1. Built-in modules
import fs from "fs";
import readline from "readline";

// 2. Third-party module
import chalk from "chalk";
import { evaluate } from "mathjs";

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
  output: process.stdout,
});

// Display menu
function showMenu() {
  console.log(chalk.yellow("Choose an operation:"));
  console.log("1. Addition (+)");
  console.log("2. Subtraction (-)");
  console.log("3. Multiplication (*)");
  console.log("4. Division (/)");
  console.log("5. Modulus (%)");
  console.log("6. Power (^)");
  console.log("7. Free Expression Mode (mathjs)");
  console.log("8. Exit\n");

  rl.question("Enter your choice (1-8): ", handleMenuChoice);
}

// Handle menu choices
function handleMenuChoice(choice) {
  if (choice === "8") {
    console.log(chalk.green("\n👋 Exiting calculator. Goodbye!\n"));
    rl.close();
    return;
  }

  if (choice === "7") {
    return askExpression(); // Switch to expression mode
  }

  rl.question("Enter first number: ", (num1Str) => {
    rl.question("Enter second number: ", (num2Str) => {
      const num1 = Number(num1Str);
      const num2 = Number(num2Str);

      if (isNaN(num1) || isNaN(num2)) {
        console.log(chalk.red("\n❌ Please enter valid numbers.\n"));
        return showMenu();
      }

      performCalculation(choice, num1, num2);
    });
  });
}

// Perform standard operation using custom modules
function performCalculation(choice, num1, num2) {
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

    logResult({ operation: choice, num1, num2, result });
  } catch (error) {
    console.error(chalk.red(`\n${error.message}\n`));
  }

  showMenu();
}

// Expression mode using mathjs
function askExpression() {
  rl.question(chalk.yellow("\nEnter a math expression (or type 'exit' to go back): "), (input) => {
    if (input.toLowerCase() === "exit") {
      console.log(chalk.green("\n🔙 Returning to main menu...\n"));
      return showMenu();
    }

    try {
      const result = evaluate(input);
      console.log(chalk.cyan(`✅ Result: ${result}`));

      logResult({ operation: "expression", input, result });
    } catch (error) {
      console.log(chalk.red(`❌ Error: Invalid expression.`));
    }

    askExpression(); // Ask again until "exit"
  });
}

// Log result to file
function logResult(entry) {
  fs.appendFileSync("calculations.txt", JSON.stringify(entry) + "\n");
  console.log(chalk.white.bgGreen("📁 Result saved to calculations.txt"));
}

// Start program
showMenu();