/***********************************************
 * 📌 PROMISES & ASYNC/AWAIT IN JAVASCRIPT - DETAILED NOTES
 ***********************************************/

/*
🔹 What is a Promise?
- A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation.
- Helps avoid "callback hell" by providing a structured way to handle async tasks.
- It can be in one of **three states**:
  1. `Pending`: Initial state (still waiting).
  2. `Fulfilled`: Operation completed successfully.
  3. `Rejected`: Operation failed (error occurred).

🔹 Why Promises?
- They allow chaining (`.then()`, `.catch()`, `.finally()`).
- Provide cleaner, more manageable async code than callbacks.
- Combine well with `async/await` for even simpler syntax.
*/

/*
🔹 Core Promise Methods:
1. `.then(callback)` → Runs on success (fulfilled state).
2. `.catch(callback)` → Runs on failure (rejected state).
3. `.finally(callback)` → Runs regardless of success/failure.
4. `Promise.all([...])` → Resolves when all promises succeed (or rejects if any fail).
5. `Promise.race([...])` → Resolves/rejects as soon as the first promise settles.
*/

/*
🔹 Creating a Basic Promise (Example 1):
*/

const promiseOne = new Promise(function(resolve, reject) {
    // Simulating an async task using setTimeout
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();  // Marks the promise as fulfilled
    }, 1000);
});

// Consuming the promise
promiseOne.then(function() {
    console.log("Promise consumed");
});

/*
🔹 Another Promise Example (Immediate Resolution):
*/

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

/*
🔹 Returning Data from Promises:
*/

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);  // { username: "Chai", email: "chai@example.com" }
});

/*
🔹 Conditional Resolve or Reject:
*/

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulate an error
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));

/*
🔹 Using Async/Await to Consume Promises (Cleaner Syntax):
*/

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulate failure
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;  // Wait until promise resolves
        console.log(response);
    } catch (error) {
        console.log(error);  // Catches rejected promise
    }
}
consumePromiseFive();

/*
🔹 Why Async/Await?
- `async` functions automatically return a promise.
- `await` pauses execution until the promise settles.
- `try...catch` allows structured error handling.
- Easier to read/write than `.then()` chains.
*/

/*
🔹 Fetch API with Promises (Standard):
*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();  // Convert response to JSON
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

/*
🔹 Fetch API with Async/Await (Cleaner):
*/

async function fetchGitHubUser() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
fetchGitHubUser();

/*
------------------------------------------------------
🔹 Important Definitions:
1. **Promise:** Object for managing async operations.
2. **Resolve:** Marks a promise as successful.
3. **Reject:** Marks a promise as failed.
4. **Async/Await:** Modern syntax to consume promises cleanly.
5. **Fetch API:** Makes HTTP requests; returns a promise.

🔹 Key Points:
1. Promises simplify async logic vs callbacks.
2. `.then()` handles fulfillment, `.catch()` handles errors, `.finally()` always runs.
3. Async/Await is cleaner, but must use `try...catch`.
4. Fetch works natively with promises and supports async/await.
5. Use `Promise.all()` to handle multiple async tasks in parallel.
*/

/*
------------------------------------------------------
🔹 Common Interview Questions (with Answers):

Q1: What are the states of a Promise?
A1: Pending, Fulfilled, Rejected.

Q2: How is async/await better than `.then()` chaining?
A2: Cleaner, synchronous-looking code; easier error handling with `try...catch`.

Q3: What happens if you don’t use `try...catch` with `await`?
A3: The async function returns a rejected promise, which must be handled with `.catch()`.

Q4: Does Fetch reject on 404 or 500?
A4: No, Fetch only rejects on network errors. Must check `response.ok` for HTTP errors.

Q5: How to run multiple promises in parallel?
A5: Use `Promise.all([promise1, promise2, ...])`.

Q6: Difference between `finally` and `catch`?
A6: `catch` runs only on errors; `finally` runs in both success and error cases.
*/
