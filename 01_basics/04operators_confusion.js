/**
 * JavaScript '+' Operator – COMPLETE ALL POSSIBLE CONFUSING CASES (FINAL NOTES)
 *
 * The '+' operator in JavaScript has TWO meanings:
 * 1. Numeric addition
 * 2. String concatenation
 *
 * GOLDEN RULE (MOST IMPORTANT):
 * - If ANY operand is or becomes a STRING → concatenation
 * - Otherwise → numeric addition
 *
 * JavaScript evaluates expressions LEFT TO RIGHT.
 *
 * ==================================================
 * + with Numbers
 *
 * 1 + 2            // 3
 * 10 + 20          // 30
 *
 * ==================================================
 * + with String
 *
 * "1" + 2          // "12"
 * 1 + "2"          // "12"
 * "a" + "b"        // "ab"
 * "a" + 1 + 2      // "a12"
 * 1 + 2 + "a"      // "3a"
 *
 * ==================================================
 * + with Boolean
 *
 * true + 1         // 2   (true → 1)
 * false + 1        // 1   (false → 0)
 * true + false     // 1
 * true + "1"       // "true1"
 *
 * ==================================================
 * + with null
 *
 * null + 1         // 1   (null → 0)
 * 1 + null         // 1
 * null + null      // 0
 *
 * --------------------------------------------------
 * null with String
 *
 * null + "a"       // "nulla"
 * "a" + null       // "anull"
 *
 * ==================================================
 * + with undefined
 *
 * undefined + 1    // NaN
 * 1 + undefined    // NaN
 * undefined + null // NaN
 *
 * --------------------------------------------------
 * undefined with String
 *
 * undefined + "a"  // "undefineda"
 * "a" + undefined  // "aundefined"
 *
 * ==================================================
 * null + undefined
 *
 * null + undefined // NaN
 *
 * Explanation:
 * null → 0
 * undefined → NaN
 * 0 + NaN = NaN
 *
 * ==================================================
 * + with NaN
 *
 * NaN + 1          // NaN
 * NaN + NaN        // NaN
 * NaN + "a"        // "NaNa"
 *
 * ==================================================
 * + with Object
 *
 * {} + {}          // "[object Object][object Object]"
 * {} + 1           // "[object Object]1"
 * 1 + {}           // "1[object Object]"
 *
 * Explanation:
 * - Objects are converted using toString()
 * - Default object → "[object Object]"
 *
 * ==================================================
 * + with Object + Object (More Cases)
 *
 * const a = {};
 * const b = {};
 * a + b            // "[object Object][object Object]"
 *
 * ==================================================
 * + with Object and null
 *
 * {} + null        // "[object Object]null"
 * null + {}        // "null[object Object]"
 *
 * ==================================================
 * + with Object and undefined
 *
 * {} + undefined   // "[object Object]undefined"
 * undefined + {}   // "undefined[object Object]"
 *
 * ==================================================
 * + with Object and NaN
 *
 * {} + NaN         // "[object Object]NaN"
 * NaN + {}         // "NaN[object Object]"
 *
 * ==================================================
 * + with Array
 *
 * [] + []          // ""
 * [1] + [2]        // "12"
 * [1,2] + [3,4]    // "1,23,4"
 * [] + 1           // "1"
 * 1 + []           // "1"
 *
 * --------------------------------------------------
 * Array with Object
 *
 * [] + {}          // "[object Object]"
 * {} + []          // 0   (treated as block in console)
 *
 * ==================================================
 * + with Character
 *
 * 'a' + 1          // "a1"
 * 'a' + 'b'        // "ab"
 *
 * ==================================================
 * IMPORTANT CONVERSION SUMMARY
 *
 * - String dominates everything
 * - Object → toString()
 * - Array → join(",")
 * - true → 1
 * - false → 0
 * - null → 0
 * - undefined → NaN (numeric context)
 *
 * ==================================================
 * COMMON INTERVIEW TRAPS
 *
 * typeof null        // "object" (JS bug)
 * typeof undefined   // "undefined"
 * null == undefined  // true
 * null === undefined // false
 *
 * ==================================================
 * FINAL EXAM ONE-LINER
 *
 * The '+' operator performs string concatenation if any operand
 * becomes a string; otherwise it performs numeric addition with
 * implicit type coercion.
 */







