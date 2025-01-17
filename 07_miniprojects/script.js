// Log a simple message to verify the script is running
console.log("Rahul");

// Select all elements with the class 'button' and store them in a NodeList
const buttons = document.querySelectorAll('.button');

// Select the <body> element to modify its background color dynamically
const body = document.querySelector('body');

// Loop through each button in the NodeList
buttons.forEach(function (button) {
  console.log(button); // Log each button element for debugging

  // Attach a 'click' event listener to each button
  button.addEventListener('click', function (e) {
    console.log(e);        // Log the event object for debugging
    console.log(e.target); // Log the clicked element for debugging

    // Check the ID of the clicked button and update the background color accordingly
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; // Set body background to 'grey'
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; // Set body background to 'white'
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; // Set body background to 'blue'
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; // Set body background to 'yellow'
    }
  });
});

// Key points:
// - The script dynamically changes the background color of the body based on the button clicked.
// - The `querySelectorAll` method selects all buttons with the class 'button'.
// - Event delegation is avoided by directly adding event listeners to each button.
// - Conditional checks (`if` statements) are used to match the button's ID and apply the corresponding color.
