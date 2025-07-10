// ✅ USING forEach METHOD IN JAVASCRIPT

// 🔹 **Definition of Important Concepts:**
// 1️⃣ **forEach() Method:**
//    - `forEach()` is a higher-order array method in JavaScript that executes a provided function once for each array element.
//    - It doesn't return a new array, unlike `map()`. It just loops through the array.
//    - It takes a callback function as an argument and can access three parameters: `item`, `index`, and `array`.

// 2️⃣ **Arrow Functions:**
//    - Arrow functions provide a cleaner and more concise syntax for writing functions.
//    - They don't have their own `this` binding, unlike regular functions, which can be helpful in specific cases.

// 3️⃣ **Callback Functions:**
//    - A callback function is a function passed as an argument to another function, to be executed later.

// 🔹 Code Implementation:

// ✅ Example 1: Using forEach with a Regular Function
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using an anonymous function with forEach
coding.forEach(function (val) {
    console.log(val);
});
// 🔹 **Output:**
// js
// ruby
// java
// python
// cpp


//Behind the scenes, it’s like doing this:

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// -------------------------------------------

// ✅ Example 2: Using forEach with Arrow Function
coding.forEach((item) => {
    console.log(item);
});
// 🔹 **Output:**
// js
// ruby
// java
// python
// cpp

// -------------------------------------------

// ✅ Example 3: Using forEach with a Named Function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);
// 🔹 **Output:**
// js
// ruby
// java
// python
// cpp

// -------------------------------------------

// ✅ Example 4: Using forEach with item, index, and array as Parameters
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
// 🔹 **Output:**
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// -------------------------------------------


// ✅ Example 5: Using forEach with an Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// Accessing the `languageName` property from each object
myCoding.forEach((item) => {
    console.log(item.languageName);
}); 
// 🔹 **Output:**
// javascript
// java
// python

// -------------------------------------------

// 🔹 **Summary of Key Concepts:**
// ✅ **forEach() Method:**
// - Used to loop over arrays and perform a specific task for each element.
// - It doesn't return a new array but iterates over the original array.
// - It takes a callback function as a parameter and can access `item`, `index`, and `array`.

// ✅ **Arrow Functions:**
// - Provide a shorter syntax for writing functions.
// - Arrow functions don't have their own `this` context, unlike regular functions.

// ✅ **Callback Functions:**
// - Functions passed as arguments to other functions, which are then executed inside the function.
