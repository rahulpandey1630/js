// Define arrays for Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Add the dc_heros array as a single element to marvel_heros
// This creates a nested array
// marvel_heros.push(dc_heros);

// Check the updated marvel_heros array and access the nested dc_heros
// console.log(marvel_heros);             // Outputs: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);       // Outputs: "flash"

// Concatenate marvel_heros and dc_heros into a single array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);                 // Outputs: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
  
// Use spread operator to merge marvel_heros and dc_heros into a new array
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);              // Outputs: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Define a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested array to a single level using Infinity depth(can give depth 1 2 )
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);         // Outputs: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if a value is an array
console.log(Array.isArray("Hitesh"));    // Outputs: false (since "Hitesh" is a string)
console.log(Array.from("Hitesh"));       // Converts a string to an array of characters: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})); // Interesting case: Outputs an empty array since the object is not iterable

// Create an array from individual  scores
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Outputs: [100, 200, 300]




// ----------- Spread Operator with Arrays -----------

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// Combine array1 and array2 with extra values using spread
// const newArray = [...array1, ...array2, 89, 69];
// console.log(newArray);
// Output: [1, 2, 3, 5, 6, 7, 89, 69]

// Spread a string into individual characters (each becomes an element in array)
const newArray = [..."123456789"];
console.log(newArray);
// Output: ['1', '2', '3', '4', '5', '6', '7', '8', '9']