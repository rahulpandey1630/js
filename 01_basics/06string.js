const name = "Rahul";
const repoCount = 50;

// Using template literals for string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul-hc-com');

// Accessing characters and properties of a string object
// console.log(gameName[0]);          // Outputs: 'r'
// console.log(gameName.__proto__);   // Outputs: String prototype object

// Getting the length of the string
// console.log(gameName.length);      // Outputs: 12

// Converting the string to uppercase
// console.log(gameName.toUpperCase()); // Outputs: 'RAHUL-HC-COM'

// Getting the character at a specific index
console.log(gameName.charAt(2));    // Outputs: 'h'

// Finding the index of the first occurrence of a character
console.log(gameName.indexOf('t')); // Outputs: 5

// Extracting a substring from the string
const newString = gameName.substring(0, 4);
console.log(newString);             // Outputs: 'rahu'

// Using slice with negative index
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);         // Outputs: '' (incorrect usage)

// Removing whitespace from both ends of the string
const newStringOne = "   rahul    ";
console.log(newStringOne);          // Outputs: '   rahul    '
console.log(newStringOne.trim());   // trim start and trim rnd is also there Outputs: 'rahul'

// Replacing a substring within a string
const url = "https://rahul.com/rahul%20choudhary";
console.log(url.replace('%20', '-')); // Outputs: 'https://rahul.com/rahul-choudhary'

// Checking if a substring is present within the string
console.log(url.includes('sundar'));  // Outputs: false

// Splitting a string into an array using a delimiter
console.log(gameName.split('-'));     // Outputs: ['rahul', 'hc', 'com']

// Additional String Operations
const s="chhaya";
// Converting to lowercase
console.log(s.toLowerCase());         // Outputs: "chhaya"

// Converting to uppercase
console.log(s.toUpperCase());         // Outputs: "CHHAYA"

// Finding index of first occurrence of 'y'
console.log(s.indexOf('y'));          // Outputs: 4

// Finding index of last occurrence of 'a'
console.log(s.lastIndexOf('a'));      // Outputs: 5

// Getting length of the string
console.log(s.length);                // Outputs: 6

// Extracting substring from index 0 to 3 (excluding 4)
console.log(s.slice(0, 4));           // Outputs: "Chha"

// Extracting substring from index 0 to 3 (excluding 4)
console.log(s.substring(0, 4));       // Outputs: "Chha"
// Note: Similar to slice, but does not accept negative indices

// Getting character at index 1
console.log(s.charAt(1));             // Outputs: "h"

// Checking if the string includes "Chha"
console.log(s.includes("Chha"));      // Outputs: true

// Checking if the string includes "shaya"
console.log(s.includes("shaya"));     // Outputs: false

// Checking if the string ends with "aya"
console.log(s.endsWith("aya"));       // Outputs: true

// URL manipulation example
url = "www.userid?20.com";
// Replacing '20' with '-'
console.log(url.replace('20', '-'));  // Outputs: "www.userid?-com"

// Splitting a string into an array of words
let word = "Chhaya is Shanaya and she is a baby girl";
// Splitting by space
console.log(word.split(" "));  
// Outputs: ["Chhaya", "is", "Shanaya", "and", "she", "is", "a", "baby", "girl"]

// Concatenating strings
name = "Shanaya";
console.log(name.concat(" Gupta"));   // Outputs: "Shanaya Gupta"

// Removing whitespace from both ends
let remSpace = "  good bye guys  ";
console.log(remSpace.trim());         // Outputs: "good bye guys"
