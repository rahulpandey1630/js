// ✅ Get the element with the id 'clock' from the HTML document
const clock = document.getElementById('clock');

// ⏲️ Update the clock every second using setInterval
setInterval(function () {
  // 📅 Create a new Date object to get the current time
  let date = new Date();

  // 🕒 Update the content of the clock element with the current time
  // toLocaleTimeString() formats time based on user's locale (e.g., "10:45:23 AM")
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);  // 1000ms = 1 second → refreshes clock every second

/* ------------------------------------------------------------------- */

// 🔁 setInterval Overview:
// setInterval repeatedly calls a function at specified intervals (in ms)

// 🧠 Syntax:
// setInterval(function, delayInMilliseconds);

// 📌 Example 1: Logging every 2 seconds
setInterval(function() {
  console.log("This message will be logged every 2 seconds.");
}, 2000); // ⏱️ Executes every 2000ms (2s)

/* ------------------------------------------------------------------- */

// 🔁 Example 2: Stopping a repeating interval

// 🪝 Save the interval ID returned by setInterval
let intervalId = setInterval(function() {
  console.log("This will run every 3 seconds.");
}, 3000); // ⏱️ Repeats every 3 seconds

// 🛑 Stop the interval after 10 seconds using clearInterval
setTimeout(function() {
  clearInterval(intervalId); // 🔚 Stops the interval
  console.log("Interval stopped.");
}, 10000); // ⏰ Stop after 10 seconds

/* ------------------------------------------------------------------- */

// 📘 Summary:
// - `setInterval` is useful for repeated tasks (like a clock).
// - `clearInterval` can stop it using the ID.
// - `Date()` + `toLocaleTimeString()` gives formatted current time.
// - `setTimeout` is a one-time delay function — perfect to stop intervals.
