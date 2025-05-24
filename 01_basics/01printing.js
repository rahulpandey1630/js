console.log("hello")
process.stdout.write("hello")
console.table([3,4])

//brendan eich father of js

/*
 Web Development – Key Concepts
🔹 What Do Browsers Understand?
A web browser can only understand the following core technologies:

Language	Purpose
HTML	Structure/content of the web page
CSS	Styling/appearance of the content
JavaScript	Interactivity and logic
WebAssembly (Wasm)	High-performance compiled code (optional)

✅ Important: No matter what framework or tool you use, the browser eventually receives HTML, CSS, and JS.

🔹 What Makes Up a Website?
Any website you use is essentially made up of:

HTML files → Layout and structure

CSS files → Styling (colors, fonts, layout)

JavaScript files → Logic and interactions

Assets → Images, videos, fonts, icons, etc.

🎯 These files are served to the browser and are interpreted/rendered to form the visual website.

🔹 Frameworks like React / Next.js
React, Next.js, Vue, etc., are JavaScript frameworks/libraries.

They make it easier to build complex apps by:

Managing UI state

Organizing code

Routing between pages

Optimizing performance

🧠 But in the end:

React and others compile (or "transpile") into plain HTML, CSS, and JS.

Your browser never sees "React code" directly — only the result of it.

🔹 Why Can’t Browsers Run C++ Code?
Your C++ code (e.g., on LeetCode) doesn’t run inside the browser.

Instead, it's sent to a remote server, compiled and executed there.

The result/output is returned to your browser.

🛑 Browsers cannot natively compile C++, Java, Python, etc.

🔹 What Is WebAssembly (Wasm)?
WebAssembly (Wasm) is a low-level binary format.

It allows languages like C++, Rust, and Go to run in the browser.

You write C++ → compile it to .wasm → browser runs that wasm.

🔧 This is how you can technically run C++/Rust code in a browser — but only after converting it to WebAssembly.
*/