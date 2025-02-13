// ---------------------- ES6 Class Inheritance ----------------------

// Base class 'User'
class User {
    constructor(username) {
        this.username = username; // Assign username
    }

    // Method to log the username
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Derived class 'Teacher' that extends 'User'
class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Calls the constructor of the 'User' class
        this.email = email;       // Assign email
        this.password = password; // Assign password
    }

    // Method specific to 'Teacher' class
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating an instance of the 'Teacher' class
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe(); // Output: USERNAME is chai

// Creating an instance of the 'User' class
const masalaChai = new User("masalaChai");

masalaChai.logMe(); // Output: USERNAME is masalaChai

// Checking if 'chai' is an instance of 'User'
console.log(chai instanceof User); // Output: true

// Checking if 'chai' is an instance of 'Teacher'
console.log(chai instanceof Teacher); // Output: true

// Checking if 'masalaChai' is an instance of 'Teacher'
console.log(masalaChai instanceof Teacher); // Output: false

// Checking if 'masalaChai' is an instance of 'User'
console.log(masalaChai instanceof User); // Output: true


/* --------------------------- SUMMARY ---------------------------

1. **ES6 Class Inheritance**: The 'Teacher' class extends the 'User' class.
2. **super() Method**: Calls the parent class constructor when extending a class.
3. **Method Overriding**: The child class can define its own methods in addition to inherited ones.
4. **Instance Checking**: 'instanceof' checks if an object belongs to a specific class.
5. **Inheritance Benefits**: Code reuse and organized structure.

--------------------------- DEFINITIONS ---------------------------

- **Class**: A template for creating objects with shared properties and methods.
- **Inheritance**: A mechanism where a child class acquires properties from a parent class.
- **super()**: Calls the parent class constructor inside a child class.
- **instanceof**: Checks if an object is an instance of a specific class.

*/
