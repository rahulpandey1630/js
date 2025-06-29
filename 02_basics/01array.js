// Arrays allow storing a collection of multiple values under a single variable name.
// They are resizable, zero-indexed, and can hold a mix of different data types (numbers, strings, etc.).
// Arrays are a special type of object; typeof returns "object" because arrays are built on top of objects.

const myArr = [0, 1, 2, 3, 4, 5];            // Define an array with numbers 0 to 5
const myHeroes = ["shaktiman", "naagraj"];   // Define an array with hero names
// let mixed = [1,2,2.3, "string", null, undefined];

const myArr2 = new Array(1, 2, 3, 4);        // Create a new array using the Array constructor
// console.log(myArr[1]);                       // Access and print the second element (1) of myArr

//console.log(Array.isArray(fruits)); TO CHECK IF IT IS ARRAY


// Use const for creating array
const fruits = ["apple", "mango"]; // The variable 'fruits' holds a reference to heap memory (e.g., 0x11)

// Modifying the contents of the array is allowed
fruits.push("banana");

// Output: ["apple", "mango", "banana"]
console.log(fruits);


// Array methods

// Add elements to the end of the array
// myArr.push(6);
// myArr.push(7);

// Remove the last element from the array
// myArr.pop();

// // Add elements to the beginning of the array. time consuming if large set
// myArr.unshift(9);

// // Remove the first element from the array
// myArr.shift();

// // Check if the array includes the number 9
// // console.log(myArr.includes(9));              // Outputs false if 9 is not present

// // Get the index of the number 3 in the array
// // console.log(myArr.indexOf(3));               // Outputs the index of 3, or -1 if not found

// // Join the elements of the array into a string
// const newArr = myArr.join();                 // Joins all elements into a string separated by commas 0,1,2,3,4,5

// // console.log(myArr);                          // Outputs the current state of myArr
// // console.log(newArr);                         // Outputs the string representation of myArr

// // slice and splice

console.log("A ", myArr);                    // Outputs the initial state of myArr

// Slice a portion of the array from index 1 to 2 (3rd element is not included)
const myn1 = myArr.slice(1, 3);

console.log(myn1);                           // Outputs the sliced portion [1, 2]
console.log("B ", myArr);                    // Outputs the state of myArr after slice (unchanged)

// Splice removes elements from the array and can insert new elements. so splice make modifications in original array
const myn2 = myArr.splice(1, 3);             // Removes 3 elements starting from index 1

console.log("C ", myArr);                    // Outputs the state of myArr after splice
console.log(myn2);                           // Outputs the removed elements [1, 2, 3]

// Important Notes:
// - `push()` and `pop()` modify the array by adding/removing elements at the end.
// - `unshift()` and `shift()` modify the array by adding/removing elements at the beginning.
// - `includes()` checks for the presence of an element and returns a boolean.
// - `indexOf()` returns the first index of an element or -1 if not found.
// - `join()` converts the array into a string with elements separated by commas (or any specified delimiter).
// - `slice()` returns a shallow copy of a portion of an array into a new array, without modifying the original array.
// - `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.and last ranges is also included in splice.
// splice make changes in original array