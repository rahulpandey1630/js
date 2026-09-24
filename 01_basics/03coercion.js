/*========================================================================
                JAVASCRIPT TYPE CONVERSION & OPERATIONS GUIDE
===============================================================================

===============================================================================
                    PART 1: STRING TO NUMBER CONVERSION
===============================================================================

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

/*
===============================================================================
                        PART 2: FALSY VALUES
===============================================================================

/* falsy values= null , undefined , empty string("") , -0 , +0 ,NaN, false , document.all    
   cAn put !!before Any vAlue to check if itS FALSE */

/*FALSY VALUES IN JAVASCRIPT:
---------------------------
- null
- undefined
- empty string ("")
- -0 (negative zero)
- +0 (positive zero)
- NaN
- false
- document.all (browser-specific)

To check if a value is falsy, you can use !!before any value:
!!value → converts to boolean, true if truthy, false if falsy


===============================================================================
                    PART 3: STRING TO BOOLEAN CONVERSION
===============================================================================

let isLoggedIn = "hitesh";

// Convert string to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true because non-empty strings are truthy

// Examples:
// 1 => true; 0 => false
// "" => false (empty string is falsy)
// "hitesh" => true (non-empty string is truthy)

BOOLEAN CONVERSION RULES:
------------------------
Falsy values convert to FALSE:
- false
- 0
- ""
- null
- undefined
- NaN

Truthy values convert to TRUE:
- true
- any non-zero number (1, -1, 3.14, etc.)
- non-empty strings ("hello", "0", " ", etc.)
- objects and arrays (even empty ones [] and {})


===============================================================================
                    PART 4: TYPE COERCION IN JAVASCRIPT
===============================================================================

TYPE COERCION DEFINITION:
------------------------
It means JavaScript automatically converts one data type to another when needed


TYPE 1: IMPLICIT COERCION (done by JavaScript automatically)
-------------------------------------------------------------

✅ Implicit Coercion Examples:

console.log("5" + 2);      // "52" → number 2 is coerced to string → string concatenation
console.log("5" - 2);      // 3   → string "5" is coerced to number → subtraction
console.log(true + 1);     // 2   → true becomes 1
console.log(false + "1");  // "false1" → false becomes string
console.log(false + true); // 1
console.log(null + 1);     // 1 (0+1)


TYPE 2: EXPLICIT COERCION (done manually by developer)
------------------------------------------------------

✅ Explicit Coercion Examples:

let num = "123";
num = Number(num);         // converts string to number
console.log(typeof num);   // "number"

let val = 456;
val = String(val);         // converts number to string
console.log(typeof val);   // "string"


SUMMARY:
--------
// - Implicit coercion happens automatically during operations like +, -, *, ==
// - Explicit coercion is done using functions like Number(), String(), Boolean()
// - Be careful: coercion can lead to unexpected results

// 🔥 Tip: Use === instead of == to avoid unintended coercion

console.log("5" == 5);     // true → because of coercion
console.log("5" === 5);    // false → no coercion, checks type + value


===============================================================================
                    PART 5: NUMBER TO STRING CONVERSION
===============================================================================

let someNumber = 33;

// Convert number to string
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // "string"

// Alternative method:
// someNumber.toString();


===============================================================================
                    PART 6: BASIC ARITHMETIC OPERATIONS
===============================================================================

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


ARITHMETIC OPERATORS TABLE:
---------------------------
┌──────────┬──────────────────────────────────┬─────────────────┐
│ Operator │ Description                      │ Example         │
├──────────┼──────────────────────────────────┼─────────────────┤
│ +        │ Addition                         │ 2 + 2 = 4       │
│ -        │ Subtraction                      │ 2 - 2 = 0       │
│ *        │ Multiplication                   │ 2 * 2 = 4       │
│ /        │ Division                         │ 2 / 3 = 0.666   │
│ %        │ Modulo (remainder)               │ 2 % 3 = 2       │
│ **       │ Exponentiation                   │ 2 ** 3 = 8      │
│ -        │ Unary negation                   │ -value = -3     │
│ +        │ Unary plus (converts to number)  │ +"5" = 5        │
└──────────┴──────────────────────────────────┴─────────────────┘


===============================================================================
                    PART 7: STRING CONCATENATION
===============================================================================

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2; // Concatenation of strings
console.log(str3); // "hello hitesh"


===============================================================================
            PART 8: TYPE COERCION IN OPERATIONS (DETAILED)
===============================================================================

// Type coercion in operations
console.log("1" + 2); // "12" (number to string)
console.log(1 + "2"); // "12" (number to string)

// Left-to-right evaluation
console.log("1" + 2 + 2); // "122" (left-to-right evaluation: "1" + 2 = "12", then "12" + 2 = "122")
console.log(1 + 2 + "2"); // "32" (left-to-right evaluation: 1 + 2 = 3, then 3 + "2" = "32")

// Combined operations and precedence
console.log((3 + 4) * 5 % 3); // 2 (7 * 5 = 35, 35 % 3 = 2)

// Unary plus converts to number
console.log(+true); // 1
console.log(+""); // 0 (empty string to number)


OPERATOR PRECEDENCE NOTES:
--------------------------
- Parentheses () have highest precedence
- **, * , / , % have higher precedence than +, -
- + and - have left-to-right associativity
- Operations are evaluated based on precedence and associativity


===============================================================================
                    PART 9: CHAINED ASSIGNMENTS
===============================================================================

// Chained assignments
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All variables get the value 4

console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4

// In chained assignments, the rightmost value is assigned first,
// then that value is assigned to the next variable, and so on


===============================================================================
                    PART 10: INCREMENT OPERATIONS
===============================================================================

let gameCounter = 100;
++gameCounter; // Pre-increment: increments before use
console.log(gameCounter); // 101

// Pre-increment (++variable)
++gameCounter; // Increments the variable first, then uses it
let result = ++gameCounter; // result gets the incremented value

// Post-increment (variable++)
let result2 = gameCounter++; // result2 gets the old value, then gameCounter increments
console.log(result2); // gets the value BEFORE increment
console.log(gameCounter); // incremented value


INCREMENT OPERATORS:
-------------------
++variable (pre-increment)  → Increments first, then uses
variable++ (post-increment) → Uses first, then increments

--variable (pre-decrement)  → Decrements first, then uses
variable-- (post-decrement) → Uses first, then decrements


===============================================================================
                        PART 11: NaN (NOT-A-NUMBER)
===============================================================================

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


WHAT PRODUCES NaN:
------------------
Number("hitesh")     // NaN (non-numeric string)
0 / 0                // NaN (undefined result)
Math.sqrt(-1)        // NaN (no real square root of negative)
parseInt("abc")      // NaN (invalid number parse)
undefined + 5        // NaN (undefined in arithmetic)


CHECKING FOR NaN:
-----------------
// ❌ DON'T use: NaN === NaN (always false)
// ✅ DO use: Number.isNaN(value) or isNaN(value)

Number.isNaN(NaN);   // true
isNaN("abc");        // true (converts to number first)
Number.isNaN("abc"); // false (doesn't convert)


===============================================================================
                    PART 12: TYPE CONVERSION REFERENCE
===============================================================================

Let's study more about type conversion in JavaScript:
Link: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


STRING CONVERSION TABLE:
-----------------------
┌──────────────────┬────────────────────────────────────┐
│ Value            │ Converts To                        │
├──────────────────┼────────────────────────────────────┤
│ String("abc")    │ "abc"                              │
│ String(123)      │ "123"                              │
│ String(true)     │ "true"                             │
│ String(false)    │ "false"                            │
│ String(null)     │ "null"                             │
│ String(undefined)│ "undefined"                        │
│ String(NaN)      │ "NaN"                              │
└──────────────────┴────────────────────────────────────┘


NUMBER CONVERSION TABLE:
-----------------------
┌──────────────────┬────────────────────────────────────┐
│ Value            │ Converts To                        │
├──────────────────┼────────────────────────────────────┤
│ Number("33")     │ 33                                 │
│ Number("33abc")  │ NaN                                │
│ Number("abc")    │ NaN                                │
│ Number(true)     │ 1                                  │
│ Number(false)    │ 0                                  │
│ Number(null)     │ 0                                  │
│ Number("")       │ 0                                  │
│ Number(" ")      │ 0                                  │
│ Number(undefined)│ NaN                                │
│ Number(NaN)      │ NaN                                │
└──────────────────┴────────────────────────────────────┘


BOOLEAN CONVERSION TABLE:
------------------------
┌──────────────────┬────────────────────────────────────┐
│ Value            │ Converts To                        │
├──────────────────┼────────────────────────────────────┤
│ Boolean(0)       │ false                              │
│ Boolean(1)       │ true                               │
│ Boolean("")      │ false (empty string)               │
│ Boolean("abc")   │ true (non-empty string)            │
│ Boolean(null)    │ false                              │
│ Boolean(undefined)│ false                              │
│ Boolean(NaN)     │ false                              │
│ Boolean([])      │ true (even empty array)            │
│ Boolean({})      │ true (even empty object)           │
└──────────────────┴────────────────────────────────────┘


===============================================================================
                    PART 13: IMPLICIT COERCION RULES
===============================================================================

WHEN + OPERATOR IS USED:
------------------------
If one operand is a string, the other is converted to string and concatenated
console.log("5" + 2);    // "52" (2 becomes string)
console.log(2 + "5");    // "25" (2 first added, then "5" is string)

If both operands are numbers or non-strings, they are added numerically
console.log(5 + 2);      // 7
console.log(true + 1);   // 2 (true becomes 1)


WHEN -, *, /, % OPERATORS ARE USED:
-----------------------------------
Both operands are converted to numbers
console.log("5" - 2);    // 3 ("5" becomes 5)
console.log("10" * "2"); // 20 (both become numbers)
console.log("10" / "2"); // 5 (both become numbers)


WHEN == (LOOSE EQUALITY) IS USED:
---------------------------------
Coercion occurs to compare values
console.log("5" == 5);   // true (string "5" becomes number)
console.log(true == 1);  // true (true becomes 1)
console.log(null == undefined); // true (special case)


WHEN === (STRICT EQUALITY) IS USED:
-----------------------------------
No coercion occurs, type must match
console.log("5" === 5);  // false (string ≠ number)
console.log(true === 1); // false (boolean ≠ number)


===============================================================================
                    PART 14: COMMON COERCION PITFALLS
===============================================================================

PITFALL 1: String concatenation with +
-------
console.log("1" + 2 + 2);     // "122" (both 2s become strings)
console.log(1 + 2 + "2");     // "32" (result of 1+2 becomes string with "2")

FIX: Use parentheses to control order or convert explicitly
console.log(1 + 2 + String(2)); // "32"
console.log(Number("1") + 2 + 2); // 5


PITFALL 2: Loose equality with ==
-----
console.log("0" == false);    // true (unexpected!)
console.log([] == false);     // true (unexpected!)
console.log(null == 0);       // false (special case)

FIX: Always use === for comparisons
console.log("0" === false);   // false
console.log([] === false);    // false


PITFALL 3: NaN comparisons
-----
console.log(NaN === NaN);     // false (NaN is special)
console.log(NaN == NaN);      // false

FIX: Use Number.isNaN() or isNaN()
console.log(Number.isNaN(NaN)); // true


PITFALL 4: Falsy value confusion
-----
console.log("" == 0);        // true (empty string is falsy)
console.log("" === 0);       // false
console.log(null == 0);      // false (null is special)
console.log(undefined == 0); // false

FIX: Use strict equality and explicit checks
if (value === "" || value === 0) { ... }


===============================================================================
                        COMPREHENSIVE SUMMARY
===============================================================================

KEY CONVERSION FUNCTIONS:
┌──────────────────┬─────────────────────────────────────┐
│ Function         │ Purpose                             │
├──────────────────┼─────────────────────────────────────┤
│ Number()         │ Converts value to number            │
│ String()         │ Converts value to string            │
│ Boolean()        │ Converts value to boolean           │
│ parseInt()       │ Parses string to integer            │
│ parseFloat()     │ Parses string to decimal            │
│ toString()       │ Converts value to string            │
└──────────────────┴─────────────────────────────────────┘


COERCION TYPES:
┌──────────────────┬─────────────────────────────────────┐
│ Type             │ Example                             │
├──────────────────┼─────────────────────────────────────┤
│ Implicit/Automatic │ "5" + 2 = "52" (automatic)        │
│ Explicit/Manual  │ Number("5") = 5 (manual)            │
└──────────────────┴─────────────────────────────────────┘


IMPORTANT RULES:
┌─────────────────────────────────────────────────────────┐
│                                                         │
│ ✅ Use === instead of == to avoid coercion issues     │
│ ✅ Be explicit with type conversions                   │
│ ✅ Know your falsy values: false, 0, "", null,         │
│    undefined, NaN                                      │
│ ✅ Remember NaN is a number type but means invalid     │
│ ✅ Use Number.isNaN() to check for NaN                │
│ ✅ String concatenation with + always results in       │
│    string if any operand is string                     │
│ ✅ Arithmetic operators (-, *, /, %) convert to        │
│    numbers                                             │
│ ✅ Pre-increment (++) happens before use               │
│ ✅ Post-increment (++) happens after use               │
│                                                         │
└─────────────────────────────────────────────────────────┘

===============================================================================*/