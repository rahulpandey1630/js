<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example | Chai aur Code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <!-- This is the body section; a dynamic div will be appended here via JavaScript -->
</body>
<script>
    // Step 1: Create a new div element
    const div = document.createElement('div');
    console.log(div); // OUTPUT: <div></div>

    // Step 2: Add a class name to the div
    div.className = "main"; // Adds the class 'main'

    // Step 3: Add a random ID to the div
    div.id = Math.round(Math.random() * 10 + 1); // Generates a random number between 1 and 10, inclusive

    // Step 4: Set a title attribute for the div
    div.setAttribute("title", "generated title"); // Adds a tooltip text

    // Step 5: Style the div
    div.style.backgroundColor = "green"; // Sets the background color to green
    div.style.padding = "12px"; // Adds 12px padding

    // Step 6: Add text content to the div
    const addText = document.createTextNode("Chai aur Code"); // Creates a text node
    div.appendChild(addText); // Appends the text node to the div

    // Step 7: Append the div to the body
    document.body.appendChild(div); // Appends the styled div with content to the document body

    console.log("Final DIV:", div);
    // OUTPUT: <div class="main" id="randomID" title="generated title" style="...">Chai aur Code</div>

    /*
    Summary of Important Points:
    1. Use `document.createElement` to dynamically create HTML elements.
    2. Add attributes like `className`, `id`, or custom attributes using `setAttribute`.
    3. Style elements using the `style` property.
    4. Add text content with `document.createTextNode` and append it using `appendChild`.
    5. Append elements to the DOM with `appendChild` to make them visible on the page.
    6. Use `Math.random()` to generate random IDs or dynamic content.
    7. Use console logs to debug and verify the state of elements at each step.
    */
</script>
</html>
