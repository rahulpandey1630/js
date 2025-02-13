// ---------------------- ES6 Static Methods and Inheritance ----------------------

// Base class 'User'
class User {
    constructor(username) {
        this.username = username; // Assign username
    }

    // Instance method to log the username
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method that returns a fixed ID
    static createId() {
        return `123`;
    }
}

// Creating an instance of 'User'
const hitesh = new User("hitesh");

// The following line would throw an error because 'createId' is a static method
// console.log(hitesh.createId()); // ❌ ERROR: createId is not a function

// Derived class 'Teacher' that extends 'User'
class Teacher extends User {
    constructor(username, email) {
        super(username); // Calls the parent class constructor
        this.email = email; // Assign email
    }
}

// Creating an instance of 'Teacher'
const iphone = new Teacher("iphone", "i@phone.com");

// Attempting to call a static method on an instance will fail
console.log(iphone.createId()); // ❌ ERROR: createId is not a function

// Correct way: Call static method on the class itself
console.log(User.createId());   // ✅ Output: 123
console.log(Teacher.createId()); // ✅ Output: 123 (inherited from User)


/* --------------------------- SUMMARY ---------------------------

1. **Static Methods**: Defined using `static` keyword and belong to the class, not instances.
2. **Cannot Call on Instances**: Static methods cannot be accessed using an object instance.
3. **Inheritance of Static Methods**: Child classes inherit static methods from parent classes.
4. **Calling Static Methods**: They must be called directly on the class (`User.createId()`).

--------------------------- DEFINITIONS ---------------------------

- **Static Method**: A method that belongs to a class instead of instances.
- **Instance Method**: A method that can be accessed by an instance of a class.
- **Inheritance**: Allows a class to extend another class and inherit its methods.
- **super()**: Calls the parent class constructor inside a child class.

*/
