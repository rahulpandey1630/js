// Object Literal Approach
const user = {
    username: "hitesh",   // Property
    loginCount: 8,        // Property
    signedIn: true,       // Property

    getUserDetails: function(){
        console.log(this); // 'this' refers to the user object itself(current context)
    }
}  

// Accessing properties
console.log(user.username); // Output: hitesh
 
// Calling the method
user.getUserDetails(); //in node environment global object console.log(this) will give {} 
// Output: Entire 'user' object

//---------------------------------------------------------

// Constructor Function Approach
function User(username, loginCount, isLoggedIn){
    this.username = username;   // Assigning values to instance properties
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`); // Uses 'this' to access instance properties
    }

    return this; // Not necessary, as 'new' automatically returns the instance
}

// Creating new instances using 'new' keyword
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

console.log(userOne.username); // Output: hitesh
console.log(userTwo.username); // Output: ChaiAurCode

// Calling instance method
userOne.greeting(); // Output: Welcome hitesh
userTwo.greeting(); // Output: Welcome ChaiAurCode

// Checking constructor reference
console.log(userOne.constructor); // Output: [Function: User]

/*
------------------------- SUMMARY -------------------------
1. Object Literals:
   - Direct way to create an object.
   - Not efficient for multiple instances.

2. Constructor Functions:
   - Used to create multiple objects dynamically.
   - 'this' inside a constructor refers to the instance being created.

3. 'this' Keyword:
   - Refers to the calling object.
   - Changes based on execution context.

4. 'new' Keyword:
   - Creates a new instance and links it to the constructor.
   - Without 'new', 'this' would refer to the global object.

5. Methods in Constructor:
   - Defined inside the function, but each instance gets its own copy.
   - Can be optimized using prototypes.

-------------------------------------------------------------
✅ Object literals are simple but not scalable.  
✅ Constructor functions help create multiple instances.  
✅ 'this' changes based on context; in constructors, it refers to the new instance.  
✅ Using 'new' is required to create instances from a constructor.  
✅ 'userOne.constructor' helps identify the constructor function.  
-------------------------------------------------------------
*/

