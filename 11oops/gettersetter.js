class User {
    // Constructor to initialize email and password when creating an instance
    constructor(email, password){
        this.email = email;  // Calls the setter for email
        this.password = password; // Calls the setter for password
    }

    // Getter for email
    get email(){
        return this._email.toUpperCase();  // Returns the email in uppercase
    }

    // Setter for email
    set email(value){
        this._email = value;  // Stores email value in a private variable _email
    }

    // Getter for password
    get password(){
        return `${this._password}hitesh`;  // Appends "hitesh" to the password before returning
    }

    // Setter for password
    set password(value){
        this._password = value;  // Stores password value in a private variable _password
    }
}

// Creating an instance of User with email and password
const hitesh = new User("h@hitesh.ai", "abc");

// Accessing the email property, which calls the getter
console.log(hitesh.email);  // Output: "H@HITESH.AI"

// SUMMARY:
// 1. **Encapsulation**: Uses getter and setter methods to control access to private variables (_email, _password).
// 2. **Getters and Setters**: 
//    - `get email()` modifies email to uppercase before returning it.
//    - `get password()` appends "hitesh" to the password.
// 3. **Private Properties (Convention)**: 
//    - `_email` and `_password` are used to store values internally.
// 4. **Instance Creation**: 
//    - `const hitesh = new User("h@hitesh.ai", "abc")` creates an object with the given email and password.
// 5. **Method Calls Automatically**: 
//    - When `hitesh.email` is accessed, `get email()` is executed.

// DEFINITIONS:
// - **Encapsulation**: Wrapping data (variables) and methods inside a class to restrict direct access and modification.
// - **Getter (`get`)**: A method that retrieves and returns the value of a property in a controlled manner.
// - **Setter (`set`)**: A method that assigns values to a property while allowing modification logic.
// - **Private Variables (conventionally prefixed with `_`)**: Variables meant to be accessed only within the class.
