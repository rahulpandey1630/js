// Creating an empty object using object literal notation
//const tinderUser = new Object{} //a singleton object
 const tinderUser = {} //not singleton object
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

// Accessing nested properties safely using optional chaining
//console.log(regularUser?.fullname?.userfullname?.firstname); // Outputs: "hitesh"
// If any property in the chain is undefined, it won't throw an error; it returns undefined instead.

// Merging objects using Object.assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Attempting to create a nested object with obj1 and obj2 as properties (incorrect approach) . same problem like array
// const obj3 = { obj1, obj2 }

// Correct way to merge objects using Object.assign
// const obj3 = Object.assign({}, obj1, obj2, obj4) assign(target,source) here {}is target .{} is a optional parameter, code will run without it also
 
// Merging objects using the spread operator (modern approach)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); // Outputs: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// ----------- Spread Operator with Objects -----------

// const obj1 = {
//   key1: "value1",   //there cnnot be SAME KEY MORE THAN ONE
//   key2: "value2",
// };

// const obj2 = {
//   key1: "valueUnique", // This key will be overwritten by obj1's key1 if spread later
//   key3: "value3",
//   key4: "value4",
// };

// // Merge obj2 and obj1 with an additional key
// // const newObject = { ...obj2, ...obj1, key69: "value69" };
// // console.log(newObject);
// /*
// Output:
// {
//   key1: "value1",       // comes from obj1 (overwrites obj2)
//   key3: "value3",
//   key4: "value4",
//   key2: "value2",
//   key69: "value69"
// }
// */

// // Spread an array into an object — indices become keys
// // const newObject = { ...["item1", "item2"] };
// // console.log(newObject);
// // Output: { 0: "item1", 1: "item2" }

// // Spread a string into an object — indices become keys, characters become values
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);
// /*
// Output:
// {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   3: 'd',
//   4: 'e',
//   5: 'f',
//   6: 'g',
//   7: 'h',
//   8: 'i',
//   9: 'j',
//   10: 'k',
//   11: 'l',
//   12: 'm',
//   13: 'n',
//   14: 'o',
//   15: 'p',
//   16: 'q',
//   17: 'r',
//   18: 's',
//   19: 't',
//   20: 'u',
//   21: 'v',
//   22: 'w',
//   23: 'x',
//   24: 'y',
//   25: 'z'
// }
// */

// An array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    { 
        id: 2, 
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "t@gmail.com"
    },
];

// Looping through each user object using for...of
for (let user of users) {
    // Print the email of each user
    console.log(user.email);
}

/*
✅ Output:
h@gmail.com
s@gmail.com
t@gmail.com
*/

// Accessing an element in the array of objects
// console.log(users[1].email); // Outputs: "s@gmail.com"

// An array of user objects
const usersS = [
    { userId: 1, firstName: 'harshit', gender: 'male' },
    { userId: 2, firstName: 'mohit', gender: 'male' },
    { userId: 3, firstName: 'nitish', gender: 'male' },
];

// Nested destructuring:
// - From the first object (index 0), extract 'firstName' as 'user1firstName' and 'userId'
// - Skip the second object (index 1) using a comma
// - From the third object (index 2), extract 'gender' as 'user3gender'
const [
  { firstName: user1firstName, userId }, // from first object
  ,                                      // skip second object
  { gender: user3gender }               // from third object
] = users;

console.log(user1firstName); // ✅ Output: "harshit"
console.log(userId);         // ✅ Output: 1
console.log(user3gender);    // ✅ Output: "male"



// Using Object methods to interact with object properties
// console.log(Object.keys(tinderUser)); // Outputs: ['id', 'name', 'isLoggedIn'] array form
// console.log(Object.values(tinderUser)); // Outputs: ['123abc', 'Sammy', false]
// console.log(Object.entries(tinderUser)); // Outputs: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// Checking if an object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outputs: true

// ----------- Object Destructuring with Renaming -----------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructuring and renaming 'courseInstructor' to 'instructor'
const { courseInstructor: instructor } = course;

// Trying to access 'courseInstructor' directly will give an error
// console.log(courseInstructor); // ❌ Error: courseInstructor is not defined

console.log(instructor); 
// ✅ Output: "hitesh"

// ----------- Object Destructuring with Rest Operator -----------

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

// Destructuring specific properties and collecting the rest
let { bandName, famousSong, ...restProps } = band;

