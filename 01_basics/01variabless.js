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
