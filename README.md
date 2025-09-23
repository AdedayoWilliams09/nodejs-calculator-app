# 📘 Node.js Calculator Application

This is a simple **Node.js Calculator App** that demonstrates the use of:

* **Built-in Node.js modules** (`fs`, `readline`)
* **Third-party modules** (`chalk` for colorful output, `mathjs` for advanced math operations)
* **Custom modules** (addition, subtraction, multiplication, division, modulus, power)

It combines **two modes** in one app:
1. **Menu-driven mode** → Choose an operation (add, subtract, multiply, etc.) and enter two numbers.
2. **Free Expression mode** → Type any math expression (like `sqrt(25) + 3 * 4`) and get instant results using `mathjs`.


---

## ✨ Features


* ✅ **Menu-driven operations** (using custom modules):
  * Addition
  * Subtraction
  * Multiplication
  * Division (with divide-by-zero handling)
  * Modulus
  * Power (exponentiation)
* ✅ **Expression mode** using `mathjs`:
  * Handles advanced math like `sqrt()`, `pow()`, `sin()`, `log()`, factorials, etc.
  * Supports parentheses and operator precedence
* ✅ Results saved to `calculations.txt` (JSON format)
* ✅ Colorful terminal output with `chalk`
* ✅ Displays **registration number** at startup

---

## 📂 Project Structure

```
calculator-app/
│
├── index.js          # Main entry point (interactive menu)
├── add.js          # Custom module 1
├── subtract.js     # Custom module 2
├── multiply.js     # Custom module 3
├── divide.js       # Custom module 4
├── modulus.js      # Custom module 5
├── power.js        # Custom module 6
├── package.json
└── calculations.txt # Created dynamically to store results
└── docs/
    └── rough-sketch.jpg # Rough ideation sketch
```

## 📝 Rough Ideation Sketch

Below is the rough sketch that outlines the design and flow of the calculator application:

![Calculator Rough Sketch](./docs/rough-sketch.jpg)


---

## ⚡ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/AdedayoWilliams09/nodejs-calculator-app
   cd nodejs-calculator-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

   or

   ```bash
   node index.js
   ```

---

## 🖥️ Example Usage

```
Registration Number: BD/2025/TC3/008

=== WELCOME TO NODE.JS CALCULATOR ===

Choose an operation:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Power (^)
7. Free Expression Mode (mathjs)
8. Exit

Enter your choice (1-8): 3
Enter first number: 8
Enter second number: 7

✖️  8 * 7 = 56
📁 Result saved to calculations.txt

```

## Expression Mode
Enter your choice (1-8): 7

Enter a math expression (or type 'exit' to go back): sqrt(16)
✅ Result: 4
📁 Result saved to calculations.txt

Enter a math expression (or type 'exit' to go back): (5+3)*2
✅ Result: 16

Enter a math expression (or type 'exit' to go back): exit
🔙 Returning to main menu...

## 📚 MathJS Cheat Sheet (Expression Mode Examples)
| Expression      | Description       | Result |
| --------------- | ----------------- | ------ |
| `sqrt(25)`      | Square root       | `5`    |
| `pow(3, 4)`     | Power (3^4)       | `81`   |
| `(10 / 2) + 5`  | Normal arithmetic | `10`   |
| `sin(pi / 2)`   | Trigonometry      | `1`    |
| `log(100, 10)`  | Log base 10       | `2`    |
| `5!`            | Factorial         | `120`  |
| `mean([2,4,6])` | Average of list   | `4`    |
| `abs(-42)`      | Absolute value    | `42`   |



---

## 🛠️ Technologies Used

* **Node.js** (ES Module format)
* **chalk** (third-party npm module)
* **mathjs** (for advanced math calculations)
* **fs** and **readline** (built-in modules)

---

## 📝 Notes

* Ensure you are running **Node.js v14+** (supports ES modules).
* Results of each calculation are appended to `calculations.txt` as JSON.
* Exit the app anytime by selecting **option 7**.

---

## 📜 License

This project is for **educational purposes**. You are free to use and modify it.
