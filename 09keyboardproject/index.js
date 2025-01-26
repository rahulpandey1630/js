// Select the element with id 'insert' from the DOM where the output will be displayed
const insert = document.getElementById('insert');

// Add an event listener to the window object to listen for 'keydown' events
// A 'keydown' event is fired when a key is pressed
window.addEventListener('keydown', (e) => {
  // Update the innerHTML of the 'insert' element with a dynamically generated table
  // The table contains details about the key pressed

  insert.innerHTML = `
    <div class='color'> <!-- A wrapper for styling (if needed) -->
      <table> <!-- Table to display key information -->
        <tr>
          <!-- Table headers to describe each column -->
          <th>Key</th> 
          <th>Keycode</th> 
          <th>Code</th>
        </tr>
        <tr>
          <!-- Table data -->
          <td>${e.key === ' ' ? 'Space' : e.key}</td> 
          <!-- If the key is a space, show 'Space'; otherwise, show the actual key pressed -->
          <td>${e.keyCode}</td> 
          <!-- 'keyCode' property gives the numeric code of the key pressed -->
          <td>${e.code}</td> 
          <!-- 'code' property gives the physical key on the keyboard (useful for distinguishing keys) -->
        </tr>
      </table>
    </div>
  `;
});
