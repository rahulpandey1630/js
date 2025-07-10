// ✅ IF-ELSE STATEMENTS AND CONDITIONAL OPERATORS IN JAVASCRIPT

// 🔹 **If-Else Statement:**  
// The `if` statement is used to execute a block of code based on a condition.  
// The `else` block executes if the `if` condition is false.  
// You can also use `else if` to check multiple conditions.

// ✅ Example:
const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("Less than 50");
} else {
    console.log("Temperature is greater than 50");
}
// ✅ Output: "Temperature is greater than 50"

// ---------------------------------------------

// 🔹 **Comparison Operators:**
// These operators are used to compare values in conditions.
// - `<`, `>`, `<=`, `>=` – Less than, Greater than, Less than or equal to, Greater than or equal to  
// - `==` – Equality (does not check data type)  
// - `===` – Strict Equality (checks both value and data type)  
// - `!=` – Not Equal  
// - `!==` – Strict Not Equal  

// ---------------------------------------------

// ✅ Example of Scope in `if` Block:
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);  // ✅ Output: "User power: fly"
}

// console.log(`User power: ${power}`);  ❌ Error: `power` is not accessible outside the `if` block  
// 🔹 **Explanation:**  
// `let` and `const` variables have block scope, meaning they are only accessible inside the block they are declared in.

// ---------------------------------------------

// ✅ Example of Single-Line `if` Statement:
const balance = 1000;

if (balance > 500) console.log("Test"), console.log("Test2"); // not recommended 
// ✅ Output: "Test"
// ✅ Output: "Test2" 
// 🔹 **Explanation:**  
// If there is only one statement inside the `if` block, curly braces `{}` are optional.  
// Multiple statements can be separated by commas.

// ---------------------------------------------

// ✅ Example of `else if` Statement:
if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}
// ✅ Output: "Less than 1200"

// 🔹 **Explanation:**  
// The `else if` blocks check conditions one by one.  
// The first matching condition's block is executed, and the rest are ignored.

// ---------------------------------------------

// ✅ Example of Logical Operators in Conditions:
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
// ✅ Output: No output (because `2 == 3` is false)

// 🔹 **Explanation:**  
// - `&&` (AND) operator requires all conditions to be true.  
// - `||` (OR) operator requires at least one condition to be true.

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// ✅ Output: "User logged in"

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**
// 1️⃣ The `if-else` statement is used to execute code based on conditions.  
// 2️⃣ Comparison operators include `<`, `>`, `<=`, `>=`, `==`, `!=`, `===`, `!==`.  
// 3️⃣ `&&` (AND) and `||` (OR) are logical operators used to combine conditions.  
// 4️⃣ `let` and `const` variables are block-scoped and not accessible outside the block.  
// 5️⃣ If there is only one statement in the `if` block, curly braces are optional.
 


function checkAge(age) {
  if (age < 18) return "Too young"; // 🔁  bearly return if condition is met

  // ✅ Code below runs only if age ≥ 18
  return "You can vote";
}

console.log(checkAge(16)); // "Too young"
console.log(checkAge(20)); // "You can vote"

// 🔁 Summary:
// - Early return exits the function as soon as a condition is met
// - Makes code cleaner, avoids unnecessary else blocks
