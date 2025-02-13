// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); 
// This will throw an error because the 'trueLength' method is not yet defined for String.

// Creating an array of superheroes
let myHeros = ["thor", "spiderman"];
 
// Defining an object with hero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};
 
// Adding a method to the Object prototype (will be available in all objects)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
};

// Adding a method to the Array prototype (only available to arrays)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
};

// Calling the custom prototype methods
// heroPower.hitesh();  // Output: hitesh is present in all objects
// myHeros.hitesh();    // Output: hitesh is present in all objects
// myHeros.heyHitesh(); // Output: Hitesh says hello
// heroPower.heyHitesh(); // Error: heyHitesh is not defined for objects, only for arrays
//if we deine but objects it can be used for array as arrays are objects

// ---------------------- INHERITANCE ----------------------

// Base object 'User' with common properties
const User = {
    name: "chai",
    email: "chai@google.com"
};

// Another object with additional properties
const Teacher = {
    makeVideo: true
};

// Another object representing Teaching Support
const TeachingSupport = {
    isAvailable: false
};

// Another object inheriting from 'TeachingSupport'
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // Setting prototype inheritance
};

// Setting prototype of 'Teacher' to inherit properties from 'User'
Teacher.__proto__ = User;

// Modern syntax for setting prototype inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

//Object.setPrototypeOf() is a method in JavaScript that allows you to set the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null. This method is part of the ECMAScript 6 (ES6) standard.

Syntax:

//Object.setPrototypeOf(obj, prototype);
//obj: The object whose prototype is to be set.

//prototype: The new prototype (an object or null).

//Example:
let animal = {
  speak() {
    console.log("Animal sound");
  }
};

let dog = {
  bark() {
    console.log("Woof!");
  }
};

// Set the prototype of 'dog' to 'animal'
Object.setPrototypeOf(dog, animal);

dog.speak(); // Output: "Animal sound"
dog.bark();  // Output: "Woof!"
//In this example, dog inherits the speak method from animal because animal is set as the prototype of dog.



// ---------------------- PROTOTYPE EXTENSION FOR STRINGS ----------------------

// Defining a custom method to calculate the true length of a string
String.prototype.trueLength = function(){
    console.log(`${this}`);  // Prints the string itself
    console.log(`True length is: ${this.trim().length}`);  // Trims and calculates actual length
};

// Calling the trueLength method on different strings
let anotherUsername = "ChaiAurCode     ";
anotherUsername.trueLength(); // Output: ChaiAurCode, True length is: 11

"hitesh".trueLength();  // Output: hitesh, True length is: 6
"iceTea".trueLength();  // Output: iceTea, True length is: 6


/* --------------------------- SUMMARY ---------------------------

1. **Prototypes** allow objects to inherit properties and methods.
2. **Prototype methods** can be added to built-in objects like Array, Object, and String.
3. **Object Inheritance** can be set using `__proto__` or `Object.setPrototypeOf()`.
4. **Custom prototype methods** can be created for specific object types, e.g., Arrays, Strings.
5. **Trimmed string length** is calculated using `.trim().length`.

--------------------------- DEFINITIONS ---------------------------

- **Prototype**: A blueprint allowing objects to share properties and methods.
- **Inheritance**: Mechanism where objects inherit properties from other objects.
- **Object.setPrototypeOf()**: Modern way to set an object's prototype.

*/
 