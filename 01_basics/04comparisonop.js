// Comparison operations
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Type coercion in comparison
// console.log("2" > 1);   // true ("2" is coerced to 2)
// console.log("02" > 1);  // true ("02" is coerced to 2)

console.log(null > 0);   // false (null is coerced to 0)
console.log(null == 0);  // false (null only equals undefined)
console.log(null >= 0);  // true (null is coerced to 0)

console.log(undefined == 0);  // false (undefined only equals null)
console.log(undefined > 0);   // false (undefined is NaN in comparisons)
console.log(undefined < 0);   // false (undefined is NaN in comparisons)

// Strict equality (no type coercion)
console.log("2" === 2);  // false (different types)

// '==' is the loose equality operator; it compares values after type conversion if needed.
// '===' is the strict equality operator; it compares both value and type without conversion.
// Example: '5' == 5 is true (type converted), but '5' === 5 is false (string !== number).


// '!=' is the loose inequality operator; it checks if values are not equal after type conversion.
// '!==' is the strict inequality operator; it checks if values or types are not equal without conversion.
// Example: '5' != 5 is false (types converted), but '5' !== 5 is true (string !== number).


// JavaScript has different types of operators: Arithmetic (+, -, *, /), Assignment (=, +=, -=), and Comparison (==, ===, <, >).
// Logical operators include && (AND), || (OR), and ! (NOT) for combining or inverting conditions.
// Other operators: typeof (type check), instanceof (instance check), and ternary (condition ? true : false).

