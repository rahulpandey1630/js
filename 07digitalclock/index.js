// Get the element with the id 'clock' from the HTML document
const clock = document.getElementById('clock');
// Alternatively, you can use querySelector to select the clock element
// const clock = document.querySelector('#clock')

// Set an interval that runs every 1000 milliseconds (1 second)
setInterval(function () {
  // Create a new Date object to get the current date and time
  let date = new Date();
  
  // Update the content of the clock element with the current time in the locale format (HH:MM:SS)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // The callback function is executed every second

/*setInterval: This function is used to execute a callback function at regular intervals. In this case, every second (1000 milliseconds).
Date(): The Date object is used to get the current date and time.
toLocaleTimeString(): This method converts the date to a string based on the local time format, showing hours, minutes, and seconds.
Updating innerHTML: The content of the clock element is updated every second to display the current time
// setInterval Overview: 
// setInterval is a built-in JavaScript function that repeatedly executes a block of code at specified intervals (in milliseconds).

// Syntax:
// setInterval(function(){}, delay);

// Parameters:
// function: The function or code block you want to execute repeatedly.
// delay: The time in milliseconds between each execution of the function. 
//        For example, 1000 milliseconds equals 1 second.

// Example usage:
setInterval(function() {
  console.log("This message will be logged every 2 seconds.");
}, 2000);  // Logs the message every 2 seconds (2000 milliseconds).

// setInterval returns an interval ID, which you can use to stop the interval using clearInterval()

let intervalId = setInterval(function() {
  console.log("This will run every 3 seconds.");
}, 3000);

// To stop the interval after 10 seconds
setTimeout(function() {
  clearInterval(intervalId);  // Stops the interval by passing the interval ID.
  console.log("Interval stopped.");
}, 10000);  // Clears the interval after 10 seconds.
*/