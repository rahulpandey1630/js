/*
===============================================================================
                        JAVASCRIPT ARRAYS – CONCISE GUIDE
===============================================================================

Arrays are collections of multiple values under a single variable.
- Zero-indexed
- Resizable
- Can hold mixed data types
- typeof returns "object" (arrays are special objects)
- Use const for array variables

===============================================================================
                    ARRAY CREATION
===============================================================================

Array literal:
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

Mixed data types:
let mixed = [1, 2, 2.3, "string", null, undefined];

Array constructor:
const myArr2 = new Array(1, 2, 3, 4);

Check if variable is array:
Array.isArray(fruits); // true or false


===============================================================================
                    ADDING & REMOVING ELEMENTS
===============================================================================

push() – Add to end
myArr.push(6);
myArr.push(7);

pop() – Remove from end
myArr.pop();

unshift() – Add to beginning (slow for large arrays)
myArr.unshift(9);

shift() – Remove from beginning
myArr.shift();


===============================================================================
                    SEARCH METHODS
===============================================================================

includes() – Check if element exists
myArr.includes(9); // true or false

indexOf() – Get index of element
myArr.indexOf(3); // Returns index or -1 if not found


===============================================================================
                    JOIN
===============================================================================

join() – Convert array to string
const newArr = myArr.join(); // Joins with commas: "0,1,2,3,4,5"
const newArr = myArr.join('-'); // Joins with '-': "0-1-2-3-4-5"


===============================================================================
                    SLICE vs SPLICE
===============================================================================

SLICE (Non-mutating):
Returns shallow copy, doesn't modify original

const myArr = [0, 1, 2, 3, 4, 5];
const myn1 = myArr.slice(1, 3); // [1, 2] (3 not included)
console.log(myArr); // [0, 1, 2, 3, 4, 5] (unchanged)

SPLICE (Mutating):
Modifies original array, can remove and insert

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting at index 1
console.log(myArr); // [0, 4, 5] (modified)
console.log(myn2); // [1, 2, 3] (removed elements)

SPLICE with insertion:
const colors = ["green", "yellow", "black"];
colors.splice(1, 0, "red", "blue"); // Remove 0, insert "red", "blue" at index 1
console.log(colors); // ["green", "red", "blue", "yellow", "black"]


===============================================================================
                    REVERSE
===============================================================================

reverse() – Reverse array in place
let arr = [10, 20, 30, 40];
arr.reverse(); // [40, 30, 20, 10] (modifies original)


===============================================================================
                    SORT
===============================================================================

DEFAULT SORT (Lexicographic/ASCII):
⚠️ Converts to strings and sorts alphabetically
let nums = [5, 100, 20];
nums.sort(); // [100, 20, 5] ❌ WRONG for numbers!

NUMERIC SORT (Ascending):
let numsAsc = [5, 100, 20];
numsAsc.sort((a, b) => a - b); // [5, 20, 100] ✅

NUMERIC SORT (Descending):
let numsDesc = [5, 100, 20];
numsDesc.sort((a, b) => b - a); // [100, 20, 5] ✅

Sort then reverse:
let mixArr = [4, 1, 7, 3];
mixArr.sort((a, b) => a - b); // [1, 3, 4, 7]
mixArr.reverse(); // [7, 4, 3, 1]


===============================================================================
                    QUICK REFERENCE
===============================================================================

ADDING/REMOVING:
- push(element) → add to end (mutates)
- pop() → remove from end (mutates)
- unshift(element) → add to start (mutates, slow)
- shift() → remove from start (mutates)

SEARCH:
- includes(element) → boolean
- indexOf(element) → index or -1

CONVERSION:
- join(delimiter) → string

MANIPULATION:
- slice(start, end) → shallow copy, no mutation
- splice(start, deleteCount, items...) → remove/insert, mutates
- reverse() → reverse in place, mutates
- sort() → sort in place, mutates (default: ASCII)
- sort((a, b) => a - b) → numeric ascending, mutates
- sort((a, b) => b - a) → numeric descending, mutates

CHECK:
- Array.isArray(variable) → boolean

KEY POINTS:
✅ const works with arrays (reference is constant, contents can change)
✅ slice() doesn't modify original
✅ splice() modifies original and returns removed elements
✅ Default sort() is lexicographic, use comparator for numbers
✅ unshift() and shift() are slow for large arrays

===============================================================================
*/