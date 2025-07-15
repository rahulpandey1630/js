/* ✅ DYNAMIC DOM MANIPULATION - FULL NOTES */

/*
📌 Purpose:
Allows you to dynamically create, insert, update, and remove HTML elements using JavaScript.
Useful for building interactive UI without reloading the page.

==================================================
🎯 1. document.createElement(tagName)
- Creates a new HTML element (detached from DOM until you append it)
- Returns a reference to the new element

Example:
const div = document.createElement("div"); // Creates <div></div>
div.innerText = "Hello"; // Adds text inside
*/

/*
==================================================
🎯 2. parent.appendChild(childNode)
- Adds the childNode to the end (bottom) of parent
- If the node already exists in DOM, it will be moved (not cloned)

Example:
document.body.appendChild(div); // Appends <div> to <body>

Note:
- Only one node can be appended at a time
- Returns the appended node
*/

/*
==================================================
🎯 3. parent.prepend(childNode)
- Inserts childNode as the first child of the parent

Example:
document.body.prepend(div); // Inserts at top of <body>
*/

/*
==================================================
🎯 4. parent.removeChild(childNode)
- Removes a specified child node from the parent
- You must pass the exact reference (not selector string)

Example:
const p = document.getElementById("para");
document.body.removeChild(p); // Removes <p id="para">

Note:
- Cannot remove a node that isn’t a child of the specified parent
*/

/*
==================================================
🎯 5. parent.replaceChild(newNode, oldNode)
- Replaces an existing node with a new one

Example:
parent.replaceChild(newDiv, oldDiv); // oldDiv gets replaced with newDiv
*/

/*
==================================================
🎯 6. document.createTextNode(text)
- Creates a text node (useful when you want only text without HTML parsing)

Example:
const text = document.createTextNode("Plain text here");
div.appendChild(text); // Adds text to div
*/

/*
==================================================
🎯 7. innerText / textContent / innerHTML
- Use innerText or textContent to assign visible text
- Use innerHTML to assign HTML structure inside an element

Example:
div.innerText = "Hello";
div.innerHTML = "<b>Hello</b>";
*/

/*
==================================================
🎯 8. cloneNode(deep)
- Clones an element
- If deep = true, clones the entire element + children
- If deep = false, only the element without children

Example:
const cloned = div.cloneNode(true);
*/

/*
==================================================
🎯 9. insertBefore(newNode, referenceNode)
- Inserts a node before a specified reference node

Example:
parent.insertBefore(newNode, existingNode);
*/

/*
🧠 Important Notes:
--------------------------------------------
- appendChild, prepend, and removeChild modify the live DOM
- HTMLCollection is live (updates automatically when DOM changes)
- NodeList from querySelectorAll is static (won’t auto-update)
- Use Array.from() to convert collections to arrays for advanced methods

---------------------------------------------------------
Method                | Action
----------------------|-------------------------------
createElement         | Create new element
createTextNode        | Create raw text node
appendChild           | Add to end of parent
prepend               | Add to beginning of parent
removeChild           | Remove specific child node
replaceChild          | Replace existing node
insertBefore          | Insert before specific node
cloneNode             | Clone an existing node

🔥 Pro Tip:
Avoid using document.write() in dynamic apps — it rewrites the entire DOM!
*/






             

/* 
✅ Style Updates in DOM:
You can dynamically update styles using:
1. `element.style.property` → Directly change inline styles.
   Example:
     element.style.backgroundColor = "red";
     element.style.borderRadius = "10px";

2. `element.classList` → Add, remove, toggle CSS classes.
   Methods:
     - `add('className')`: Adds a class
     - `remove('className')`: Removes a class
     - `toggle('className')`: Adds if missing, removes if present

   Example:
     element.classList.add("active");
     element.classList.remove("hidden");
     element.classList.toggle("expanded");
*/

/*
⚠️ Common Confusions in DOM:

🔹 Difference between innerText vs textContent vs innerHTML:
------------------------------------------------------------
| Property      | Includes HTML | Shows Hidden Text | Performance |
|---------------|---------------|-------------------|-------------|
| innerText     | ❌ No         | ❌ No             | ⚠️ Slower   |
| textContent   | ❌ No         | ✅ Yes            | ✅ Fast     |
| innerHTML     | ✅ Yes        | ✅ Yes            | ⚠️ Slower   |

Examples:
  const el = document.getElementById("sample");

  el.innerText → Gets only *visible* text (ignores `display: none`)
  el.textContent → Gets *all* text including hidden
  el.innerHTML → Gets HTML + text (with tags)

🔹 Live HTMLCollection vs Static NodeList:
-----------------------------------------
- `getElementsByClassName` and `getElementsByTagName` return a **live HTMLCollection**
  → Updates automatically if DOM changes.

- `querySelectorAll` returns a **static NodeList**
  → Does NOT update automatically with DOM changes.

Examples:
  const liveList = document.getElementsByClassName("item");
  const staticList = document.querySelectorAll(".item");

  // Add a new element with class 'item'
  const newDiv = document.createElement('div');
  newDiv.className = "item";
  document.body.appendChild(newDiv);

  console.log(liveList.length);   // Increases after addition ✅
  console.log(staticList.length); // Remains unchanged ❌
*/

/*
🛠️ Summary of Useful DOM Methods:
- createElement("tag") → Creates a new element
- appendChild(node) → Adds a child node at the end
- removeChild(node) → Removes an existing child
- prepend(node) → Inserts node at the beginning
- setAttribute("attr", "value") → Sets or updates an attribute
- getAttribute("attr") → Gets attribute value
- removeAttribute("attr") → Removes the attribute
*/
