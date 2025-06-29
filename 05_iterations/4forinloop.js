// ✅ FOR...IN LOOP IN JAVASCRIPT

// 🔹 **Definition:**  
// The `for...in` loop iterates over the enumerable properties (keys) of an object.  
// It is typically used for looping through the properties of objects or indices of arrays(give inDEx).

// ---------------------------------------------

// ✅ Example 1: Iterating Through an Object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // Logs each key-value pair in the object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// 🔹 **Explanation:**  
// The `for...in` loop iterates over the keys of the `myObject`.  
// The variable `key` holds the property name, and `myObject[key]` retrieves the corresponding value.

// ---------------------------------------------

// ✅ Example 2: Iterating Through an Array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // Logs each element in the array using its index
    console.log(programming[key]);
}

// 🔹 **Explanation:**  
// The `for...in` loop iterates through the indices of the `programming` array.  
// The variable `key` holds the index, and `programming[key]` retrieves the corresponding value.

// ---------------------------------------------

// ⚠️ **Important Note:**  
// The `for...in` loop is not recommended for iterating through arrays because it loops through **indices** instead of values.  
// The `for...of` loop is better for iterating over array values directly.

// ---------------------------------------------

// ❌ Incorrect Use of `for...in` on a Map (Will Not Work)
const map = new Map(); //map is not iterable
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

// This will not work as `for...in` is not meant for `Map` objects
for (const key in map) {
    console.log(key); // ❌ Does not work
}

// 🔹 **Explanation:**  
// The `for...in` loop works only with objects and arrays.  
// For iterating through a `Map`, you should use the `for...of` loop instead.

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**  
// 1️⃣ **For...in Loop:** Used to iterate over keys of objects or indices of arrays.  
// 2️⃣ **Object Iteration:** In an object, the `for...in` loop retrieves keys, which can be used to access values.  
// 3️⃣ **Array Iteration:** In an array, the `for...in` loop retrieves indices, which can be used to access values.  
// 4️⃣ **Maps and Sets:** The `for...in` loop does not work on `Map` or `Set` objects. Use `for...of` for those.
