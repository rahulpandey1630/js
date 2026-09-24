/*===============================================================================
              JAVASCRIPT ARITHMETIC OPERATORS – COMPLETE GUIDE
              All Confusing Cases, Coercion Rules & Interview Traps
===============================================================================

OVERVIEW OF ARITHMETIC OPERATORS:
----------------------------------
+    Addition / String Concatenation
-    Subtraction (NUMERIC ONLY)
*    Multiplication (NUMERIC ONLY)
/    Division (NUMERIC ONLY)
%    Modulus / Remainder (NUMERIC ONLY)
**   Exponentiation / Power
^    Bitwise XOR (NOT power in JavaScript)


===============================================================================
                    PART 1: THE '+' OPERATOR (SPECIAL CASE)
===============================================================================

GOLDEN RULE FOR '+' OPERATOR (MOST IMPORTANT):
----------------------------------------------
If ANY operand is or becomes a STRING → concatenation
Otherwise → numeric addition

JavaScript evaluates expressions LEFT TO RIGHT.


SECTION 1.1: + WITH NUMBERS
----------------------------

1 + 2            // 3
10 + 20          // 30


SECTION 1.2: + WITH STRINGS
----------------------------

"1" + 2          // "12"
1 + "2"          // "12"
"a" + "b"        // "ab"
"a" + 1 + 2      // "a12"
1 + 2 + "a"      // "3a"

EXPLANATION:
- "a" + 1 + 2: Left-to-right evaluation
  Step 1: "a" + 1 = "a1" (string concatenation)
  Step 2: "a1" + 2 = "a12" (string concatenation)

- 1 + 2 + "a": Left-to-right evaluation
  Step 1: 1 + 2 = 3 (numeric addition)
  Step 2: 3 + "a" = "3a" (string concatenation)


SECTION 1.3: + WITH BOOLEAN
----------------------------

true + 1         // 2   (true → 1)
false + 1        // 1   (false → 0)
true + false     // 1
true + "1"       // "true1"


SECTION 1.4: + WITH NULL
-------------------------

null + 1         // 1   (null → 0)
1 + null         // 1
null + null      // 0

null + "a"       // "nulla"
"a" + null       // "anull"


SECTION 1.5: + WITH UNDEFINED
------------------------------

undefined + 1    // NaN
1 + undefined    // NaN
undefined + null // NaN

undefined + "a"  // "undefineda"
"a" + undefined  // "aundefined"


SECTION 1.6: + WITH NaN
------------------------

NaN + 1          // NaN
NaN + NaN        // NaN
NaN + "a"        // "NaNa"


SECTION 1.7: + WITH OBJECTS
----------------------------

{} + {}          // "[object Object][object Object]"
{} + 1           // "[object Object]1"
1 + {}           // "1[object Object]"

{} + null        // "[object Object]null"
null + {}        // "null[object Object]"

{} + undefined   // "[object Object]undefined"
undefined + {}   // "undefined[object Object]"

{} + NaN         // "[object Object]NaN"
NaN + {}         // "NaN[object Object]"

const a = {};
const b = {};
a + b            // "[object Object][object Object]"

EXPLANATION:
- Objects are converted using toString()
- Default object → "[object Object]"


SECTION 1.8: + WITH ARRAYS
---------------------------

[] + []          // ""
[1] + [2]        // "12"
[1,2] + [3,4]    // "1,23,4"
[] + 1           // "1"
1 + []           // "1"

[] + {}          // "[object Object]"
{} + []          // 0   (treated as block in console)

EXPLANATION:
- Array → join(",") then concatenate
- [] becomes empty string ""
- [1] becomes "1"
- [1,2] becomes "1,2"


SECTION 1.9: + WITH CHARACTER
------------------------------

'a' + 1          // "a1"
'a' + 'b'        // "ab"


===============================================================================
                    PART 2: THE '-' OPERATOR (NUMERIC ONLY)
===============================================================================

IMPORTANT RULE (VERY IMPORTANT):
--------------------------------
The '-' operator ONLY performs NUMERIC subtraction
It NEVER does string concatenation
JavaScript ALWAYS tries to convert operands to NUMBERS


SECTION 2.1: - WITH NUMBERS
----------------------------

5 - 2            // 3
10 - 20          // -10
0 - 5            // -5


SECTION 2.2: - WITH STRINGS (NUMERIC STRINGS)
----------------------------------------------

"5" - 2          // 3
10 - "2"         // 8
"10" - "3"       // 7

REASON:
- Strings are converted to numbers


SECTION 2.3: - WITH STRINGS (NON-NUMERIC)
------------------------------------------

"a" - 1          // NaN
"abc" - 2        // NaN


SECTION 2.4: - WITH BOOLEAN
----------------------------

true - 1         // 0   (true → 1)
false - 1        // -1  (false → 0)
true - false     // 1


SECTION 2.5: - WITH NULL
-------------------------

null - 1         // -1  (null → 0)
1 - null         // 1
null - null      // 0


SECTION 2.6: - WITH UNDEFINED
------------------------------

undefined - 1    // NaN
1 - undefined    // NaN
undefined - null // NaN


SECTION 2.7: - WITH NaN
------------------------

NaN - 1          // NaN
1 - NaN          // NaN
NaN - NaN        // NaN


SECTION 2.8: - WITH OBJECTS
----------------------------

{} - 1           // NaN
1 - {}           // NaN
{} - {}          // NaN

{} - null        // NaN
null - {}        // NaN

{} - undefined   // NaN
undefined - {}   // NaN

{} - NaN         // NaN
NaN - {}         // NaN

EXPLANATION:
- Objects are converted to primitives
- Default object → NaN in numeric context


SECTION 2.9: - WITH ARRAYS
---------------------------

[] - 1           // -1   ([] → 0)
[5] - 1          // 4
[1] - [1]        // 0
[1,2] - 1        // NaN
[] - []          // 0

[] - null        // 0    ([] → 0, null → 0)
null - []        // 0

[] - undefined   // NaN
undefined - []   // NaN


SECTION 2.10: - WITH CHARACTER
-------------------------------

'a' - 1          // NaN
'5' - 1          // 4
'5' - '2'        // 3


===============================================================================
                PART 3: MULTIPLICATION (*) OPERATOR
===============================================================================

IMPORTANT:
----------
* ALWAYS forces NUMERIC conversion
NO string concatenation happens


SECTION 3.1: * WITH NUMBERS
----------------------------

5 * 2            // 10
10 * 20          // 200
0 * 5            // 0


SECTION 3.2: * WITH STRINGS
----------------------------

"5" * 2            // 10
2 * "5"            // 10
"5" * "2"          // 10
"a" * 2            // NaN


SECTION 3.3: * WITH BOOLEAN
----------------------------

true * 2           // 2   (true → 1)
false * 2          // 0   (false → 0)
true * false       // 0
true * true        // 1


SECTION 3.4: * WITH NULL
-------------------------

null * 5           // 0   (null → 0)
5 * null           // 0


SECTION 3.5: * WITH UNDEFINED
------------------------------

undefined * 5      // NaN
5 * undefined      // NaN


SECTION 3.6: * WITH ARRAYS
---------------------------

[] * 2             // 0   ([] → 0)
[5] * 2            // 10
[1,2] * 2          // NaN
[1] * [2]          // 2


SECTION 3.7: * WITH OBJECTS
----------------------------

{} * 2             // NaN
2 * {}             // NaN
{} * {}            // NaN


===============================================================================
                    PART 4: DIVISION (/) OPERATOR
===============================================================================

IMPORTANT:
----------
/ ALWAYS forces NUMERIC conversion
Special cases: Division by zero = Infinity


SECTION 4.1: / WITH NUMBERS
----------------------------

10 / 2             // 5
10 / 3             // 3.333...
15 / 3             // 5


SECTION 4.2: / WITH STRINGS
----------------------------

"10" / "2"         // 5
"10" / 2           // 5
10 / "2"           // 5
"a" / 2            // NaN


SECTION 4.3: / BY ZERO (SPECIAL CASES)
--------------------------------------

5 / 0              // Infinity
-5 / 0             // -Infinity
0 / 0              // NaN
0 / 5              // 0


EXPLANATION:
- Division by 0 produces Infinity (not an error)
- 0 / 0 produces NaN (undefined result)


SECTION 4.4: / WITH BOOLEAN
----------------------------

true / 1           // 1
false / 1          // 0
true / false       // Infinity (1 / 0)


SECTION 4.5: / WITH NULL
-------------------------

null / 5           // 0
5 / null           // Infinity (5 / 0)
null / null        // NaN


SECTION 4.6: / WITH UNDEFINED
------------------------------

undefined / 5      // NaN
5 / undefined      // NaN


SECTION 4.7: / WITH ARRAYS
---------------------------

[] / 2             // 0
[10] / 2           // 5
[10] / [2]         // 5
[1,2] / 2          // NaN


SECTION 4.8: / WITH OBJECTS
----------------------------

{} / 2             // NaN
2 / {}             // NaN
{} / {}            // NaN


===============================================================================
                    PART 5: MODULUS (%) OPERATOR
===============================================================================

IMPORTANT:
----------
% ALWAYS forces NUMERIC conversion
Returns remainder after division


SECTION 5.1: % WITH NUMBERS
----------------------------

10 % 3             // 1
10 % 2             // 0
7 % 2              // 1
-10 % 3            // -1 (sign follows dividend)


SECTION 5.2: % WITH STRINGS
----------------------------

"10" % "3"         // 1
"10" % 3           // 1
10 % "3"           // 1
"a" % 2            // NaN


SECTION 5.3: % BY ZERO (SPECIAL CASE)
-------------------------------------

5 % 0              // NaN
0 % 5              // 0


SECTION 5.4: % WITH BOOLEAN
----------------------------

true % 2           // 1
false % 2          // 0
true % false       // NaN (true % 0)


SECTION 5.5: % WITH NULL
-------------------------

null % 5           // 0
5 % null           // NaN
null % null        // NaN


SECTION 5.6: % WITH UNDEFINED
------------------------------

undefined % 5      // NaN
5 % undefined      // NaN


SECTION 5.7: % WITH ARRAYS
---------------------------

[] % 2             // 0
[5] % 2            // 1
[10] % 3           // 1
[1,2] % 2          // NaN


SECTION 5.8: % WITH OBJECTS
----------------------------

{} % 2             // NaN
2 % {}             // NaN


===============================================================================
                PART 6: EXPONENTIATION (**) OPERATOR
===============================================================================

IMPORTANT:
----------
** is used for power/exponentiation (NOT ^)
^ is BITWISE XOR, NOT power


SECTION 6.1: ** WITH NUMBERS
-----------------------------

2 ** 3             // 8
3 ** 2             // 9
10 ** 2            // 100
2 ** 0             // 1
2 ** -1            // 0.5


SECTION 6.2: ** WITH STRINGS
-----------------------------

"2" ** "3"         // 8
"2" ** 3           // 8
2 ** "3"           // 8
"a" ** 2           // NaN


SECTION 6.3: ** WITH BOOLEAN
-----------------------------

true ** 2          // 1
false ** 2         // 0
2 ** true          // 2


SECTION 6.4: ** WITH NULL
--------------------------

null ** 2          // 0
2 ** null          // 1


SECTION 6.5: ** WITH UNDEFINED
-------------------------------

undefined ** 2     // NaN
2 ** undefined     // NaN


SECTION 6.6: ** WITH SPECIAL VALUES
-----------------------------------

(-1) ** 0.5        // NaN (complex number)
0 ** -1            // Infinity
Infinity ** 2      // Infinity


===============================================================================
            PART 7: BITWISE XOR (^) OPERATOR - NOT POWER!
===============================================================================

❗ VERY IMPORTANT: ^ is NOT exponentiation in JavaScript ❗

GOLDEN RULE:
-----------
^ performs BITWISE XOR (exclusive OR at binary level)
** is used for exponentiation/power
^ is NOT power


SECTION 7.1: ^ WITH NUMBERS
----------------------------

5 ^ 3              // 6

EXPLANATION:
5  → 101 (binary)
3  → 011 (binary)
XOR → 110 (binary) = 6 (decimal)

How XOR works:
0 XOR 0 = 0
0 XOR 1 = 1
1 XOR 0 = 1
1 XOR 1 = 0

MORE EXAMPLES:
12 ^ 5             // 9
12 → 1100
5  → 0101
XOR→ 1001 = 9

8 ^ 3              // 11
8  → 1000
3  → 0011
XOR→ 1011 = 11


SECTION 7.2: ^ WITH BOOLEAN
----------------------------

true ^ false       // 1
true ^ true        // 0
false ^ false      // 0

EXPLANATION:
true = 1, false = 0
1 ^ 0 = 1
1 ^ 1 = 0
0 ^ 0 = 0


SECTION 7.3: ^ WITH STRINGS (NUMERIC)
-------------------------------------

"5" ^ 1            // 4   ("5" → 5)
"5" ^ "3"          // 6
"10" ^ 5           // 15


SECTION 7.4: ^ WITH NULL
-------------------------

null ^ 1           // 1   (null → 0)
5 ^ null           // 5

EXPLANATION:
null converts to 0
0 ^ 1 = 1
5 ^ 0 = 5


SECTION 7.5: ^ WITH UNDEFINED
------------------------------

undefined ^ 1      // NaN
5 ^ undefined      // NaN


SECTION 7.6: ^ COMMON INTERVIEW TRAP
------------------------------------

2 ^ 3              // 1 ❌ (NOT power)

INCORRECT THINKING: 2 to the power of 3 = 8
ACTUAL RESULT: 2 ^ 3 (bitwise XOR)
2 → 010
3 → 011
XOR→ 001 = 1

CORRECT WAY TO GET POWER:
2 ** 3             // 8 ✅


===============================================================================
                    PART 8: IMPORTANT CONVERSION RULES
===============================================================================

UNIFIED CONVERSION TABLE:
------------------------

When using arithmetic operators (-, *, /, %, **, ^):

Value          → Converts To
-----------       -----------
"5" (numeric)     5
"abc" (non-num)   NaN
true              1
false             0
null              0
undefined         NaN
{} (object)       NaN
[] (empty)        0
[5] (single)      5
[1,2] (multi)     NaN
NaN               NaN

NOTE: The '+' operator is DIFFERENT:
- If any operand is string → concatenation
- Strings don't convert to numbers with '+'
- Objects and arrays convert to "[object Object]" or their joined string


CONVERSION SUMMARY BY TYPE:
---------------------------

STRING:
- With '+': No conversion → concatenates as string
- With -, *, /, %, **, ^: Convert to number (NaN if non-numeric)

BOOLEAN:
- true → 1
- false → 0

NULL:
- Always → 0 (except with '+' string concatenation)

UNDEFINED:
- Always → NaN (except with '+' string concatenation)

OBJECTS:
- With '+': Convert to "[object Object]"
- With -, *, /, %, **, ^: → NaN

ARRAYS:
- With '+': Convert to joined string ([] = "", [1,2] = "1,2")
- With -, *, /, %, **, ^: Single element arrays convert to number, else NaN


===============================================================================
                PART 9: COMMON INTERVIEW TRAPS & GOTCHAS
===============================================================================

TRAP 1: CONFUSION BETWEEN ^ AND **
-----------------------------------

2 ^ 3      // 1 ❌ (Bitwise XOR, not power)
2 ** 3     // 8 ✅ (Correct exponentiation)

WHAT HAPPENS:
2 ^ 3 does bitwise XOR:
2 → 010
3 → 011
    001 = 1


TRAP 2: PLUS WITH DIFFERENT TYPES
----------------------------------

"1" + 2           // "12" (string concatenation)
1 + "2"           // "12" (string concatenation)
1 + 2             // 3 (numeric addition)
"1" + 2 + 3       // "123"
1 + 2 + "3"       // "33"


TRAP 3: NULL AND UNDEFINED BEHAVIOR
-----------------------------------

null == 0         // false (null only equals null and undefined)
null >= 0         // true (null converts to 0 in comparison)
null + 1          // 1 (null converts to 0)

undefined + 1     // NaN
undefined == 0    // false


TRAP 4: DIVISION BY ZERO
------------------------

5 / 0             // Infinity
-5 / 0            // -Infinity
0 / 0             // NaN
5 % 0             // NaN


TRAP 5: ARRAY AND OBJECT COERCION
---------------------------------

[] - 1            // -1 ([] converts to 0)
[5] - 1           // 4 (converts to 5)
{} - 1            // NaN (converts to NaN)
[] + {}           // "[object Object]"


TRAP 6: STRING CONCATENATION CHAIN
-----------------------------------

"a" + 1 + 2       // "a12" (left-to-right)
1 + 2 + "a"       // "3a" (left-to-right)

Step by step for "a" + 1 + 2:
1. "a" + 1 = "a1" (string concat)
2. "a1" + 2 = "a12" (string concat)

Step by step for 1 + 2 + "a":
1. 1 + 2 = 3 (numeric)
2. 3 + "a" = "3a" (string concat)


TRAP 7: TYPEOF NULL BUG
-----------------------

typeof null        // "object" (JS bug)
typeof undefined   // "undefined"
null == undefined  // true
null === undefined // false


===============================================================================
                PART 10: OPERATOR PRECEDENCE & ASSOCIATIVITY
===============================================================================

ARITHMETIC OPERATOR PRECEDENCE (High to Low):
----------------------------------------------
1. ** (Exponentiation) - RIGHT associative
2. * / % (Multiplication, Division, Modulus) - LEFT associative
3. + - (Addition, Subtraction) - LEFT associative


EXAMPLES:
---------

2 + 3 * 4         // 14 (multiplication first: 3*4=12, then 2+12=14)
2 ** 3 ** 2       // 512 (right associative: 3**2=9, then 2**9=512)
10 - 5 - 2        // 3 (left associative: 10-5=5, then 5-2=3)
10 / 2 * 3        // 15 (left associative: 10/2=5, then 5*3=15)

WITH PARENTHESES:
---------
(2 + 3) * 4       // 20 (parentheses first: 2+3=5, then 5*4=20)
2 ** (3 ** 2)     // 512 (parentheses: 3**2=9, then 2**9=512)


===============================================================================
                        COMPREHENSIVE SUMMARY TABLE
===============================================================================

┌─────────────┬──────────────────┬────────────────────┬──────────────────────┐
│ Operator    │ Behavior          │ Concatenates?      │ Converts to Number?  │
├─────────────┼──────────────────┼────────────────────┼──────────────────────┤
│ +           │ Addition/Concat   │ YES (if string)    │ Only if no string    │
│ -           │ Subtraction only  │ NO                 │ YES, always          │
│ *           │ Multiplication    │ NO                 │ YES, always          │
│ /           │ Division          │ NO                 │ YES, always          │
│ %           │ Modulus           │ NO                 │ YES, always          │
│ **          │ Exponentiation    │ NO                 │ YES, always          │
│ ^           │ Bitwise XOR       │ NO                 │ YES (to integer)     │
└─────────────┴──────────────────┴────────────────────┴──────────────────────┘


SPECIAL VALUES BEHAVIOR:
-----------------------
┌────────────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ Value      │ + 5  │ - 5  │ * 5  │ / 5  │ % 5  │ ** 2 │
├────────────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ null       │ 5    │ -5   │ 0    │ 0    │ 0    │ 0    │
│ undefined  │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │
│ true       │ 6    │ 4    │ 5    │ 5    │ 1    │ 1    │
│ false      │ 5    │ -5   │ 0    │ 0    │ 0    │ 0    │
│ "5"        │ "55" │ 0    │ 25   │ 1    │ 0    │ 25   │
│ "abc"      │ 5abc │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │
│ []         │ 5    │ -5   │ 0    │ 0    │ 0    │ 0    │
│ [5]        │ "55" │ 0    │ 25   │ 1    │ 0    │ 25   │
│ {}         │ 5[O] │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │
│ NaN        │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │ NaN  │
└────────────┴──────┴──────┴──────┴──────┴──────┴──────┘

Legend: [O] = "[object Object]" appended


FINAL EXAM ONE-LINERS:
======================

+  operator: Performs string concatenation if ANY operand becomes a string;
            otherwise performs numeric addition with implicit type coercion.

-  operator: Always performs numeric subtraction and converts operands to
            numbers; it never performs concatenation.

*, /, %, ** operators: Always perform numeric operations and convert
                       operands to numbers; they never perform concatenation.

^  operator: Performs BITWISE XOR (NOT exponentiation); use ** for power.


===============================================================================*/