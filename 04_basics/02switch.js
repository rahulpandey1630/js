// ✅ SWITCH STATEMENT IN JAVASCRIPT

// 🔹 **Definition:**
// The `switch` statement is a control structure used to evaluate an expression against multiple possible cases.  
// If a match is found, the corresponding block of code is executed.  
// If no match is found, the `default` block is executed.

// ---------------------------------------------

// ✅ **Syntax:**
// switch(expression) {
//     case value1:
//         // Code to be executed if expression === value1
//         break;
//     case value2:
//         // Code to be executed if expression === value2
//         break;
//     default:
//         // Code to be executed if no match is found
//         break;
// }

// ---------------------------------------------

// ✅ **Example of Switch Statement:**
const month = "march";

switch (month) {
    case "jan":  // Checks if month === "jan"
        console.log("January");
        break;  // Exits the switch statement once a match is found
    case "feb":  // Checks if month === "feb"
        console.log("February");
        break;
    case "march":  // Checks if month === "march"
        console.log("March");
        break;
    case "april":  // Checks if month === "april"
        console.log("April");
        break;
    default:  // If no case matches, this block executes
        console.log("Default case match");
        break;
}
// ✅ Output: "March"

// ---------------------------------------------

// 🔹 **Explanation:**
// - The switch statement evaluates the `month` variable.  
// - It matches the `month` value to the correct `case` block.  
// - If a match is found, it executes the corresponding code inside that `case` and stops further checks due to the `break` statement.  
// - If no match is found, the `default` block runs.

// ---------------------------------------------

// 🔹 **Important Concepts:**
// 1️⃣ **Case Sensitivity:**  
// The switch statement is case-sensitive.  
// For example, "march" is not the same as "March".  

// 2️⃣ **Break Statement:**  
// The `break` statement stops further execution of cases.  
// If `break` is not used, the code will continue to run into the next cases (this is called "fall-through behavior").  

// 3️⃣ **Default Case:**  
// The `default` block is optional but is used to handle situations when no case matches.  
// It acts like the `else` block in an `if-else` structure.

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**
// 1️⃣ The `switch` statement is used to compare a value against multiple cases.  
// 2️⃣ The `break` statement stops execution from falling into the next case.  
// 3️⃣ The `default` block executes if no cases match.  
// 4️⃣ Switch statements are case-sensitive.  
// 5️⃣ Using `break` is crucial to avoid fall-through behavior.
