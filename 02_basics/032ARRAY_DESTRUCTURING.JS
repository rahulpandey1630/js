// ✅ Definition:
// Array Destructuring is a feature in JavaScript that allows you to extract values from arrays
// and assign them to variables in a single line of code using a simple and clean syntax.

// ✅ Example Array:
const fruits = ["apple", "mango", "banana"];

// ✅ Basic Destructuring:
// The values from the 'fruits' array are assigned to variables a, b, and c respectively.
const [a, b, c] = fruits;
//UNDEFINED IF NO VALUE

console.log(a); // Output: "apple"
console.log(b); // Output: "mango"
console.log(c); // Output: "banana"

// ✅ Skipping Elements:
// You can skip unwanted elements by leaving their position empty using a comma.
const [first, , third] = fruits;

console.log(first); // Output: "apple"
console.log(third); // Output: "banana"
// The second element "mango" is skipped using the extra comma.

// ✅ Default Values:
// If the array doesn't have enough elements, you can assign default values to avoid undefined.
const [p, q, r = "guava"] = ["apple", "mango"];

console.log(p); // Output: "apple"
console.log(q); // Output: "mango"
console.log(r); // Output: "guava"
// Since the array has only two values, r gets the default value "guava".


// Suppose we have an array with multiple elements
let myArray = [10, 20, 30, 40, 50];

// ✅ Using Array Destructuring with Rest Operator (...)
let [myvar1, myvar2, ...myNewArray] = myArray;

// Explanation:
// myvar1 = first element of myArray => 10
// myvar2 = second element of myArray => 20
// ...myNewArray = rest of the elements => [30, 40, 50]

console.log("value of myvar1", myvar1);      // Output: value of myvar1 10
console.log("value of myvar2", myvar2);      // Output: value of myvar2 20
console.log(myNewArray);                     // Output: [30, 40, 50]



// ✅ Swapping Variables using Destructuring:
// A smart way to swap values of two variables without using a temporary variable.
let x = 1;
let y = 2;

[x, y] = [y, x]; // Swaps the values: x becomes 2, y becomes 1

console.log(x); // Output: 2
console.log(y); // Output: 1

// ✅ Destructuring with function return values:
function getCoordinates() {
  return [10, 20];
}

// Using destructuring to assign return values directly
const [lat, long] = getCoordinates();

console.log(lat);  // Output: 10
console.log(long); // Output: 20

// ✅ Nested Destructuring (for arrays within arrays):
const colors = ["red", ["green", "blue"]];

// Accessing nested values directly
const [primary, [secondary, tertiary]] = colors;

console.log(primary);   // Output: "red"
console.log(secondary); // Output: "green"
console.log(tertiary);  // Output: "blue"
