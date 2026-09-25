/*
===============================================================================
                  JAVASCRIPT ARRAY MANIPULATION – CONCISE GUIDE
===============================================================================

===============================================================================
                    COMBINING ARRAYS
===============================================================================

PUSH (Creates nested array):
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);     // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // "flash" (access nested element)

CONCAT (Merges arrays):
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

SPREAD OPERATOR (Merges arrays):
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

SPREAD with extra elements:
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const newArray = [...array1, ...array2, 89, 69];
console.log(newArray); // [1, 2, 3, 5, 6, 7, 89, 69]

SPREAD a string into array:
const newArray = [..."123456789"];
console.log(newArray); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']


===============================================================================
                    FLATTENING NESTED ARRAYS
===============================================================================

flat(depth) – Flatten nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

console.log(another_array.flat()); // Depth 1 (default)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]

console.log(another_array.flat(2)); // Depth 2
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(another_array.flat(Infinity)); // Flatten completely
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


===============================================================================
                    ARRAY CHECKING & CONVERSION
===============================================================================

Array.isArray() – Check if value is array
console.log(Array.isArray("Hitesh")); // false (string, not array)
console.log(Array.isArray([1, 2, 3])); // true

Array.from() – Convert iterable to array
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})); // [] (objects not iterable)

Array.of() – Create array from individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]


===============================================================================
                    QUICK REFERENCE
===============================================================================

COMBINING ARRAYS:
- push(array) → add as nested element (mutates)
- concat(array) → merge, returns new array
- [...array1, ...array2] → spread operator, merge

FLATTENING:
- flat() → flatten 1 level (default)
- flat(depth) → flatten to specified depth
- flat(Infinity) → flatten completely

CONVERSION:
- Array.isArray(value) → boolean check
- Array.from(iterable) → convert to array
- Array.of(values...) → create array from values

KEY DIFFERENCES:
✅ push() creates nested array
✅ concat() and spread merge arrays
✅ flat() removes nesting levels
✅ Array.from() converts iterables to arrays
✅ Array.of() creates array from arguments

===============================================================================
*/