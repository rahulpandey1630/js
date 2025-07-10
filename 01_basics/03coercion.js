let score = "hitesh";

// Convert string to number
let valueInNumber = Number(score);
console.log(valueInNumber); // NaN because "hitesh" is not a numeric string but its typeof will be number

// Examples: using Number()
// "33" => 33
// "33abc" => NaN (non-numeric characters)
// true => 1; false => 0
// null => 0, " "=>0
// undefined => NaN
 /* falsy values= null , undefined , empty string("") , -0 , +0 ,NaN, false , document.all    . cAn put !!before Any vAlue to check if itS FALSE */
let isLoggedIn = "hitesh";

// Convert string to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true because non-empty strings are truthy

// Examples:
// 1 => true; 0 => false
// "" => false (empty string is falsy)
// "hitesh" => true (non-empty string is truthy)




// 🔹 Type Coercion in JavaScript:
// It means JavaScript automatically converts one data type to another when needed

// ✅ Implicit Coercion (done by JavaScript automatically)

console.log("5" + 2);      // "52" → number 2 is coerced to string → string concatenation
console.log("5" - 2);      // 3   → string "5" is coerced to number → subtraction
console.log(true + 1);     // 2   → true becomes 1
console.log(false + "1");  // "false1" → false becomes string
console.log(false + true); //1
console.log(null + 1); 1(0+1)
// ✅ Explicit Coercion (done manually by developer)

let num = "123";
num = Number(num);         // converts string to number
console.log(typeof num);   // "number"

let val = 456;
val = String(val);         // converts number to string
console.log(typeof val);   // "string"

// 🔁 Summary:
// - Implicit coercion happens automatically during operations like +, -, *, ==
// - Explicit coercion is done using functions like Number(), String(), Boolean()
// - Be careful: coercion can lead to unexpected results

// 🔥 Tip: Use === instead of == to avoid unintended coercion

console.log("5" == 5);     // true → because of coercion
console.log("5" === 5);    // false → no coercion, checks type + value



let someNumber = 33;

// Convert number to string
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // "string"
//someNumber.toString();

// *********************** Operations ***********************

let value = 3;
let negValue = -value; // Unary negation
console.log(negValue); // -3

// Basic arithmetic operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 (exponentiation)
console.log(2 / 3); // 0.666...
console.log(2 % 3); // 2 (remainder)

// String concatenation
let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2; // Concatenation of strings
console.log(str3); // "hello hitesh"

// Type coercion in operations
console.log("1" + 2); // "12" (number to string)
console.log(1 + "2"); // "12" (number to string)
console.log("1" + 2 + 2); // "122" (left-to-right evaluation: "1" + 2 = "12", then "12" + 2 = "122")
console.log(1 + 2 + "2"); // "32" (left-to-right evaluation: 1 + 2 = 3, then 3 + "2" = "32")

// Combined operations and precedence
console.log((3 + 4) * 5 % 3); // 2 (7 * 5 = 35, 35 % 3 = 2)

// Unary plus converts to number
console.log(+true); // 1
console.log(+""); // 0 (empty string to number)

// Chained assignments
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All variables get the value 4

let gameCounter = 100;
++gameCounter; // Pre-increment: increments before use
console.log(gameCounter); // 101

// Link to study more about type conversion in JavaScript:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



// ✅ typeof NaN === 'number'  → true
// 🔹 NaN stands for "Not-a-Number"
// 🔹 BUT it's still considered a special kind of number in JavaScript

// 🔍 Why?
// - NaN is a numeric value that represents an undefined or unrepresentable result (like 0/0 or Math.sqrt(-1))
// - According to the ECMAScript specification, NaN is part of the Number type

// ✅ Example:
console.log(typeof NaN); // "number"
console.log(NaN + 5);    // NaN → still a number operation, result is invalid
console.log(NaN === NaN); // false → NaN is the only value not equal to itself

// 🔁 Summary:
// - typeof NaN returns 'number' because NaN is a special value of the Number type
// - But it's used to indicate an invalid number result
