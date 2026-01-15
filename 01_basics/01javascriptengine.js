/**
 * # JavaScript Engine – Simple Notes (For Study & Revision)

---

## What is a JavaScript Engine?

A **JavaScript Engine** is a program that **runs JavaScript code**.

* Computers understand only **machine code (0s and 1s)**
* JavaScript is **human-readable**
* The JS engine converts JavaScript into **machine code** and executes it

Examples of JS engines:

* V8 (Chrome, Node.js)
* SpiderMonkey (Firefox)
* JavaScriptCore (Safari)

---

## Complete JavaScript Code Execution Flow working:

```
JS Code
 ↓
Parser
 ↓
AST
 ↓
Interpreter (Ignition)
 ↓
Profiler
 ↓
JIT Compiler (TurboFan)
 ↓
Optimized Machine Code
 ↓
CPU
```

---

## Step-by-Step Explanation (Simple Language)

---

### 1. JS Code

This is the code written by the developer.

Example:

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

* This code is **not directly understood by the computer**

---

### 2. Parser

The **parser reads the JavaScript code**.

What the parser does:

* Checks syntax errors
* Checks brackets, keywords, structure

If syntax is wrong, execution **stops immediately**.

Example error:

```js
let x = ; // syntax error
```

Parser role: **Grammar checker**

---

### 3. AST (Abstract Syntax Tree)

After parsing, the code is converted into an **AST**.

* AST is a **tree structure**
* Represents the **logic of code**, not formatting

Example:

```js
5 + 2
```

Tree representation:

```
   +
  / \
 5   2
```

AST role: **Blueprint of the program**

---

### 4. Interpreter (Ignition)

The interpreter starts **executing the code immediately**.

What it does:

* Converts AST into **bytecode**
* Executes code **line by line**

Why interpreter first?

* Fast startup
* Good for short or one-time code

Interpreter role: **Quick executor**

---

### 5. Profiler

The profiler **observes the running code**.

What it checks:

* Which functions run frequently
* Which loops repeat many times

Example:

```js
for (let i = 0; i < 100000; i++) {
  add(2, 3);
}
```

* `add()` is used many times
* Profiler marks it as **hot code**

Profiler role: **Detect frequently used code**

---

### 6. JIT Compiler (TurboFan)

JIT = **Just-In-Time Compiler**

What it does:

* Takes hot code from interpreter
* Converts bytecode into **optimized machine code**
* Removes unnecessary checks

Result:

* Code runs **much faster**

JIT role: **Performance optimizer**

---

### 7. Optimized Machine Code

After JIT compilation:

* Code becomes pure **machine instructions**
* CPU can execute it directly

This is the **fastest form** of your JavaScript code.

---

### 8. CPU Execution

The CPU:

* Executes machine instructions
* Produces final output

Example output:

```js
console.log(add(2,3)); // 5
```

---

## Important Points to Remember

* JavaScript engine converts JS → machine code
* Parser checks syntax
* AST represents program structure
* Interpreter gives fast execution start
* Profiler finds frequently used code
* JIT compiler improves performance
* CPU executes final optimized code

---

## One-Line Exam Answer

> A JavaScript engine parses JavaScript code, converts it into an AST, executes it using an interpreter, and optimizes frequently used code using JIT compilation before running it on the CPU.

---

## Very Short Summary

* JS engine runs JavaScript
* Uses interpreter + compiler
* Optimizes hot code
* Makes JavaScript fast

---

(End of Notes)

 */



/**
 * V8 JavaScript Engine – Short Notes
 *
 * V8 is a high-performance JavaScript engine developed by Google.
 * It executes JavaScript code in browsers like Chrome and runtimes like Node.js.
 *
 * Working Flow:
 * JavaScript Code → Parser → AST → Interpreter (Ignition)
 * → Profiler (detects frequently used code)
 * → JIT Compiler (TurboFan)
 * → Optimized Machine Code → CPU
 *
 * Key Points:
 * - Parser checks syntax and builds AST
 * - Ignition interprets code for fast startup
 * - Profiler finds "hot" (frequently executed) code
 * - TurboFan optimizes hot code using JIT compilation
 * - Optimized code runs directly on CPU
 *
 * Benefits:
 * - Fast execution
 * - Automatic optimization
 * - Near native performance
 */
