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
