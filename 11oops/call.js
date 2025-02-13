// Function to set the username and simulate complex database operations
function SetUsername(username) {
    // `this` refers to the object that calls this function.
    // Here, we assign the `username` parameter to the `username` property of the object.
    this.username = username;

    // Log to indicate that this function has been called.
    console.log("called");
}

// Constructor function to create a user object with username, email, and password
function createUser(username, email, password) {
    // Use the `call` method to invoke `SetUsername` in the context of the current object (`this`).
    // This ensures that `this.username` in `SetUsername` refers to the `createUser` object.
    // Without `call`, `this` inside `SetUsername` would not refer to the correct object.
    SetUsername.call(this, username); 
    //Why this is Passed:
/*Purpose of call:
The call method is used to invoke a function while explicitly setting the value of this inside that function.
The first argument passed to call becomes the value of this inside the function being called.
Context of this:
In the createUser function, this refers to the newly created object (when new createUser(...) is called).
By passing this to SetUsername.call, we ensure that this inside SetUsername refers to the same object as this in createUser.
Why Not Just Call SetUsername(username)?:
If you call SetUsername(username) directly, this inside SetUsername would not refer to the createUser object. Instead:
In non-strict mode, this would default to the global object (window in browsers, global in Node.js).
In strict mode, this would be undefined.

This would cause this.username = username in SetUsername to either:

Modify the global object (bad practice, causes bugs).

Throw an error in strict mode (Cannot set property 'username' of undefined).

Why call is Necessary:

By using call, we explicitly set this inside SetUsername to the same object being created in createUser.

This ensures that this.username = username in SetUsername correctly assigns the username property to the createUser object.*/

    // Assign the `email` and `password` parameters to the current object (`this`).
    this.email = email;
    this.password = password;
}

// Create a new user object using the `createUser` constructor function.
// The `new` keyword does the following:
// 1. Creates a new empty object.
// 2. Sets `this` inside `createUser` to the new object.
// 3. Executes the `createUser` function to initialize the object.
// 4. Returns the newly created object.
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the created user object to the console.
// The output will be:
// {
//   username: "chai",
//   email: "chai@fb.com",
//   password: "123"
// }
console.log(chai);

/*
==================================================
Key Points in Comments:
==================================================
1. **`SetUsername` Function**:
   - This function assigns the `username` to the current object (`this`).
   - It simulates complex operations (like database calls) and logs `"called"` to indicate execution.

2. **`createUser` Function**:
   - This is a **constructor function** used to create user objects.
   - It uses `SetUsername.call(this, username)` to ensure `SetUsername` modifies the correct object.

3. **`call` Method**:
   - The `call` method is used to invoke `SetUsername` with `this` explicitly set to the current object.
   - This is necessary to ensure `this.username` in `SetUsername` refers to the `createUser` object.

4. **`new` Keyword**:
   - The `new` keyword creates a new object and sets `this` inside `createUser` to that object.
   - It automatically returns the newly created object.

5. **Output**:
   - The `console.log(chai)` outputs the user object with `username`, `email`, and `password`.

==================================================
Definitions in Comments:
==================================================
1. **`this`**:
   - Refers to the current execution context.
   - In a constructor function, `this` refers to the newly created object.

2. **`call`**:
   - A method that allows you to call a function with a specific `this` value and arguments provided individually.

3. **Constructor Function**:
   - A function used to create and initialize objects.
   - Typically used with the `new` keyword.

4. **`new` Keyword**:
   - Creates an instance of an object from a constructor function.
   - Sets `this` inside the constructor to the newly created object.

==================================================
Summary in Comments:
==================================================
- The `SetUsername` function assigns a username to the current object.
- The `createUser` function is a constructor that creates user objects with `username`, `email`, and `password`.
- The `call` method is used to ensure `SetUsername` modifies the correct object.
- The `new` keyword creates and initializes the object.
- This pattern is useful for reusing functions (like `SetUsername`) in different contexts.

==================================================
Final Output:
==================================================
When you run the code, the output will be:
{
  username: "chai",
  email: "chai@fb.com",
  password: "123"
}
*/