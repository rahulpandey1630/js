
/*
===============================================================================
                        JAVASCRIPT DATES – CONCISE GUIDE
===============================================================================

===============================================================================
                    CREATING DATE OBJECTS
===============================================================================

Current date and time:
let myDate = new Date();
console.log(myDate); // Outputs the date and time as a string
console.log(typeof myDate); // Outputs: object

Specific date (year, month, day, hour, minute, second):
// Note: Month starts from 0 in JavaScript (0 = January)
let myCreatedDate = new Date(2023, 0, 23);        // January 23, 2023
let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 05:03:00

String format:
let myCreatedDate = new Date("2023-01-14");       // January 14, 2023
let myCreatedDate = new Date("01-14-2023");       // January 14, 2023


===============================================================================
                    DATE STRING METHODS
===============================================================================

toString()
console.log(myDate.toString()); // Full date and time string

toDateString()
console.log(myDate.toDateString()); // Date only (without time)

toLocaleString()
console.log(myDate.toLocaleString()); // Date and time in local format

toLocaleString() with options:
let weekday = myDate.toLocaleString('default', { weekday: "long" });
console.log(`Today is ${weekday}`); // E.g., "Today is Monday"


===============================================================================
                    GETTING TIMESTAMPS
===============================================================================

Date.now()
Returns current timestamp in milliseconds since January 1, 1970 UTC
let myTimeStamp = Date.now();
console.log(myTimeStamp); // E.g., 1704067200000

getTime()
Returns timestamp for specific date in milliseconds
console.log(myCreatedDate.getTime()); // Timestamp of created date

Timestamp in seconds:
console.log(Math.floor(Date.now() / 1000)); // Current time in seconds


===============================================================================
                    GETTING DATE COMPONENTS
===============================================================================

getMonth()
Returns month (0-11, so add 1 for human readable)
console.log(newDate.getMonth() + 1); // 1 = January, 12 = December

getDay()
Returns day of week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay()); // 0-6

getDate()
Returns day of month (1-31)
console.log(newDate.getDate());

getYear()
Returns year (deprecated, use getFullYear())

getFullYear()
Returns full year
console.log(newDate.getFullYear()); // E.g., 2024

getHours()
console.log(newDate.getHours());

getMinutes()
console.log(newDate.getMinutes());

getSeconds()
console.log(newDate.getSeconds());


===============================================================================
                    QUICK REFERENCE
===============================================================================

CREATING DATES:
- new Date() → current date/time
- new Date(year, month, day, hour, minute, second)
- new Date("YYYY-MM-DD") or new Date("MM-DD-YYYY")
  Note: Month is 0-indexed (0 = January)

STRING CONVERSION:
- toString() → full format
- toDateString() → date only
- toLocaleString() → local format
- toLocaleString('default', {weekday: "long"}) → day name

TIMESTAMPS:
- Date.now() → current time in ms
- getTime() → timestamp of date in ms

EXTRACTING VALUES:
- getMonth() → 0-11 (add 1 for readable month)
- getDay() → 0-6 (day of week)
- getDate() → 1-31 (day of month)
- getFullYear() → year
- getHours() → 0-23
- getMinutes() → 0-59
- getSeconds() → 0-59

CONVERSION:
- Milliseconds to seconds: divide by 1000
- Seconds to milliseconds: multiply by 1000

===============================================================================
*/