/**
 * JavaScript '-' (Minus) Operator – COMPLETE ALL CONFUSING CASES (FINAL NOTES)
 *
 * IMPORTANT RULE (VERY IMPORTANT):
 * - The '-' operator ONLY performs NUMERIC subtraction
 * - It NEVER does string concatenation
 * - JavaScript ALWAYS tries to convert operands to NUMBERS
 *
 * ==================================================
 * - with Numbers
 *
 * 5 - 2            // 3
 * 10 - 20          // -10
 * 0 - 5            // -5
 *
 * ==================================================
 * - with String (Numeric Strings)
 *
 * "5" - 2          // 3
 * 10 - "2"         // 8
 * "10" - "3"       // 7
 *
 * Reason:
 * - Strings are converted to numbers
 *
 * ==================================================
 * - with String (Non-numeric)
 *
 * "a" - 1          // NaN
 * "abc" - 2        // NaN
 *
 * ==================================================
 * - with Boolean
 *
 * true - 1         // 0   (true → 1)
 * false - 1        // -1  (false → 0)
 * true - false     // 1
 *
 * ==================================================
 * - with null
 *
 * null - 1         // -1  (null → 0)
 * 1 - null         // 1
 * null - null      // 0
 *
 * ==================================================
 * - with undefined
 *
 * undefined - 1    // NaN
 * 1 - undefined    // NaN
 * undefined - null // NaN
 *
 * ==================================================
 * - with NaN
 *
 * NaN - 1          // NaN
 * 1 - NaN          // NaN
 * NaN - NaN        // NaN
 *
 * ==================================================
 * - with Object
 *
 * {} - 1           // NaN
 * 1 - {}           // NaN
 * {} - {}          // NaN
 *
 * Explanation:
 * - Objects are converted to primitives
 * - Default object → NaN in numeric context
 *
 * ==================================================
 * - with Object and null
 *
 * {} - null        // NaN
 * null - {}        // NaN
 *
 * ==================================================
 * - with Object and undefined
 *
 * {} - undefined   // NaN
 * undefined - {}   // NaN
 *
 * ==================================================
 * - with Object and NaN
 *
 * {} - NaN         // NaN
 * NaN - {}         // NaN
 *
 * ==================================================
 * - with Array
 *
 * [] - 1           // -1   ([] → 0)
 * [5] - 1          // 4
 * [1] - [1]        // 0
 * [1,2] - 1        // NaN
 * [] - []          // 0
 *
 * ==================================================
 * - with Array and null
 *
 * [] - null        // 0    ([] → 0, null → 0)
 * null - []        // 0
 *
 * ==================================================
 * - with Array and undefined
 *
 * [] - undefined   // NaN
 * undefined - []   // NaN
 *
 * ==================================================
 * - with Character
 *
 * 'a' - 1          // NaN
 * '5' - 1          // 4
 * '5' - '2'        // 3
 *
 * ==================================================
 * IMPORTANT CONVERSION SUMMARY
 *
 * - '-' always forces numeric conversion
 * - String → number (if possible)
 * - true → 1
 * - false → 0
 * - null → 0
 * - undefined → NaN
 * - Object → NaN
 * - Array → number if single element, else NaN
 *
 * ==================================================
 * FINAL EXAM ONE-LINER
 *
 * The '-' operator always performs numeric subtraction and
 * converts operands to numbers; it never performs concatenation.
 */




/**
 * JavaScript Arithmetic Operators – UNUSUAL / CONFUSING CASES (*, /, %, ^)
 *
 * IMPORTANT:
 * - *, /, % ALWAYS force NUMERIC conversion
 * - NO string concatenation happens with these operators
 * - '^' is NOT power in JavaScript (it is BITWISE XOR)
 *
 * ==================================================
 * MULTIPLICATION (*)
 *
 * "5" * 2            // 10
 * 2 * "5"            // 10
 * "5" * "2"          // 10
 * "a" * 2            // NaN
 *
 * true * 2           // 2   (true → 1)
 * false * 2          // 0   (false → 0)
 *
 * null * 5           // 0   (null → 0)
 * undefined * 5      // NaN
 *
 * [] * 2             // 0   ([] → 0)
 * [5] * 2            // 10
 * [1,2] * 2          // NaN
 *
 * {} * 2             // NaN
 *
 * ==================================================
 * DIVISION (/)
 *
 * 10 / 2             // 5
 * "10" / "2"         // 5
 *
 * 5 / 0              // Infinity
 * -5 / 0             // -Infinity
 * 0 / 0              // NaN
 *
 * null / 5           // 0
 * 5 / null           // Infinity (5 / 0)
 *
 * undefined / 5      // NaN
 *
 * [] / 2             // 0
 * [10] / 2           // 5
 * {} / 2             // NaN
 *
 * ==================================================
 * MODULUS (%)
 *
 * 10 % 3             // 1
 * "10" % "3"         // 1
 *
 * 5 % 0              // NaN
 * 0 % 5              // 0
 *
 * null % 5           // 0
 * 5 % null           // NaN
 *
 * undefined % 5      // NaN
 *
 * [] % 2             // 0
 * [5] % 2            // 1
 * {} % 2             // NaN
 *
 * ==================================================
 * BITWISE XOR (^)  ❗ VERY IMPORTANT ❗
 *
 * '^' is NOT exponentiation in JavaScript.
 * It performs BITWISE XOR.
 *
 * 5 ^ 3              // 6
 * Explanation:
 * 5  -> 101
 * 3  -> 011
 * XOR -> 110 (6)
 *
 * true ^ false       // 1
 * true ^ true        // 0
 *
 * "5" ^ 1            // 4   ("5" → 5)
 * null ^ 1           // 1   (null → 0)
 *
 * ==================================================
 * POWER (EXPONENTIATION)
 *
 * JavaScript uses '**' for power.
 *
 * 2 ** 3             // 8
 * "2" ** "3"         // 8
 * null ** 2          // 0
 * undefined ** 2     // NaN
 *
 * ==================================================
 * IMPORTANT CONVERSION SUMMARY
 *
 * - *, /, % → ALWAYS numeric
 * - String → number (if possible)
 * - true → 1
 * - false → 0
 * - null → 0
 * - undefined → NaN
 * - Object → NaN
 * - Array → number if single element, else NaN
 *
 * ==================================================
 * COMMON INTERVIEW TRAPS
 *
 * 2 ^ 3      // 1 ❌ (NOT power)
 * 2 ** 3     // 8 ✅
 *
 * 5 / 0      // Infinity
 * 0 / 0      // NaN
 *
 * ==================================================
 * FINAL EXAM ONE-LINER
 *
 * In JavaScript, *, /, and % always perform numeric operations,
 * '^' is bitwise XOR (not power), and '**' is used for exponentiation.
 */
