/*===============================================================================
                    JAVASCRIPT VARIABLES & SCOPING GUIDE
===============================================================================

'use strict' enables strict mode, which catches common coding mistakes and makes
JavaScript safer. It prevents usage of undeclared variables and reserved keywords,
improving code quality. Always place it at the top of a script or function to 
enforce stricter parsing rules.


===============================================================================
                            PART 1: VARIABLE DECLARATION
===============================================================================

There are three ways to declare variables in JavaScript:

1. const — for variables that should NOT change (constant reference)
2. let — for variables that CAN change (block-scoped)
3. var — for variables that CAN change (function-scoped, avoid in modern code)


EXAMPLES:
--------
const accountId = 144553;           // const: cannot be reassigned
let accountEmail = "hitesh@google.com";  // let: can be reassigned
var accountPassword = "12345";      // var: can be reassigned (avoid)
accountCity = "Jaipur";             // Without declaration: creates GLOBAL variable (NOT RECOMMENDED)
let accountState;                   // let: allows declaration without initialization
var id;                             // var: allows declaration without initialization
let id2;                            // let: allows declaration without initialization

const pi = 3.14;
console.log(pi);


===============================================================================
                        PART 2: VARIABLE NAMING RULES
===============================================================================

RULES FOR VARIABLE NAMING:
--------------------------

✅ VALID:
   - Must start with a letter, underscore (_), or dollar sign ($)
   - Can contain letters, digits, underscores, and dollar signs
   - Case-sensitive (myVar ≠ myvar)

❌ INVALID:
   - Cannot start with a digit (e.g., 1stName is invalid)
   - Cannot be JavaScript reserved keywords (var, if, for, etc.)
   - Cannot contain spaces

NAMING CONVENTIONS:
-------------------
- snake_case: first_name = "harshit"  (rarely used in modern JS)
- camelCase: firstName = "harshit"     (PREFERRED CONVENTION in JavaScript)
- PascalCase: FirstName = "harshit"    (used for class/constructor names)

BEST PRACTICE: Use camelCase for variables and functions, start with a lowercase letter.

EXAMPLES:
---------
var firstName = "Harshit";     // ✅ camelCase (preferred)
var first_name = "Harshit";    // ❌ snake_case (not preferred in JavaScript)
var FirstName = "Harshit";     // ❌ PascalCase (used for classes only)
var first name = "Harshit";    // ❌ INVALID - contains space


===============================================================================
                        PART 3: var vs let vs const
===============================================================================

┌──────────────┬─────────────────┬──────────────┬────────────────────┐
│ Feature      │ var             │ let          │ const              │
├──────────────┼─────────────────┼──────────────┼────────────────────┤
│ Scope        │ Function-scoped │ Block-scoped │ Block-scoped       │
│ Hoisting     │ Hoisted & init  │ Hoisted,TDZ  │ Hoisted, TDZ       │
│              │ to undefined    │              │                    │
│ Reassignment │ ✅ Allowed      │ ✅ Allowed   │ ❌ NOT allowed     │
│ Redeclaration│ ✅ Allowed      │ ❌ NOT allow │ ❌ NOT allowed     │
│ Global obj   │ Added to window │ NOT added    │ NOT added          │
│ Modern use   │ ❌ Avoid        │ ✅ Preferred │ ✅ Preferred       │
└──────────────┴─────────────────┴──────────────┴────────────────────┘


CONST RULES:
-----------
const means the variable BINDING cannot change, but object/array CONTENTS can change.

const person = { name: "Harsh" };
person.name = "Sharma";  // ✅ Allowed - modifying object properties
person = {};             // ❌ NOT allowed - reassigning the variable itself

const arr = [1, 2, 3];
arr.push(4);             // ✅ Allowed - modifying array contents
arr = [];                // ❌ NOT allowed - reassigning the variable


GLOBAL SCOPE BEHAVIOR:
---------------------
var is ADDED to the window object:
    var globalVar = 10;
    console.log(window.globalVar); // 10 ✅

let and const are NOT added to window:
    let globalLet = 20;
    const globalConst = 30;
    console.log(window.globalLet);     // undefined ❌
    console.log(window.globalConst);   // undefined ❌


===============================================================================
                    PART 4: SCOPE (Global, Function, Block)
===============================================================================

SCOPE DEFINITION:
-----------------
Scope determines where variables are accessible in your code.

There are three main scopes:
1. Global Scope — accessible everywhere in the program
2. Function Scope — accessible only inside the function where declared
3. Block Scope — accessible only inside the { ... } block where declared


TYPE 1: GLOBAL SCOPE
--------------------
✅ Accessible everywhere in the program

var globalVar = 10;

function myFunction() {
    console.log(globalVar); // ✅ 10 - accessible here
}

myFunction();
console.log(globalVar);     // ✅ 10 - accessible here too


TYPE 2: FUNCTION SCOPE
----------------------
Variables declared inside a function are only accessible within that function.

function funcScopeExample() {
    var funcVar = 20;
    let funcLet = 30;
    const funcConst = 40;
    console.log(funcVar, funcLet, funcConst); // ✅ All accessible here
}

funcScopeExample();
console.log(funcVar);  // ❌ ReferenceError: funcVar is not defined


TYPE 3: BLOCK SCOPE
-------------------
'let' and 'const' are block-scoped (only accessible within { ... })
'var' is NOT block-scoped (leaks out of blocks)

EXAMPLE 1: let and const (BLOCK-SCOPED)
------
if (true) {
    let blockLet = 50;
    const blockConst = 60;
    console.log(blockLet, blockConst);  // ✅ 50, 60 (accessible here)
}

console.log(blockLet);    // ❌ ReferenceError: blockLet is not defined
console.log(blockConst);  // ❌ ReferenceError: blockConst is not defined


EXAMPLE 2: var (NOT BLOCK-SCOPED - LEAKS OUT)
------
if (true) {
    var blockVar = 70;
    console.log(blockVar);  // ✅ 70 (accessible here)
}

console.log(blockVar);  // ✅ 70 (LEAKS OUT - var is not block-scoped)


EXAMPLE 3: SHADOWING WITH let (Block-scoped)
------
let a = 10;  // Outer 'a'

{
    let a = 20;  // Inner 'a' (shadows outer 'a')
    console.log("Inside:", a);  // ✅ 20 (refers to block-scoped 'a')
}

console.log("Outside:", a);  // ✅ 10 (refers to outer 'a', unaffected)


EXAMPLE 4: SHADOWING WITH var (Function-scoped)
------
var x = 1;  // Global

{
    var x = 2;  // Same variable, NOT block-scoped
}

console.log(x);  // ✅ 2 (overwritten because var is function-scoped)


===============================================================================
                        PART 5: HOISTING
===============================================================================

HOISTING DEFINITION:
--------------------
Hoisting means JavaScript moves DECLARATIONS to the top of their scope during
the creation phase, BEFORE code execution.

IMPORTANT: Only DECLARATIONS are hoisted, NOT INITIALIZATIONS.


HOISTING WITH var:
------------------
var is hoisted AND initialized to 'undefined'

CODE AS WRITTEN:
    console.log(a);  // What will this print?
    var a = 10;

CODE AS JAVASCRIPT INTERPRETS IT:
    var a;           // Declaration hoisted
    console.log(a);  // undefined (initialization hasn't happened yet)
    a = 10;          // Initialization stays in place

OUTPUT: undefined ✅


HOISTING WITH let:
------------------
let is hoisted BUT NOT initialized (goes into Temporal Dead Zone)

CODE AS WRITTEN:
    console.log(age);  // What will this print?
    let age = 25;

OUTPUT: ❌ ReferenceError: Cannot access 'age' before initialization


HOISTING WITH const:
-------------------
const is hoisted BUT NOT initialized (goes into Temporal Dead Zone)

CODE AS WRITTEN:
    console.log(country);  // What will this print?
    const country = "India";

OUTPUT: ❌ ReferenceError: Cannot access 'country' before initialization


FUNCTION HOISTING:
------------------
Functions are hoisted COMPLETELY with their definitions

CODE AS WRITTEN:
    sayHello();  // Can we call before declaration?

    function sayHello() {
        console.log("Hello!");
    }

OUTPUT: ✅ "Hello!" (functions are fully hoisted)


FUNCTION EXPRESSIONS ARE NOT HOISTED:
------
    greet();  // What will this print?

    var greet = function() {
        console.log("Hi!");
    };

OUTPUT: ❌ TypeError: greet is not a function
REASON: Only the 'var' is hoisted (to undefined), not the function definition


===============================================================================
                    PART 6: TEMPORAL DEAD ZONE (TDZ)
===============================================================================

TEMPORAL DEAD ZONE DEFINITION:
------------------------------
The Temporal Dead Zone (TDZ) is the time between entering a scope and initializing
a 'let' or 'const' variable. During this time, accessing the variable throws a
ReferenceError.

KEY POINTS:
- Variables are hoisted but NOT initialized
- Accessing them before initialization causes ReferenceError
- TDZ ends when the line of declaration is executed


EXAMPLE 1: let in Temporal Dead Zone
-----
{
    // TDZ for 'city' starts here
    // console.log(city); ❌ ReferenceError: Cannot access 'city' before initialization
    let city = "Delhi";  // TDZ ends here
    console.log(city);   // ✅ "Delhi" (now accessible)
}


EXAMPLE 2: const in Temporal Dead Zone
-----
{
    // TDZ for 'country' starts here
    // console.log(country); ❌ ReferenceError
    const country = "India";  // TDZ ends here (and must be initialized)
    console.log(country);     // ✅ "India"
}


EXAMPLE 3: Nested Scopes and TDZ
-----
let x = 100;  // Outer scope

{
    // TDZ for inner 'x' starts here
    // console.log(x); ❌ ReferenceError (not accessing outer x, inner x is in TDZ)
    let x = 200;  // TDZ ends here
    console.log(x);  // ✅ 200
}

console.log(x);  // ✅ 100 (outer x, unaffected)


WHY TDZ EXISTS:
---------------
TDZ is a safeguard to catch bugs. It prevents using variables before they are
properly declared and initialized, making code more predictable and safe.


===============================================================================
                        PART 7: GLOBAL EXECUTION CONTEXT (GEC)
===============================================================================

GLOBAL EXECUTION CONTEXT DEFINITION:
------------------------------------
When a JavaScript program starts, the JS engine creates a Global Execution Context.
The GEC has two phases:
1. Creation Phase
2. Execution Phase


CREATION PHASE:
---------------
- Memory is allocated for variables and functions
- Variables declared with 'var' are hoisted and initialized to 'undefined'
- Functions are hoisted with their complete definitions
- 'let' and 'const' are hoisted but NOT initialized (go into Temporal Dead Zone)
- The global object (window in browsers, global in Node.js) is created
- 'this' is set to the global object


EXECUTION PHASE:
----------------
- Code is executed line by line
- Variables are assigned actual values
- Function calls create their own execution contexts (pushed to Call Stack)
- Return values are processed


EXAMPLE:
--------
console.log(myName);    // undefined (hoisted, but value not yet assigned)
var myName = "Rahul";
console.log(myName);    // "Rahul"

sayHello();  // "Hello!" (function is fully hoisted)

function sayHello() {
    console.log("Hello!");
}

BEHIND THE SCENES:
- Creation Phase: var myName is initialized to undefined, sayHello function is stored
- Execution Phase: Line 1 prints undefined, Line 2 assigns "Rahul", Line 3 calls function


===============================================================================
                    PART 8: REASSIGNMENT vs REDECLARATION
===============================================================================

REASSIGNMENT:
-------------
Reassignment means changing the VALUE of a variable that already exists.

var a = 10;
a = 20;      // ✅ Reassignment (changing value)

let b = 30;
b = 40;      // ✅ Reassignment (changing value)

const c = 50;
c = 60;      // ❌ Reassignment NOT allowed for const


REDECLARATION:
--------------
Redeclaration means declaring the same variable name again.

var a = 10;
var a = 20;   // ✅ Redeclaration allowed with var

let b = 30;
let b = 40;   // ❌ Redeclaration NOT allowed with let

const c = 50;
const c = 60; // ❌ Redeclaration NOT allowed with const


COMPARISON TABLE:
-----------------
┌─────────────────────┬────────┬────────┬────────┐
│ Operation           │ var    │ let    │ const  │
├─────────────────────┼────────┼────────┼────────┤
│ Reassignment        │ ✅     │ ✅     │ ❌     │
│ Redeclaration       │ ✅     │ ❌     │ ❌     │
├─────────────────────┼────────┼────────┼────────┤
│ var a = 10;         │        │        │        │
│ var a = 20;         │ ✅     │ N/A    │ N/A    │
│ a = 30;             │ ✅     │ ✅     │ ❌     │
└─────────────────────┴────────┴────────┴────────┘


===============================================================================
                        PART 9: BEST PRACTICES
===============================================================================

1. ✅ ALWAYS USE 'let' or 'const' (AVOID 'var')
   - var causes confusion with scoping and hoisting
   - let and const have clearer, more predictable behavior
   - Modern JavaScript strongly prefers let/const

2. ✅ USE 'const' BY DEFAULT
   - Prevents accidental reassignment
   - Shows intent: this value should not change
   - If you need to reassign, then use let

3. ✅ USE 'let' WHEN YOU NEED REASSIGNMENT
   - Only when the value will definitely change

4. ✅ USE CAMELCASE FOR VARIABLE NAMES
   - firstName, accountId, userEmail (not first_name, account_id)

5. ✅ DECLARE VARIABLES CLOSE TO WHERE THEY'RE USED
   - Don't declare everything at the top
   - Improves code readability

6. ❌ AVOID GLOBAL VARIABLES
   - Creates tight coupling
   - Makes code hard to test and maintain
   - Use function/block scope instead

7. ✅ INITIALIZE VARIABLES WHEN DECLARING THEM
   - Avoid undefined values if possible
   - Makes code more predictable


EXAMPLE OF BEST PRACTICES:
--------------------------
// ❌ Bad
var name;
var age;
var email;
// ... 100 lines of code ...
name = "Rahul";
age = 25;
email = "rahul@example.com";

// ✅ Good
const name = "Rahul";
const age = 25;
const email = "rahul@example.com";

// ✅ Good (if value changes)
let userCount = 0;
userCount++;  // Reassignment when needed


===============================================================================
                        PART 10: CONSOLE OUTPUT EXAMPLE
===============================================================================

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
let accountState;
var id;
let id2;

console.log(accountId, accountEmail, accountPassword, accountState, id, id2);
// Output: 144553, hitesh@google.com, 12345, undefined, undefined, undefined

console.table([accountId, accountEmail, accountPassword, accountState, id, id2]);
// Output: Displays data in a formatted table


===============================================================================
                            SUMMARY TABLE
===============================================================================

┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│ USE const        → By default, for values that won't change               │
│ USE let          → When you need to reassign a variable                   │
│ AVOID var        → Avoid in modern JavaScript (use let/const instead)      │
│                                                                            │
│ SCOPE:           → let & const are block-scoped, var is function-scoped   │
│ HOISTING:        → All are hoisted, but var initializes to undefined      │
│ TDZ:             → let & const go into Temporal Dead Zone until executed   │
│                                                                            │
│ REASSIGN:        → const ❌, let ✅, var ✅                               │
│ REDECLARE:       → const ❌, let ❌, var ✅                               │
│                                                                            │
│ NAMING:          → Use camelCase (myVariable, not my_variable)            │
│ RULES:           → Start with letter/_ /$ , no spaces, no reserved words  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘

===============================================================================
*/