console.log("hello") //CAN USE SINGLE QUOTES BACKTICKS 
process.stdout.write("hello")
console.table([3,4])

// JavaScript was created by Brendan Eich at Netscape in 1995 in just 10 days, first called Mocha.
// It was renamed to LiveScript, then JavaScript for marketing; Microsoft made JScript for Internet Explorer.
// Due to differences, both were standardized by ECMA in 1997 as ECMAScript.
//1997-ES1 ES5(2009 BIG CHANGES) ES6(KNOWN MODERN JS CAME IN 2015 HAD BIGGEST CHANGES)

// Scripting lANGUAGE

// JavaScript is backward compatible, meaning old code works in modern browsers.
// It is not forward compatible, so new features may not work in older browsers like Internet Explorer.
// Browsers support older syntax but cannot run future features they don't recognize.
//BABEL TOOL CAN TRANSPILE ES6 CODE TO ES5 SO THAT THEY CAN WORK ON OLD BROWSERS
/*


ECMAScript is maintained by Ecma International
The technical committee responsible is TC39
📌 TC39 decides:

Syntax rules
Data types
Features (like promises, classes, async/await)

Why ECMAScript Exists?   European Computer Manufacturers Association
Before ECMAScript:
Different browsers had different JavaScript behavior
Code worked in one browser but failed in another
👉 ECMAScript was created to:
✔ Standardize JavaScript
✔ Ensure cross-browser compatibility
✔ Prevent vendor lock-in




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


// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.(// Chrome V8 is Google's open-source JavaScript and WebAssembly engine.
// It is written in C++ and powers Google Chrome and Node.js.
// Role: Executes JavaScript code by converting it into machine code for fast execution.)









/**
 * JAVASCRIPT HISTORY
 *
 * 1995
 * ─────────────────────────────────────────────────────────────
 * JavaScript was created at Netscape by Brendan Eich.
 *
 * The original language was developed in roughly 10 days.
 *
 * Its first name was:
 *      Mocha
 *
 * It was created to make web pages interactive instead of
 * being limited to static HTML.
 *
 *
 * Mocha
 *   ↓
 * LiveScript
 *   ↓
 * JavaScript
 *
 *
 * Later in 1995
 * ─────────────────────────────────────────────────────────────
 * LiveScript was renamed JavaScript.
 *
 * IMPORTANT:
 * JavaScript and Java are completely different languages.
 * The name "JavaScript" was partly influenced by Java's popularity
 * at the time.
 *
 *
 * 1996
 * ─────────────────────────────────────────────────────────────
 * Microsoft created its own implementation called JScript
 * for Internet Explorer.
 *
 * Now different browsers had different implementations.
 *
 * This created browser-compatibility problems for developers.
 *
 *
 * 1997
 * ─────────────────────────────────────────────────────────────
 * JavaScript was submitted to Ecma International for
 * standardization.
 *
 * The standardized language specification became:
 *
 *      ECMAScript
 *
 * The specification is known as:
 *
 *      ECMA-262
 *
 *
 * IMPORTANT DIFFERENCE:
 *
 * JavaScript  → Common name of the programming language
 *
 * ECMAScript  → Standard/specification that defines the language
 *
 * JavaScript engines implement the ECMAScript specification.
 *
 *
 * ECMAScript versions
 * ─────────────────────────────────────────────────────────────
 *
 * ES1  → 1997
 * ES2  → 1998
 * ES3  → 1999
 *
 * Then there was a long gap in major language development.
 *
 * ES5  → 2009
 *
 *
 * ES6 / ES2015
 * ─────────────────────────────────────────────────────────────
 * ES6 was released in 2015 and was one of the biggest updates
 * in JavaScript history.
 *
 * It introduced many modern JavaScript features:
 *
 *      let
 *      const
 *      arrow functions
 *      classes
 *      template literals
 *      destructuring
 *      spread/rest operators
 *      default parameters
 *      promises
 *      modules
 *      Map
 *      Set
 *      and many more
 *
 *
 * After ES6
 * ─────────────────────────────────────────────────────────────
 * ECMAScript moved to a yearly release cycle.
 *
 * ES2016
 * ES2017
 * ES2018
 * ES2019
 * ...
 *
 * Therefore, modern JavaScript continues to evolve every year.
 *
 *
 * JAVASCRIPT TODAY
 * ─────────────────────────────────────────────────────────────
 *
 * JavaScript is no longer limited to browsers.
 *
 * It is used for:
 *
 *      Frontend
 *      Backend
 *      Mobile applications
 *      Desktop applications
 *      APIs
 *      Servers
 *      Full-stack development
 *
 * Examples:
 *
 *      React
 *      Node.js
 *      Express
 *      Next.js
 *      Electron
 *
 *
 * JAVASCRIPT ENGINE
 * ─────────────────────────────────────────────────────────────
 * JavaScript needs an engine to execute the code.
 *
 * Chrome / Node.js
 *      → V8
 *
 * Firefox
 *      → SpiderMonkey
 *
 * Safari
 *      → JavaScriptCore
 *
 *
 * V8 EXECUTION (simplified)
 * ─────────────────────────────────────────────────────────────
 *
 * JavaScript Code
 *       ↓
 * Parser
 *       ↓
 * AST (Abstract Syntax Tree)
 *       ↓
 * Ignition
 *       ↓
 * Bytecode
 *       ↓
 * Profiler
 *       ↓
 * TurboFan (JIT Compiler)
 *       ↓
 * Optimized Machine Code
 *       ↓
 * CPU
 *
 *
 * IN SHORT
 * ─────────────────────────────────────────────────────────────
 *
 * 1995 → Mocha
 * 1995 → LiveScript
 * 1995 → JavaScript
 * 1996 → Microsoft JScript
 * 1997 → ECMAScript / ES1
 * 2009 → ES5
 * 2015 → ES6 / ES2015
 * 2016+ → Yearly ECMAScript releases
 *
 *
 * The main idea:
 *
 * JavaScript = language we use
 * ECMAScript = standard/specification
 * V8 = engine that executes JavaScript
 */