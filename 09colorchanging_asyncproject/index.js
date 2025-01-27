// Function to generate a random color using rgba() format
function getColor() {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // Math.floor() is used to round down to the nearest integer.
    // Random RGB values are generated between 0 and 255 for Red (r), Green (g), and Blue (b).
    let r = Math.floor(Math.random() * 255); // Random Red value (0 - 255)
    let g = Math.floor(Math.random() * 255); // Random Green value (0 - 255)
    let b = Math.floor(Math.random() * 255); // Random Blue value (0 - 255)

    // Random alpha value (opacity) between 0 (transparent) and 1 (fully opaque)
    let a = Math.random();

    // Returning the rgba() value for the background color
    // The format is: rgba(r, g, b, a), where r, g, b are the random color values, and a is the alpha (opacity) value
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Selecting the start and stop buttons from the DOM by their ID
const start = document.getElementById('start');
const stop = document.getElementById('stop');

// Variable to hold the interval reference
let interval;

// Event listener for the 'start' button
start.addEventListener('click', function () {
    // setInterval is used to call a function at specified intervals (in this case, 1000ms = 1 second)
    // The function changes the background color of the document body every 1 second
    interval = setInterval(function () {
        // Change the background color of the page to a random rgba() color
        document.body.style.backgroundColor = getColor();
    }, 1000); // 1000 milliseconds = 1 second
});

// Event listener for the 'stop' button
stop.addEventListener('click', function () {
    // clearInterval is used to stop the interval that was set earlier
    // It stops the function from executing every 1 second
    clearInterval(interval);
});
