const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//use map when you want to create a new array from existing database

// const newNums = myNumers
//                 .map((num) => {return num * 10} ) 
// map() - Creates a new array by applying a given function to each element of the original array.
// In the first map, each element is multiplied by 10.

//chaining done here , using multiple map and filter
const newNums2 = myNumers
                .map((num) => num * 10 )  // map() multiplies each element by 10
                // map() - Creates a new array by applying a given function again, here it adds 1 to each element.
                .map( (num) => num + 1)  // map() adds 1 to each element passsed by above map
                // filter() - Creates a new array by keeping elements that meet the condition (num >= 40).
                .filter( (num) => num >= 40)  // filter() keeps only elements >= 40

console.log(newNums2);  // Displays the final array after map and filter operations
//output 
/*
[
  41, 51,  61, 71,
    81, 91, 101
  ]
    */

//sort,map,filter,reduce,foreach all accepts a function

  // ✅ 1. map()
// - Transforms each element in the array
// - Returns a new array with the same length

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled); // [2, 4, 6, 8]



  // ✅ 2. filter()
// - Filters elements based on a condition
// - Returns a new array with only elements that pass the test

const mixed = [5, 12, 8, 130, 44];

const filtered = mixed.filter(num => num > 10);
console.log("Filtered (>10):", filtered); // [12, 130, 44]
