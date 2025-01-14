// ✅ WHILE LOOP AND DO-WHILE LOOP IN JAVASCRIPT

// 🔹 **WHILE LOOP:**  
// The `while` loop executes a block of code as long as a specified condition is true.
// Syntax:  
// while (condition) {
//     // Code to execute
// }

// ✅ Example 1: Basic While Loop
let index = 0;
while (index <= 10) {
    // Logs the value of index in increments of 2
    console.log(`Value of index is ${index}`);
    index = index + 2;  // Increments index by 2
}

// ---------------------------------------------

// ✅ Example 2: While Loop Iterating Over an Array
let myArray = ['flash', "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
    // Logs each element of the array
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;  // Increments the array index
}

// ---------------------------------------------

// 🔹 **DO-WHILE LOOP:**  
// The `do-while` loop is similar to the `while` loop, but it guarantees that the code inside the loop will execute at least once, even if the condition is false.
// Syntax:  
// do {
//     // Code to execute
// } while (condition);

// ✅ Example 3: Do-While Loop
let score = 11;

// The condition `score <= 10` is false, but the code inside the `do` block will still execute once.
do {
    console.log(`Score is ${score}`);
    score++;  // Increments score by 1
} while (score <= 10);

// ---------------------------------------------

// ✅ **Key Differences Between While and Do-While Loops:**
// 1️⃣ **While Loop:** Checks the condition before executing the code block.  
// 2️⃣ **Do-While Loop:** Executes the code block at least once before checking the condition.

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**
// 1️⃣ **While Loop:** Runs as long as the condition is true. It may not run at all if the condition is false initially.  
// 2️⃣ **Do-While Loop:** Always runs at least once, regardless of whether the condition is true or false initially.  
// 3️⃣ **Use Cases:**  
// - Use `while` when you want to run the loop only if a condition is true.  
// - Use `do-while` when you want to ensure the loop runs at least once.
  