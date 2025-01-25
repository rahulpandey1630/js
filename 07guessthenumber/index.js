// Introduction:
// This is a "Guess the Number" game. The computer generates a random number between 1 and 100. 
// The player has 10 chances to guess the number correctly. After each guess, the game provides feedback: 
// - If the guess is too high, too low, or correct.
// If the game ends (after 10 guesses or a correct guess), the player can start a new game.

// Step 1: Generate a Random Number
let randomNumber = parseInt(Math.random() * 100 + 1); 
// Explanation: Math.random() generates a number between 0 and 1. 
// Multiplying it by 100 scales it to a range of 0–99. Adding 1 ensures the range is 1–100. 
// parseInt converts this floating-point number to an integer.

// Step 2: Select DOM Elements for Interaction
const submit = document.querySelector('#subt');  // The button the player clicks to submit their guess.
const userInput = document.querySelector('#guessField');  // Input field where the player types their guess.
const guessSlot = document.querySelector('.guesses');  // Displays the player's previous guesses.
const remaining = document.querySelector('.lastResult');  // Displays the number of remaining guesses.
const lowOrHi = document.querySelector('.lowOrHi');  // Displays feedback about the guess (too high, too low, or correct).
const startOver = document.querySelector('.resultParas');  // Contains the "Start New Game" button after the game ends.

const p = document.createElement('p');  // A new paragraph element to dynamically create the "Start New Game" button later.

// Step 3: Initialize Game Variables
let prevGuess = [];  // Array to store all guesses made by the player.
let numGuess = 1;  // Tracks the number of guesses made (starts at 1).
let playGame = true;  // Boolean flag to track if the game is active or has ended.

// Step 4: Add an Event Listener for the Submit Button
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();  // Prevents the form from reloading the page on submission.
    const guess = parseInt(userInput.value);  // Reads the user's guess and converts it to an integer.
    console.log(guess);  // Logs the guess for debugging purposes.
    validateGuess(guess);  // Passes the guess to the validation function.
  });
}

// Step 5: Validate the User's Guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    // Check if the input is not a number
    alert('Please enter a valid number'); 
  } else if (guess < 1) {
    // Check if the number is below 1
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    // Check if the number is above 100
    alert('Please enter a number less than 100');
  } else {
    // If the guess is valid, add it to the previous guesses array
    prevGuess.push(guess);
    if (numGuess === 11) {
      // If the player has used all 10 guesses
      displayGuess(guess);  // Show the final guess
      displayMessage(`Game Over. Random number was ${randomNumber}`);  // Display the correct number
      endGame();  // End the game
    } else {
      displayGuess(guess);  // Show the current guess
      checkGuess(guess);  // Check if the guess is correct, too high, or too low
    }
  }
}

// Step 6: Check if the Guess is Correct
function checkGuess(guess) {
  if (guess === randomNumber) {
    // If the guess matches the random number, the player wins
    displayMessage('You guessed it right!');
    endGame();  // End the game
  } else if (guess < randomNumber) {
    // If the guess is lower than the random number, provide feedback
    displayMessage('Number is TOO low');
  } else if (guess > randomNumber) {
    // If the guess is higher than the random number, provide feedback
    displayMessage('Number is TOO High');
  }
}

// Step 7: Display the Guess and Update Remaining Guesses
function displayGuess(guess) {
  userInput.value = '';  // Clear the input field for the next guess
  guessSlot.innerHTML += `${guess}, `;  // Add the guess to the list of previous guesses
  numGuess++;  // Increment the guess counter
  remaining.innerHTML = `${11 - numGuess}`;  // Update the remaining guesses display
}

// Step 8: Display Feedback Messages
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;  // Show the feedback (e.g., too low, too high, correct)
}

// Step 9: End the Game
function endGame() {
  userInput.value = '';  // Clear the input field
  userInput.setAttribute('disabled', '');  // Disable further input
  p.classList.add('button');  // Add a class to style the "Start New Game" button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;  // Create the "Start New Game" button
  startOver.appendChild(p);  // Add the button to the DOM
  playGame = false;  // Set the playGame flag to false to stop game interactions
  newGame();  // Initialize the new game setup
}

// Step 10: Start a New Game
function newGame() {
  const newGameButton = document.querySelector('#newGame');  // Select the "Start New Game" button
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);  // Generate a new random number
    prevGuess = [];  // Reset the guesses array
    numGuess = 1;  // Reset the guess counter
    guessSlot.innerHTML = '';  // Clear previous guesses from the display
    remaining.innerHTML = `${11 - numGuess}`;  // Reset the remaining guesses count
    userInput.removeAttribute('disabled');  // Enable the input field
    startOver.removeChild(p);  // Remove the "Start New Game" button
    playGame = true;  // Set the playGame flag to true to resume the game
  });
}

// Key Takeaways:
// - Random number generation ensures the game is unique every time.
// - User input is validated to keep guesses within range and meaningful.
// - Feedback and game state (e.g., remaining guesses, previous guesses) are dynamically updated.
// - The game flow is controlled using a combination of flags and DOM manipulation.
