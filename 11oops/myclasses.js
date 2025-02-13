// ---------------------- ES6 Class Implementation ----------------------

class User {
    constructor(username, email, password) {
        this.username = username; // Assign username
        this.email = email;       // Assign email
        this.password = password; // Assign password
    }

    // Method to encrypt the password by appending 'abc'
    encryptPassword() {
        return `${this.password}abc`;
    }

    // Method to return the username in uppercase
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// Creating an instance of the User class
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());  // Output: 123abc
console.log(chai.changeUsername());   // Output: CHAI

// ---------------------- Behind the Scenes (Prototype-based Implementation) ----------------------

// Function constructor method to create user objects
function User(username, email, password) {
    this.username = username; // Assign username
    this.email = email;       // Assign email
    this.password = password; // Assign password
}

// Adding methods to the prototype for memory efficiency
User.prototype.encryptPassword = function() {
    return `${this.password}abc`; // Appends 'abc' to the password
};

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`; // Converts username to uppercase
};

// Creating an instance using the constructor function
const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());  // Output: 123abc
console.log(tea.changeUsername());   // Output: TEA


/* --------------------------- SUMMARY ---------------------------

1. **ES6 Class**: Provides a cleaner syntax for creating objects and methods.
2. **Behind the Scenes**: JavaScript uses prototypes for method sharing.
3. **Prototype-based Inheritance**: Functions added to the prototype are shared among instances.
4. **Efficiency**: The prototype approach avoids method duplication in each object.
5. **Class vs Prototype**: Both achieve the same result, but ES6 classes improve readability.

--------------------------- DEFINITIONS ---------------------------

- **Class**: A blueprint for creating objects with properties and methods.
- **Prototype**: A mechanism to share methods across instances efficiently.
- **Constructor Function**: A function used to create objects before ES6 classes.
- **Instance**: An object created from a class or constructor function.

*/
