/*
===============================================================================
                    JAVASCRIPT ARRAY DESTRUCTURING – CONCISE GUIDE
===============================================================================

Array Destructuring: Extract values from arrays and assign to variables in one line.
Clean, simple syntax for unpacking array elements.


===============================================================================
                    BASIC DESTRUCTURING
===============================================================================

const fruits = ["apple", "mango", "banana"];

Simple destructuring (assign to variables):
const [a, b, c] = fruits;

console.log(a); // "apple"
console.log(b); // "mango"
console.log(c); // "banana"

⚠️ Undefined if array has fewer elements:
const [x, y, z] = ["apple", "mango"];
console.log(z); // undefined


===============================================================================
                    SKIPPING ELEMENTS
===============================================================================

Use commas to skip unwanted elements:
const [first, , third] = fruits;

console.log(first); // "apple"
console.log(third); // "banana"
// Middle element "mango" skipped using extra comma


Skip multiple:
const [, , third] = fruits; // Skip first two

Skip non-consecutive:
const [first, , , fourth] = [1, 2, 3, 4];


===============================================================================
                    DEFAULT VALUES
===============================================================================

Assign defaults for missing elements:
const [p, q, r = "guava"] = ["apple", "mango"];

console.log(p); // "apple"
console.log(q); // "mango"
console.log(r); // "guava" (default)

Multiple defaults:
const [a = 1, b = 2, c = 3] = [10];
console.log(a); // 10
console.log(b); // 2 (default)
console.log(c); // 3 (default)

Defaults with skipping:
const [x, , z = "default"] = ["first", "second"];
console.log(z); // "default"


===============================================================================
                    REST OPERATOR (...)
===============================================================================

Collect remaining elements into new array:
let myArray = [10, 20, 30, 40, 50];
let [myvar1, myvar2, ...myNewArray] = myArray;

console.log("myvar1:", myvar1); // 10
console.log("myvar2:", myvar2); // 20
console.log(myNewArray); // [30, 40, 50]

Rest with skipping:
const [first, , ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [3, 4, 5]

Rest always gets remaining:
const [a, ...rest] = [1];
console.log(rest); // []


===============================================================================
                    SWAPPING VARIABLES
===============================================================================

Swap two variables without temporary variable:
let x = 1;
let y = 2;

[x, y] = [y, x]; // Swap

console.log(x); // 2
console.log(y); // 1

Multiple swaps:
let a = 1, b = 2, c = 3;
[a, b, c] = [c, b, a];
console.log(a, b, c); // 3 2 1


===============================================================================
                    DESTRUCTURING FUNCTION RETURNS
===============================================================================

Function returning array:
function getCoordinates() {
    return [10, 20];
}

Destructure directly:
const [lat, long] = getCoordinates();

console.log(lat); // 10
console.log(long); // 20

With defaults:
function getData() {
    return [100];
}

const [value1, value2 = 200] = getData();
console.log(value1); // 100
console.log(value2); // 200 (default)


===============================================================================
                    NESTED DESTRUCTURING
===============================================================================

Extract from arrays within arrays:
const colors = ["red", ["green", "blue"]];

Nested destructuring:
const [primary, [secondary, tertiary]] = colors;

console.log(primary); // "red"
console.log(secondary); // "green"
console.log(tertiary); // "blue"

Skip nested values:
const [primary, [, tertiary]] = colors;
console.log(tertiary); // "blue"

Multiple levels:
const data = [1, [2, [3, [4, 5]]]];
const [a, [b, [c, [d, e]]]] = data;

console.log(a); // 1
console.log(e); // 5

Nested with defaults:
const [primary, [secondary = "default"]] = ["red"];
console.log(secondary); // "default"


===============================================================================
                    SWAPPING IN FUNCTIONS
===============================================================================

Swap parameters using destructuring:
function swap(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
    return arr;
}

const numbers = [5, 10];
console.log(swap(numbers)); // [10, 5]

Return swapped values:
function swapCoordinates([x, y]) {
    return [y, x];
}

console.log(swapCoordinates([10, 20])); // [20, 10]


===============================================================================
                    ARRAY DESTRUCTURING IN LOOPS
===============================================================================

Destructuring in for...of loop:
const pairs = [[1, 2], [3, 4], [5, 6]];

for (let [a, b] of pairs) {
    console.log(a, b);
}
// 1 2
// 3 4
// 5 6

With default values:
const data = [[1], [2, 3], [4, 5, 6]];

for (let [x, y = 0] of data) {
    console.log(x, y);
}
// 1 0
// 2 3
// 4 5


===============================================================================
                    PRACTICAL EXAMPLES
===============================================================================

EXAMPLE 1: Extract first and last elements
const arr = [1, 2, 3, 4, 5];
const [first, ...middle, last] = arr; // ❌ NOT VALID
// Rest must be last

Correct way:
const [first, ...rest] = arr;
const last = rest[rest.length - 1];

EXAMPLE 2: Get array slice using destructuring
const numbers = [10, 20, 30, 40, 50];
const [, , third, ...rest] = numbers;

console.log(third); // 30
console.log(rest); // [40, 50]

EXAMPLE 3: Function with array parameter
function displayPair([name, score]) {
    console.log(`${name}: ${score}`);
}

displayPair(["Alice", 95]); // Alice: 95

EXAMPLE 4: API response unpacking
function fetchUser() {
    return ["John", 25, "john@example.com"];
}

const [name, age, email] = fetchUser();

EXAMPLE 5: Merge arrays using destructuring
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]


===============================================================================
                    QUICK REFERENCE
===============================================================================

BASIC:
- const [a, b, c] = array → extract to variables
- const [a, , c] = array → skip middle element
- const [a = 1] = [] → default value

REST:
- const [a, ...rest] = array → collect remaining
- Rest must be last element
- Rest gets empty array if no remaining

SWAPPING:
- [x, y] = [y, x] → swap two variables

NESTED:
- const [a, [b, c]] = array → nested arrays
- const [a, [b = 5]] = array → nested with defaults

SKIPPING:
- [, , x] = arr → skip first two
- [a, , , d] = arr → skip middle elements

FUNCTIONS:
- function([a, b]) { ... } → destructure parameters
- const [x, y] = func() → destructure return value

LOOPS:
- for (let [a, b] of array) { ... } → loop with destructuring

COMMON PATTERNS:
- Swap: [x, y] = [y, x]
- Get first/rest: [first, ...rest] = arr
- API response: const [id, name, email] = response
- Nested data: const [a, [b, c]] = data
- Function args: function({ a, b }) { ... }

KEY POINTS:
✅ Undefined if array shorter than variables
✅ Default values prevent undefined
✅ Rest operator collects remaining elements
✅ Rest must be last in destructuring
✅ Can skip elements with commas
✅ Works with nested arrays
✅ Works with function parameters and returns
✅ Useful for swapping without temp variable

===============================================================================
*/