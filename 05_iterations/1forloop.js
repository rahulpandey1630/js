// ✅ FOR LOOP IN JAVASCRIPT

// 🔹 **Definition:**  
// A `for` loop is used to repeat a block of code a specific number of times.  
// Syntax:  
// for (initialization; condition; increment/decrement) {
//     // Code to execute
// }

// ✅ Example 1: Basic For Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // This condition will trigger when i equals 5
        //console.log("5 is the best number");
    }
    // Logs numbers from 0 to 10
    //console.log(element);
}

// ❌ **Note:** The variable `element` inside the for loop is block-scoped.  
// Uncommenting the below line would throw an error as `element` is not accessible outside the loop.
// console.log(element); // ❌ Error: element is not defined

// ✅ Example 2: Nested For Loop
for (let i = 1; i <= 10; i++) {
    // Outer loop will run 10 times
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Inner loop runs for each iteration of the outer loop
        // Logs the multiplication table
        //console.log(i + '*' + j + ' = ' + i * j);
    }
}

// ✅ Example 3: Iterating Over an Array
let myArray = ["flash", "batman", "superman"];
// The `length` property returns the number of elements in the array
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Logs each element of the array
    //console.log(element);
}

// ---------------------------------------------

// ✅ BREAK AND CONTINUE STATEMENTS

// 🔹 **break Statement:**  
// The `break` statement is used to exit a loop immediately when a certain condition is met.

// Example: Breaking the loop when the index is 5
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;  // The loop will stop once index equals 5
//     }
//     console.log(`Value of i is ${index}`);
// }

// 🔹 **continue Statement:**  
// The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.

// Example: Skipping the number 5 in the loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;  // Skips the current iteration when index equals 5
    }
    // Logs the value of `index` except for 5
    console.log(`Value of i is ${index}`);
}

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**  
// 1️⃣ **For Loop:** Used to repeat a block of code a specific number of times.  
// 2️⃣ **Nested For Loop:** A loop inside another loop, useful for handling multidimensional arrays or tables.  
// 3️⃣ **Iterating Over Arrays:** The `for` loop can iterate through each element of an array using the array's length property.  
// 4️⃣ **break Statement:** Exits the loop when a certain condition is met.  
// 5️⃣ **continue Statement:** Skips the current iteration of the loop and moves to the next iteration.
