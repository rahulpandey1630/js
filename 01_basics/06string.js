/*===============================================================================
                    JAVASCRIPT STRINGS – CONCISE GUIDE
===============================================================================

STRINGS ARE IMMUTABLE
Strings cannot be changed after creation. Methods return new strings.


===============================================================================
                    TEMPLATE LITERALS & STRING BASICS
===============================================================================

const name = "Rahul";
const repoCount = 50;

// String interpolation with template literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


STRING INDEXING:
---------------
let firstName = "harshitdfjakldsfdf";
//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

console.log(firstName.length);              // Length of string
console.log(firstName[0]);                  // First character
console.log(firstName[firstName.length-1]); // Last character
console.log(firstName[firstName.length-2]); // Second to last


===============================================================================
                    STRING OBJECT & BASIC METHODS
===============================================================================

const gameName = new String('rahul-hc-com');

console.log(gameName[0]);           // 'r'
console.log(gameName.__proto__);    // String prototype
console.log(gameName.length);       // 12
console.log(gameName.toUpperCase()); // 'RAHUL-HC-COM'
console.log(gameName.toLowerCase()); // 'rahul-hc-com'


===============================================================================
                    ACCESSING CHARACTERS
===============================================================================

charAt(index)
console.log(gameName.charAt(2));    // 'h' (character at index 2)

indexOf(substring)
console.log(gameName.indexOf('t')); // 5 (first occurrence)

lastIndexOf(substring)
const s = "chhaya";
console.log(s.lastIndexOf('a'));   // 5 (last occurrence)


===============================================================================
                    SUBSTRING EXTRACTION
===============================================================================

substring(start, end)
- End index NOT included
- Negative values treated as 0

const newString = gameName.substring(0, 4); // 'rahu'
console.log(s.substring(0, 4));            // 'chha'

slice(start, end)
- End index NOT included
- Supports negative indices (from end)

const anotherString = gameName.slice(-8, 4); // '' (empty)
console.log(s.slice(0, 4));                 // 'chha'


===============================================================================
                    WHITESPACE & REPLACEMENT
===============================================================================

trim()
const newStringOne = "   rahul    ";
console.log(newStringOne.trim());   // 'rahul'
// trimStart() and trimEnd() also available

replace(old, new)
- Replaces FIRST occurrence only

const url = "https://rahul.com/rahul%20choudhary";
console.log(url.replace('%20', '-')); // 'https://rahul.com/rahul-choudhary'

url = "www.userid?20.com";
console.log(url.replace('20', '-'));  // 'www.userid?-com'


===============================================================================
                    SEARCH & VALIDATION
===============================================================================

includes(substring)
console.log(url.includes('sundar'));     // false
console.log(s.includes("Chha"));         // true
console.log(s.includes("shaya"));        // false

endsWith(substring)
console.log(s.endsWith("aya"));          // true

startsWith(substring)
console.log(s.startsWith("chh"));        // true


===============================================================================
                    SPLIT & CONCATENATION
===============================================================================

split(delimiter)
console.log(gameName.split('-'));        // ['rahul', 'hc', 'com']

let word = "Chhaya is Shanaya and she is a baby girl";
console.log(word.split(" "));
// ["Chhaya", "is", "Shanaya", "and", "she", "is", "a", "baby", "girl"]

concat(string)
name = "Shanaya";
console.log(name.concat(" Gupta"));      // 'Shanaya Gupta'
// Alternative: string1 + string2


===============================================================================
                    QUICK REFERENCE
===============================================================================

LENGTH PROPERTIES:
- length → number of characters
- lastIndexOf() → find position from end
- indexOf() → find position from start

CASE CONVERSION:
- toUpperCase()
- toLowerCase()

EXTRACTION:
- charAt(index)
- substring(start, end) → end NOT included, no negatives
- slice(start, end) → end NOT included, supports negatives
- substr(start, length) → deprecated

MANIPULATION:
- replace(old, new) → first occurrence only
- replaceAll() → all occurrences
- trim() → remove whitespace from both ends
- split(delimiter) → returns array
- concat(string) → join strings

SEARCH:
- includes() → boolean
- indexOf() → number
- lastIndexOf() → number
- startsWith() → boolean
- endsWith() → boolean


===============================================================================
                    KEY POINTS
===============================================================================

✅ Strings are immutable
✅ Methods return new strings, don't modify original
✅ Index is 0-based
✅ slice() supports negative indices, substring() doesn't
✅ substring() excludes end index
✅ replace() only changes first match (use replaceAll() for all)
✅ trim() removes whitespace only from ends, not middle
✅ split() returns an array

===============================================================================
*/