console.log(bandName);     
// ✅ Output: "led zepplin"

console.log(restProps);    
/*
✅ Output:
{
  year: 1968,
  anotherFamousSong: "kashmir"
}
*/


// Example JSON-like structure for reference either object or arrays form
//  {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

// // Array of empty objects as an example
//  [
//     {},
//     {},
//     {}
// ]


//array of objects
//objects of objects



// 1. Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

// let users = [
//   {
//     name: "Bharat",
//     age: 21,
//     gender: "male",
//   },
//   {
//     name: "Priya",
//     age: 22,
//     gender: "female",
//   },
//   {
//     name: "Rani",
//     age: 15,
//     gender: "female",
//   },
//   {
//     name: "Deepak",
//     age: 24,
//     gender: "male",
//   },
//   {
//     name: "Rahul",
//     age: 17,
//     gender: "male",
//   },
// ];

// // define a function called `getUsers` that takes an array of users as an input
// function getUsers(users) {
//     // using filter method
//     // filter the users whose age > 18 and gender is male and store them in a new array
//     let filteredUsers = users.filter((user) => user.age > 18 && user.gender === "male");

//     // returns the filtered users
//     return filteredUsers;

//   /*
//   // using normal loop
//   // create an empty array to store the users whose age
//   let ans = [];

//   //  using for loop to iterate through the array of users
//   for (let i = 0; i < users.length; i++) {
//     // check if the age of the user is greater than 18 and gender is male
//     if (users[i].age > 18 && users[i].gender === "male") {
//       ans.push(users[i]);
//     }
//   }

//   return ans;
//   */
// }

// // calls the function `getUsers` with the array of users as an input
// let allUsers = getUsers(users);

// // prints the users whose age > 18 and
// console.log(allUsers);



// ✅ Creating an Object
const person = {
  name: "Rahul",        // 'name' is a key, "Rahul" is its value
  age: 25,              // 'age' is a key, 25 is its value
  isStudent: true       // 'isStudent' is a key, true is its value
};

// ✅ Accessing Object Properties
console.log(person.name);      // Access using dot notation => Output: "Rahul"
console.log(person["age"]);    // Access using bracket notation => Output: 25  //KEY ARE BY DEFAULT IN STRING THATS WHY ""

// ✅ Modifying Object Values
person.age = 26;               // Updates the 'age' key to 26
person["name"] = "Raj";        // Updates the 'name' key to "Raj"

// ✅ Adding New Properties
person.city = "Delhi";         // Adds a new key 'city' with value "Delhi"

// ✅ Deleting a Property
delete person.isStudent;       // Removes the 'isStudent' key from the object

// ✅ Nested Objects (Objects inside objects)
const student = {
  name: "Aman",                // Outer key
  marks: {                     // Nested object 'marks'
    math: 90,
    science: 95
  }
};

console.log(student.marks.math);   // Accessing nested value => Output: 90


// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);


// ✅ Object Methods (Functions inside objects)
const car = {
  brand: "Toyota",             // Key 'brand' with value "Toyota"
  start: function () {         // Method 'start'
    console.log("Car has started");
  }
};

car.start();                   // Calling the method => Output: Car has started

// ✅ Shorthand Method Syntax
const car2 = {
  brand: "Honda",              // Key 'brand'
  start() {                    // Shorthand method definition
    console.log("Engine started");
  }
};

car2.start();                  // Output: Engine started

// ✅ Looping through Object Properties using for...in
const user = {
  id: 101,
  name: "Sneha",
  role: "Admin"
};

for (let key in user) {
  console.log(key, user[key]); // Prints each key and its value
}


// We define two variable keys as strings
const key1 = "objkey1";
const key2 = "objkey2";

// We define two values
const value1 = "myvalue1";
const value2 = "myvalue2";

// ✅ Method 1: Creating an empty object and adding properties dynamically
const obj = {};

// We use square brackets [] to set keys using variables (computed properties)
obj[key1] = value1; // obj["objkey1"] = "myvalue1"
obj[key2] = value2; // obj["objkey2"] = "myvalue2"

// Output the final object
console.log(obj); 
// Output: { objkey1: 'myvalue1', objkey2: 'myvalue2' }



// ✅ Summary:
// - Objects store key-value pairs
// - Values can be accessed or modified
// - You can add/delete keys
// - Functions inside objects are called methods
// - Use for...in loop to iterate over properties
