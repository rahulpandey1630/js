// ✅ Creating Objects: Singleton vs Not Singleton

// const tinderUser = new Object{} // ❌ Incorrect syntax
const tinderUser = {}; // Not singleton — object literal

// Adding properties
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// ✅ Nested Object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary"
    }
  }
};

// Accessing nested values
console.log(regularUser.fullname.userfullname.firstname);

// Optional chaining
console.log(regularUser?.fullname?.userfullname?.firstname); // Safe access


// ✅ Merging Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Wrong way (creates nested)
const wrongMerge = { obj1, obj2 };

// Using Object.assign (shallow copy)
const mergedAssign = Object.assign({}, obj1, obj2, obj4);

// Using spread operator (modern)
const mergedSpread = { ...obj1, ...obj2, ...obj4 };
console.log(mergedSpread);


// ✅ Spread Operator Tricks

const letters = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(letters); // Spread string → keys as indices

// Result: {0: 'a', 1: 'b', ..., 25: 'z'}


// ✅ Loop Through Array of Objects
const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "s@gmail.com" },
  { id: 3, email: "t@gmail.com" }
];

for (let user of users) {
  console.log(user.email);
}

// ✅ Nested Destructuring
const usersS = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [
  { firstName: user1firstName, userId },
  ,
  { gender: user3gender }
] = usersS;

console.log(user1firstName); // harshit
console.log(userId);         // 1
console.log(user3gender);    // male


// ✅ Object Methods: keys, values, entries, hasOwnProperty

console.log(Object.keys(tinderUser));      // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));    // ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser));   // [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// ✅ Object Destructuring with Renaming
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

const { courseInstructor: instructor } = course;
console.log(instructor); // hitesh


// ✅ Object Destructuring with Rest
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);     // led zepplin
console.log(restProps);    
// { year: 1968, anotherFamousSong: "kashmir" }


// ✅ JSON-like Structures
// Object:
// {
//   name: "hitesh",
//   coursename: "js in hindi",
//   price: "free"
// }

// Array of Objects:
// [ {}, {}, {} ]


// ✅ Filter Male Users > Age 18
let usersArr = [
  { name: "Bharat", age: 21, gender: "male" },
  { name: "Priya", age: 22, gender: "female" },
  { name: "Rani", age: 15, gender: "female" },
  { name: "Deepak", age: 24, gender: "male" },
  { name: "Rahul", age: 17, gender: "male" },
];

function getUsers(users) {
  return users.filter(user => user.age > 18 && user.gender === "male");
}

console.log(getUsers(usersArr));


// ✅ Object Basics
const person = {
  name: "Rahul",
  age: 25,
  isStudent: true
};

// Access & modify
console.log(person.name);        // "Rahul"
console.log(person["age"]);      // 25
person.age = 26;
person["name"] = "Raj";

// Add / delete
person.city = "Delhi";
delete person.isStudent;


// ✅ Nested Object Access
const student = {
  name: "Aman",
  marks: {
    math: 90,
    science: 95
  }
};

console.log(student.marks.math); // 90


// ✅ Object with Method
const car = {
  brand: "Toyota",
  start: function () {
    console.log("Car has started");
  }
};

car.start(); // Car has started

// ✅ Shorthand Method
const car2 = {
  brand: "Honda",
  start() {
    console.log("Engine started");
  }
};

car2.start(); // Engine started


// ✅ for...in Loop
const user = {
  id: 101,
  name: "Sneha",
  role: "Admin"
};

for (let key in user) {
  console.log(key, user[key]);
}


// ✅ Dynamic Keys (Computed Properties)
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj); // { objkey1: 'myvalue1', objkey2: 'myvalue2' }
