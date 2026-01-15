/**
 * JavaScript Variables: var, let, const – Notes
 *
 * --------------------------------------------------
 * Declaration vs Initialization
 *
 * Declaration  : Creating a variable name
 * Initialization: Assigning a value to the variable
 *
 * Example:
 * let x;        // declaration
 * x = 10;       // initialization
 *
 * --------------------------------------------------
 * var
 *
 * - Function scoped
 * - Can be re-declared
 * - Can be re-initialized
 * - Hoisted (initialized as undefined)
 *
 * Example:
 * var a = 10;   // declaration + initialization
 * var a = 20;   // re-declaration ✅
 * a = 30;       // re-initialization ✅
 *
 * --------------------------------------------------
 * let
 *
 * - Block scoped
 * - Cannot be re-declared in same scope
 * - Can be re-initialized
 * - Hoisted but in Temporal Dead Zone
 *
 * Example:
 * let b = 10;   // declaration + initialization
 * // let b = 20; // ❌ re-declaration not allowed
 * b = 30;       // re-initialization ✅
 *
 * --------------------------------------------------
 * const
 *
 * - Block scoped
 * - Must be initialized at declaration
 * - Cannot be re-declared
 * - Cannot be re-initialized
 *
 * Example:
 * const c = 10; // declaration + initialization required
 * // const c = 20; // ❌ re-declaration not allowed
 * // c = 30;       // ❌ re-initialization not allowed
 *
 * Note:
 * For objects/arrays, const allows value mutation but not reassignment.
 *
 * Example:
 * const obj = { name: "Rahul" };
 * obj.name = "Pandey"; // ✅ allowed
 * // obj = {};         // ❌ not allowed
 *
 * --------------------------------------------------
 * Quick Comparison Summary
 *
 * var   → re-declare ✅ | re-initialize ✅ | function scope
 * let   → re-declare ❌ | re-initialize ✅ | block scope
 * const → re-declare ❌ | re-initialize ❌ | block scope
 */





// let a;
// console.log(a) //undefined
// var b;
// console.log(b)  //undefined
// const c;
// console.log(c)


/**
 * Why JavaScript Does Not Execute Earlier Lines When `const` Has an Error
 *
 * JavaScript is NOT a pure line-by-line interpreter.
 * It runs code in TWO phases:
 *
 * --------------------------------------------------
 * Phase 1: Parsing (Compilation Phase)
 * - JavaScript engine reads the ENTIRE file first
 * - Checks for SYNTAX errors
 * - Builds AST (Abstract Syntax Tree)
 *
 * If ANY syntax error is found,
 * → execution is STOPPED completely
 * → no line of code is executed
 *
 * --------------------------------------------------
 * Phase 2: Execution Phase
 * - Code runs line by line
 * - This phase remember ONLY starts if parsing succeeds
 *
 * --------------------------------------------------
 * Why `const` causes this behavior
 *
 * Example:
 * let a;
 * console.log(a);
 * const b;   // ❌ SyntaxError
 *
 * - `const` MUST be initialized at declaration
 * - `const b;` is a SYNTAX ERROR
 * - Syntax errors are detected in PARSING phase
 *
 * Result:
 * - Execution phase never starts
 * - `console.log(a)` is NOT executed
 *
 * --------------------------------------------------
 * Syntax Error vs Runtime Error
 *
 * Syntax Error:
 * - Found during parsing
 * - Stops entire program before execution
 * - Example: const x;
 *
 * Runtime Error:
 * - Found during execution
 * - Previous lines DO execute
 *
 * Example:
 * let x = 10;
 * console.log(x); // runs
 * console.log(y); // runtime error
 *
 * --------------------------------------------------
 * Key Conclusion (Important)
 *
 * JavaScript is a parsed + interpreted (JIT) language,
 * not a pure interpreter.
 *
 * That is why syntax errors like invalid `const`
 * stop execution before any line runs.
 */
