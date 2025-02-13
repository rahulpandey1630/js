// Dates

// Create a new Date object with the current date and time
let myDate = new Date();
console.log(myDate );       // Outputs the date and time as a string
console.log(myDate.toString());       // Outputs the date and time as a string
console.log(myDate.toDateString());   // Outputs the date as a string (without time)
console.log(myDate.toLocaleString()); // Outputs the date and time in local format
console.log(typeof myDate);           // Outputs the type of myDate (object)

// Create a new Date object with a specific date
// Uncomment one of the following lines to see different date formats
// let d = new Date(year,month,day,hour,minute,second)
//month start from 0 in js
// let myCreatedDate = new Date(2023, 0, 23);          // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);    // January 23, 2023, 05:03:00
// let myCreatedDate = new Date("2023-01-14");         // January 14, 2023
let myCreatedDate = new Date("01-14-2023");            // January 14, 2023
console.log(myCreatedDate.toLocaleString());           // Outputs the created date in local format

// Get the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now(); 
console.log(myTimeStamp);                              // Outputs the current timestamp . Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(myCreatedDate.getTime());                  // Outputs the timestamp for the created date
console.log(Math.floor(Date.now() / 1000));            // Outputs the current timestamp in seconds

// Create a new Date object with the current date and time
let newDate = new Date();
console.log(newDate);                                  // Outputs the current date and time
console.log(newDate.getMonth() + 1);                   // Outputs the current month (0-based index, so add 1)
console.log(newDate.getDay());                         // Outputs the current day of the week (0 = Sunday, 6 = Saturday)

// Get the current day of the week in long format
// `${newDate.getDay()} and the time `


// Extract the weekday from the current date using toLocaleString
// 'default' refers to the default locale (system locale)
// { weekday: "long" } specifies that we want the full name of the weekday (e.g., "Monday", "Tuesday")
let weekday = newDate.toLocaleString('default', { weekday: "long" });

// Log the day of the week to the console
// This will output something like "Today is Monday" if the current day is Monday
console.log(`Today is ${weekday}`);