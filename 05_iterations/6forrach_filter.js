// An array of programming languages
// The 'forEach' method iterates over each item in the array but doesn't return anything
// If you try to return a value from 'forEach', it will be ignored.
const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // The return value here does not get saved or affect the output of 'forEach'
//     return item // This return is ignored
// } )
// console.log(values); // 'values' will be undefined because 'forEach' doesn't return anything

// The 'filter' method creates a new array with all elements that pass the condition specified in the callback function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using 'filter' to create a new array of numbers greater than 4
const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

// The 'forEach' method executes a provided function once for each array element but does not return a new array.
// Using 'forEach' to push numbers greater than 4 into 'newNums'
const newNums2 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

console.log(newNums2); // Output: [5, 6, 7, 8, 9, 10]


// Array of books, each with properties like 'title', 'genre', 'publish' year, and 'edition' year
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// 'filter' is used to create a new array with books that have 'History' as the genre
let userBooks = books.filter((bk) => bk.genre === 'History')

// 'filter' is used again to filter books with 'History' genre and publish year >= 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks); 
// Output: 
// [
//    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
// ]


// Concepts Explanation:
// 1. **'forEach' method**: Iterates over an array and performs a provided function for each element, but does not return anything. It is useful for side-effects (like logging, modifying external variables).
// 2. **'filter' method**: Creates a new array with all elements that pass the condition specified in the callback. It is useful when you need to create a new array with a subset of elements based on a condition.
// 3. **Callback functions**: Functions passed as arguments to other functions like 'forEach' or 'filter'. The function is called during the execution of these higher-order methods to handle the data.
// 4. **Arrow functions**: Shorter syntax for writing functions. Used in callbacks for cleaner, more concise code. 

// Summary of outputs:
// - The output of the first 'console.log(newNums)' is [5, 6, 7, 8, 9, 10], an array of numbers greater than 4.
// - The output of the second 'console.log(newNums2)' is [5, 6, 7, 8, 9, 10], the same result as the previous one, but using 'forEach'.
// - The final 'console.log(userBooks)' prints the filtered books from the 'History' genre with a publish year >= 1995, resulting in only 'Book Three' being displayed.
