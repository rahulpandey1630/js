// Select the form element from the DOM
const form = document.querySelector('form');

// Note: This line would give an empty value if run outside an event listener
// because it tries to fetch the value of the input before the user interacts with it.
// const height = parseInt(document.querySelector('#height').value);

// Add an event listener for the 'submit' event of the form
form.addEventListener('submit', function (e) {
  // Prevent the default behavior of the form submission (i.e., page reload)
  e.preventDefault();

  // Fetch the height input value(string) and convert it to an integer
  const height = parseInt(document.querySelector('#height').value);

  // Fetch the weight input value and convert it to an integer
  const weight = parseInt(document.querySelector('#weight').value);

  // Select the element where the result will be displayed
  const results = document.querySelector('#results');

  // Validate the height input
  if (height === '' || height < 0 || isNaN(height)) {
    // Display an error message if height is invalid
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // Validate the weight input
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    // Display an error message if weight is invalid
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  // If both inputs are valid
  else {
    // Calculate BMI using the formula:
    // BMI = weight (kg) / (height (cm) * height (cm) / 10000)
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the calculated BMI inside the results element
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

/*
Important points:
1. The `e.preventDefault()` prevents the page from refreshing when the form is submitted.
2. Always validate user inputs (e.g., check for negative values, empty inputs, or invalid numbers).
3. The `toFixed(2)` method is used to round the BMI result to two decimal places for better readability.
4. The `innerHTML` is used to dynamically update the `#results` element with error messages or the BMI result.
5. Ensure the form inputs (`#height` and `#weight`) exist in the DOM to avoid runtime errors.
6. This code assumes height is provided in centimeters and weight in kilograms.
*/
