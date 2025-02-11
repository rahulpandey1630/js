// **Promises in JavaScript**  

// A `Promise` represents the eventual completion (or failure) of an asynchronous operation.  
// It allows handling asynchronous tasks in a structured manner.  

// **Promise States:**  
// 1. `Pending`   - Initial state, neither fulfilled nor rejected.  
// 2. `Fulfilled` - Operation completed successfully, returning a value.  
// 3. `Rejected`  - Operation failed, returning an error.  

// **Key Methods:**  
// `.then()`   → Handles successful execution (fulfilled state).  
// `.catch()`  → Handles errors (rejected state).  
// `.finally()` → Runs regardless of success or failure. 
 
// Creating a new promise (promiseOne)
const promiseOne = new Promise(function(resolve, reject){
    // A promise is used for handling asynchronous operations.
    // It takes a function with two parameters: resolve (for success) and reject (for failure).
    setTimeout(function(){
        console.log('Async task is complete'); // Logs message after 1 second
        resolve(); // Marks promise as resolved (success)
    }, 1000);
});

// Handling the resolved promise
promiseOne.then(function(){
    console.log("Promise consumed"); // Runs when promiseOne is resolved
});

// Creating and resolving a promise immediately
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2"); // Logs after 1 second
        resolve(); // Resolves the promise
    }, 1000);

}).then(function(){
    console.log("Async 2 resolved"); // Runs when the above promise resolves
});

// Creating a promise that resolves with an object
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}); // Resolves with user data
    }, 1000);
});

// Handling the resolved data
promiseThree.then(function(user){
    console.log(user); // Logs: { username: "Chai", email: "chai@example.com" } after 1 second
});

// Promise that conditionally resolves or rejects
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating an error scenario
        if (!error) {
            resolve({username: "hitesh", password: "123"}); // Resolves successfully
        } else {
            reject('ERROR: Something went wrong'); // Rejects the promise with an error message
        }
    }, 1000);
});

// Handling the promise with chaining
promiseFour
.then((user) => {
    console.log(user); // Will not run if promise is rejected
    return user.username; // Returns username for the next .then()
})
.then((username) => {
    console.log(username); // Logs username if the previous step succeeds
})
.catch(function(error){
    console.log(error); // Logs error if promise was rejected
})
.finally(() => console.log("The promise is either resolved or rejected")); // Always executes


// Async function to consume promise using async/await. one more way of handling promises
// **Creating a Promise (promiseFive)**
const promiseFive = new Promise(function (resolve, reject) {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(function () {
        let error = true; // Simulating an error scenario
        if (!error) {
            resolve({ username: "javascript", password: "123" }); // If no error, resolve with user data
        } else {
            reject('ERROR: JS went wrong'); // If error is true, reject with an error message
        }
    }, 1000); // Executes after 1 second
});

// **Using Async/Await to handle the promise**
async function consumePromiseFive() { // Declaring an async function
    try {
        // Awaiting the resolution of promiseFive
        // If resolved, `response` will contain the resolved data
        const response = await promiseFive; 
        console.log(response); // Logs the resolved value if the promise is fulfilled
    } catch (error) {
        // If the promise is rejected, the error is caught here
        console.log(error); // Logs the error message
    }
}
//No, async/await cannot directly handle errors without using try...catch. Unlike .then().catch(), 
// await does not have a built-in error-catching mechanism. If a Promise rejects inside an async function,
//  it must be handled with try...catch or the function will return a rejected Promise.
// **Calling the async function to consume the promise**
consumePromiseFive(); // Executes the function to handle the promise

// **What is `async` in this code?**
// - `async` before `function consumePromiseFive()` makes it an **asynchronous function**.
// - It **always returns a Promise**, even if the function does not explicitly return one.
// - Inside an `async` function, we can use `await` to pause execution until the Promise resolves or rejects.
// - This makes handling Promises easier without `.then()` and `.catch()` chaining.

// **Why use `async` in this code?**
// - Instead of using `.then()` to handle the Promise, we use `await` for a more readable and synchronous-like flow.
// - `try...catch` makes error handling cleaner when dealing with rejected Promises.


// Fetch API Example - Fetching data from GitHub API
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json(); // Converts response to JSON format
})
.then((data) => { //handle the value returned by above then
    console.log(data); // Logs GitHub user data
})
.catch((error) => console.log(error)); // Logs error if fetch fails

//using async await


// **Using Fetch API with Async/Await to Get GitHub User Data**
async function fetchGitHubUser() {
    try {
        // **Fetching data from GitHub API**
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        
        // **Checking if the response is okay (status 200-299)**
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`); // Throws error for failed requests
        }

        // **Converting response to JSON format**
        const data = await response.json();
        
        // **Logging GitHub user data to console**
        console.log(data);

    } catch (error) {
        // **Catching and logging errors if fetch fails**
        console.log("Error fetching data:", error);
    }
}

// **Calling the async function**
fetchGitHubUser(); 

/* 
Explanation:
1. **`async function fetchGitHubUser()`** → Defines an asynchronous function to fetch data.
2. **`await fetch(url)`** → Fetches data from the GitHub API and waits for response.
3. **`if (!response.ok) throw new Error(...)`** → Checks if response status is not OK (e.g., 404, 500).
4. **`await response.json()`** → Converts response to JSON format.
5. **`console.log(data)`** → Prints the user data to the console.
6. **`catch(error)`** → Handles network failures or API errors.
*/

/* 
**Key Takeaways:**
- `fetch()` returns a Promise, so `await` is used to wait for the result.
- `.json()` also returns a Promise, so `await` is needed again.
- `try...catch` is necessary to handle errors like network issues or API failures.
- **More readable than `.then().catch()` and avoids callback nesting.**
*/



/*
DEFINITIONS:
1. **Promise:** An object representing the eventual completion or failure of an asynchronous operation.
2. **Resolve:** Function to fulfill a promise successfully.
3. **Reject:** Function to indicate promise failure.
4. **Async/Await:** A modern way to handle promises more cleanly.
5. **Fetch API:** Used to make HTTP requests and returns a promise.

IMPORTANT POINTS:
1. Promises have three states: Pending, Resolved, Rejected.
2. .then() handles resolved promises, .catch() handles errors, .finally() always executes.
3. Async/Await syntax is cleaner than chaining multiple .then() calls.
4. Fetch API simplifies network requests and works with promises.
5. Promise.all() can be used to handle multiple promises simultaneously.
*/
