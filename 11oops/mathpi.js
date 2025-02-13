// ------------------- Checking Math.PI Properties -------------------

// Get the property descriptor of Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
// Math.PI is a constant, so it cannot be modified.
/*In JavaScript, every property on an object has a set of attributes that define its behavior. 
These attributes are stored in a property descriptor object. The descriptor object contains the following keys:

value: The value associated with the property.
writable: Whether the property's value can be changed.
enumerable: Whether the property shows up during enumeration (e.g., in for...in loops or Object.keys()).
enumeration refers to the process of iterating over or listing the properties of an object
configurable: Whether the property can be deleted or its attributes can be modified.
*/ 

console.log(descripter);

// Display the value of Math.PI
console.log(Math.PI); // Output: 3.141592653589793

// Attempting to change Math.PI (This will not work because it's read-only)
Math.PI = 5;

// Check if Math.PI changed (It remains the same)
console.log(Math.PI); // Output: 3.141592653589793 (unchanged)

// ------------------- Object chai Definition & Property Modification -------------------

// Define an object named 'chai' with some properties
const chai = {
    name: 'ginger chai',   // Chai name
    price: 250,            // Chai price
    isAvailable: true,     // Availability status

    // Method to order chai
    orderChai: function() {
        console.log("chai nhi bni"); // Prints message if chai is not made
    }
}

// Get the descriptor of the 'name' property in chai
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// Output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }

// Modify the descriptor of the 'name' property in chai
Object.defineProperty(chai, 'name', {
    // writable: false, // Uncommenting this makes 'name' read-only
    enumerable: true,  // Ensures 'name' appears in loops like Object.entries()
});

// Get the updated descriptor of 'name'
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// Output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }

// ------------------- Looping Through Object Properties -------------------

// Iterate over the chai object's key-value pairs
for (let [key, value] of Object.entries(chai)) {
    // Exclude function properties from output
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        /* Output:
            name : ginger chai
            price : 250
            isAvailable : true
        */
    }
}

// --------------------------- SUMMARY ---------------------------
/*
1. **Checking Math.PI Properties**
   - Uses `Object.getOwnPropertyDescriptor()` to check attributes of `Math.PI`.
   - Confirms `Math.PI` is **read-only** and cannot be modified.

2. **Object chai Definition & Property Modification**
   - Defines an object with properties like `name`, `price`, and `isAvailable`.
   - Adds a method `orderChai()` that prints a message.
   - Modifies the property descriptor of `name` using `Object.defineProperty()`.

3. **Looping Through Object Properties**
   - Uses `Object.entries()` to iterate over object properties.
   - Skips function properties and prints key-value pairs.

--------------------------- DEFINITIONS ---------------------------
- **Property Descriptor**: Defines characteristics of an object’s property (writable, enumerable, configurable).
- **`Object.getOwnPropertyDescriptor()`**: Retrieves the property descriptor of an object’s property.
- **`Object.defineProperty()`**: Modifies the attributes of a property (e.g., making it read-only or hidden).
- **`enumerable: true/false`**: Determines if a property appears in loops.
- **`writable: true/false`**: Defines if a property’s value can be changed.
*/

