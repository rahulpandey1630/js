/*
===============================================================================
                  JAVASCRIPT OBJECTS – PRACTICAL OPERATIONS
===============================================================================

===============================================================================
                    CREATING & MODIFYING OBJECTS
===============================================================================

Create empty object:
const tinderUser = {}; // Not singleton

Add properties:
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

Access properties:
console.log(tinderUser.name); // "Sammy"
console.log(tinderUser["id"]); // "123abc"

Modify properties:
tinderUser.name = "Raj";
tinderUser["isLoggedIn"] = true;

Add new property:
tinderUser.city = "Delhi";

Delete property:
delete tinderUser.isLoggedIn;


===============================================================================
                    NESTED OBJECTS
===============================================================================

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary"
    }
  }
};

Access nested values:
console.log(regularUser.fullname.userfullname.firstname); // hitesh

Optional chaining (safe access):
console.log(regularUser?.fullname?.userfullname?.firstname); // hitesh
console.log(regularUser?.age?.value); // undefined (no error)


===============================================================================
                    MERGING OBJECTS
===============================================================================

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

Wrong way (creates nested):
const wrong = { obj1, obj2 }; // { obj1: {...}, obj2: {...} }

Object.assign (shallow copy):
const merged = Object.assign({}, obj1, obj2, obj4);

Spread operator (modern):
const merged = { ...obj1, ...obj2, ...obj4 };
console.log(merged);
// { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" }


===============================================================================
                    LOOPING ARRAY OF OBJECTS
===============================================================================

const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "s@gmail.com" },
  { id: 3, email: "t@gmail.com" }
];

Loop and access properties:
for (let user of users) {
  console.log(user.email);
}

Access by index:
console.log(users[0].id); // 1
console.log(users[1].email); // s@gmail.com


===============================================================================
                    DESTRUCTURING WITH RENAMING
===============================================================================

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

Rename property:
const { courseInstructor: instructor } = course;
console.log(instructor); // hitesh


===============================================================================
                    NESTED DESTRUCTURING FROM ARRAY
===============================================================================

const usersS = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

Extract from specific array indices:
const [
  { firstName: user1FirstName, userId },  // 1st element
  ,                                        // Skip 2nd element
  { gender: user3gender }                  // 3rd element
] = usersS;

console.log(user1FirstName); // harshit
console.log(userId); // 1
console.log(user3gender); // male


===============================================================================
                    OBJECT METHODS: KEYS, VALUES, ENTRIES
===============================================================================

const tinderUser = { id: "123abc", name: "Sammy", isLoggedIn: false };

Get all keys:
console.log(Object.keys(tinderUser));
// ['id', 'name', 'isLoggedIn']

Get all values:
console.log(Object.values(tinderUser));
// ['123abc', 'Sammy', false]

Get key-value pairs:
console.log(Object.entries(tinderUser));
// [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

Check property exists:
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('age')); // false


===============================================================================
                    DESTRUCTURING WITH REST
===============================================================================

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

Extract specific properties, collect rest:
let { bandName, famousSong, ...restProps } = band;

console.log(bandName); // led zepplin
console.log(famousSong); // stairway to heaven
console.log(restProps);
// { year: 1968, anotherFamousSong: "kashmir" }


===============================================================================
                    OBJECTS WITH METHODS
===============================================================================

Method with function keyword:
const car = {
  brand: "Toyota",
  start: function() {
    console.log("Car has started");
  }
};

car.start(); // Car has started

Shorthand method syntax:
const car2 = {
  brand: "Honda",
  start() {
    console.log("Engine started");
  }
};

car2.start(); // Engine started

Method using 'this':
const student = {
  name: "Aman",
  marks: { math: 90, science: 95 },
  
  displayMarks() {
    console.log(`${this.name} - Math: ${this.marks.math}`);
  }
};

student.displayMarks();
// Aman - Math: 90


===============================================================================
                    for...in LOOP
===============================================================================

const user = {
  id: 101,
  name: "Sneha",
  role: "Admin"
};

Loop through all properties:
for (let key in user) {
  console.log(key, user[key]);
}

Output:
// id 101
// name Sneha
// role Admin


===============================================================================
                    DYNAMIC/COMPUTED KEYS
===============================================================================

Using bracket notation to assign:
const key1 = "objkey1";
const key2 = "objkey2";

const obj = {};
obj[key1] = "myvalue1";
obj[key2] = "myvalue2";

console.log(obj);
// { objkey1: 'myvalue1', objkey2: 'myvalue2' }

Using computed properties in literal:
const prefix = "user_";
const id = 123;

const obj = {
  [prefix + id]: "John",  // user_123: "John"
};

console.log(obj.user_123); // John

Dynamic key from expression:
const key = "email";
const user = {
  name: "Rahul",
  [key]: "rahul@example.com"
};

console.log(user.email); // rahul@example.com


===============================================================================
                    FILTERING ARRAY OF OBJECTS
===============================================================================

Get adult males from users array:
let usersArr = [
  { name: "Bharat", age: 21, gender: "male" },
  { name: "Priya", age: 22, gender: "female" },
  { name: "Rani", age: 15, gender: "female" },
  { name: "Deepak", age: 24, gender: "male" },
  { name: "Rahul", age: 17, gender: "male" },
];

function getAdultMales(users) {
  return users.filter(user => user.age > 18 && user.gender === "male");
}

console.log(getAdultMales(usersArr));
// [{ name: "Bharat", age: 21, gender: "male" },
//  { name: "Deepak", age: 24, gender: "male" }]


===============================================================================
                    SPREAD OPERATOR ON STRINGS
===============================================================================

Convert string to object with indexed keys:
const letters = { ..."abcdefg" };
console.log(letters);
// { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g' }

===============================================================================
*/