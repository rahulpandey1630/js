// Creating an empty object using object literal notation
// const tinderUser = new Object{} a singleton object
 const tinderUser = {} 
//  created object using literal

// Adding properties to the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Logging the object to the console
// console.log(tinderUser); // Outputs: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Creating a nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname); // Outputs: "hitesh"

// Merging objects using Object.assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Attempting to create a nested object with obj1 and obj2 as properties (incorrect approach)
// const obj3 = { obj1, obj2 }

// Correct way to merge objects using Object.assign
// const obj3 = Object.assign({}, obj1, obj2, obj4) assign(target,source) here {}is target

// Merging objects using the spread operator (modern approach)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); // Outputs: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,  // Changed id to be unique
        email: "s@gmail.com" // Changed email to be unique
    },
    {
        id: 3,  // Changed id to be unique
        email: "t@gmail.com" // Changed email to be unique
    },
]

// Accessing an element in the array of objects
// console.log(users[1].email); // Outputs: "s@gmail.com"

// Using Object methods to interact with object properties
// console.log(Object.keys(tinderUser)); // Outputs: ['id', 'name', 'isLoggedIn'] array form
// console.log(Object.values(tinderUser)); // Outputs: ['123abc', 'Sammy', false]
// console.log(Object.entries(tinderUser)); // Outputs: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// Checking if an object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outputs: true

// Destructuring an object to extract properties
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Extracting and renaming the variable
const {courseInstructor: instructor} = course
// console.log(courseInstructor); // Would throw an error because courseInstructor is not defined
console.log(instructor); // Outputs: "hitesh"

// Example JSON-like structure for reference
const exampleJson = {
    name: "hitesh",
    coursename: "js in hindi",
    price: "free"
}

// Array of empty objects as an example
const emptyObjectsArray = [
    {},
    {},
    {}
]
