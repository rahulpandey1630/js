// **Understanding Reduce Method in JavaScript**
/* The reduce() method of Array instances executes a user-supplied "reducer" callback function
 on each element of the array, in order, passing in the return value from the calculation on the
  preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an 
initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and 
iteration starts from the next element (index 1 instead of index 0). */
const myNums = [1, 2, 3];

// Using reduce method with anonymous function
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

// Explanation:
// The reduce() method iterates over each element of the array and performs the accumulator function.
// acc - Accumulator, which stores the running total.
// currval - Current value of the array element being processed.
// The initial value of acc is 0.

// Example output for the above reduce method:
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// Final result: 6

// Now using reduce method with arrow function for simplicity
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

// **Explanation for Arrow Function:**
// The arrow function simplifies the syntax of the reduce method.
// (acc, curr) => acc + curr: It takes two arguments and returns their sum.
// 0: The initial value for the accumulator (acc).

// **Working with Objects in an Array using reduce**

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
];

// Using reduce to calculate the total price of items in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996

// **Explanation:**
// 1. The reduce method iterates over each item in the shoppingCart array.
// 2. It extracts the price of each item and adds it to the accumulator (acc).
// 3. The initial value of acc is set to 0.

// **Summary of Reduce Method:**
// The reduce() method in JavaScript is used to reduce an array to a single value by executing a provided function for each element in the array.
// Syntax: array.reduce((accumulator, currentValue) => ..., initialValue)
// accumulator: Stores the accumulated result.
// currentValue: The current element being processed.
// initialValue: The initial value for the accumulator.

// **Key Points to Remember:**
// - Reduce is useful for operations like summing values, finding products, or combining results.
// - It can handle both numbers and objects within an array.
// - Initial value is important to set for consistent results.




// ✅ 3. reduce()
// - Reduces the array to a single value
// - Takes a callback with accumulator and current value

const values = [1, 2, 3, 4];

const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced (sum):", sum); // 10




// ✅ 3. every()
// - Returns true only if **all** elements satisfy the condition



const allAbove5 = numbers.every(num => num > 5);
console.log("Every (>5):", allAbove5); // true

const allAbove20 = numbers.every(num => num > 20);
console.log("Every (>20):", allAbove20); // false (10 is not > 20)



// ✅ 2. some()
// - Returns true if **at least one** element satisfies the condition

const hasLarge = numbers.some(num => num > 40);


console.log("Some (>40):", hasLarge); // true (because 45 is > 40)



// ✅ 1. find()
// - Returns the first element that satisfies the condition
// - Returns undefined if not found

const numbers = [10, 25, 30, 45];

const found = numbers.find(num => num > 20);
console.log("Found (>20):", found); // 25 (first match)





// ⚠️ Common Confusions Explained:

// 1️⃣ splice vs slice

// 🔹 slice(start, end) → Returns a shallow copy of a portion of the array
// ✅ Non-destructive (original array not changed)
let arr1 = [1, 2, 3, 4, 5];
let sliced = arr1.slice(1, 4); // [2, 3, 4]
console.log("Original after slice:", arr1); // [1, 2, 3, 4, 5]

// 🔹 splice(start, deleteCount, ...items) → Changes the array in place
// ✅ Destructive (modifies original array)
let arr2 = [1, 2, 3, 4, 5];
let spliced = arr2.splice(1, 2); // removes 2 elements from index 1 → [2, 3]
console.log("Original after splice:", arr2); // [1, 4, 5]


// 2️⃣ map vs forEach

// 🔹 map() → Transforms array and returns a **new array**
let nums = [1, 2, 3];
let doubled = nums.map(x => x * 2); // [2, 4, 6]

// 🔹 forEach() → Just iterates, does **not return** anything
let output = [];
nums.forEach(x => output.push(x * 2)); // [2, 4, 6]
console.log("Mapped:", doubled);     // [2, 4, 6]
console.log("ForEach Output:", output); // [2, 4, 6]


// 3️⃣ sort behavior without compareFn

// 🔹 sort() by default sorts as strings (lexicographically)
let mixed = [5, 100, 1, 20];
mixed.sort(); // incorrect: [1, 100, 20, 5]
console.log("Default sort:", mixed);

// 🔹 To fix numeric sorting, use compareFn
mixed.sort((a, b) => a - b); // correct: [1, 5, 20, 100]
console.log("Numeric sort:", mixed);




// ✅ 1️⃣ Destructuring
// 👉 Extract values from arrays or objects and assign them to variables

// Array destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// Object destructuring
const user = { name: "Rahul", age: 22 };
const { name, age } = user;
console.log(name, age); // Rahul 22



// ✅ 2️⃣ Spread Operator (...)
// 👉 Spreads elements of an array or properties of an object

// Array spread
const nums1 = [1, 2];
const nums2 = [3, 4];
const combined = [...nums1, ...nums2];
console.log("Combined:", combined); // [1, 2, 3, 4]

// Object spread
const user1 = { name: "Rahul", age: 22 };
const user2 = { ...user1, city: "Delhi" };
console.log(user2); // { name: "Rahul", age: 22, city: "Delhi" }
