// ✅ FOR OF LOOP IN JAVASCRIPT

// 🔹 **Definition:**  
// The `for...of` loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.  
// It provides a simple and clean way to loop through the values of an iterable without using indices.
// for (const element of object) {
    
// }
// ✅ Example 1: Iterating Through an Array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // Logs each element in the array
    console.log(num);
}
// 🔹 **Explanation:**  
// The `for...of` loop directly gives you the element value in each iteration, unlike the traditional `for` loop that uses an index.


// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


// ✅ Example 2: Iterating Through a String
const greetings = "Hello world!";
for (const greet of greetings) {
    // Logs each character in the string
    console.log(`Each char is ${greet}`);
}

// 🔹 **Explanation:**  
// The `for...of` loop can iterate through strings, treating each character as an individual value.

// ---------------------------------------------

// ✅ MAPS IN JAVASCRIPT

// 🔹 **Definition:**  
// A `Map` is a collection of key-value pairs in JavaScript where keys can be of any data type (including objects).

// ✅ Example: Creating and Iterating a Map
const map = new Map();
map.set('IN', "India");  // Sets key 'IN' with value "India"
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");  // Overwrites the previous 'IN' key with the same value

// Logs the entire Map
console.log(map);

// ✅ Iterating Through a Map Using `for...of`
for (const [key, value] of map) {
    // Logs each key-value pair in the map
    console.log(key, ':-', value);
}
//this for of will not work to iterate through object
// 🔹 **Explanation:**  
// The `for...of` loop can iterate through the entries of a `Map` by destructuring each key-value pair into variables `key` and `value`.

// ---------------------------------------------

// ⚠️ **Note:**  
// The `for...of` loop cannot be used directly on regular objects (`{}`). It works only on iterable objects like arrays, strings, maps, sets, etc.  
// If you try to use `for...of` on a regular object, it will throw an error.

// ✅ Example: Trying to Iterate a Regular Object (Throws Error)
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// };

// ❌ This will throw an error because `myObject` is not iterable.
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**  
// 1️⃣ **For...of Loop:** Used to iterate over the values of iterable objects like arrays, strings, maps, sets, etc.  
// 2️⃣ **Array Iteration:** The `for...of` loop can iterate through arrays directly, providing each element without needing an index.  
// 3️⃣ **String Iteration:** The `for...of` loop can iterate through strings, treating each character as a value.  
// 4️⃣ **Maps:** A `Map` is a key-value pair collection that allows keys of any data type.  
// 5️⃣ **Map Iteration:** The `for...of` loop can iterate through maps using destructuring to access keys and values.
