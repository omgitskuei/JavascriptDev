/**
JavaScript Best Practices
https://www.w3schools.com/js/js_best_practices.asp
 */



/**
Avoid global variables, avoid new, avoid ==, avoid eval()
Avoid Global Variables
Minimize the use of global variables.
This includes all data types, objects, and functions.
Global variables and functions can be overwritten by other scripts.
 */



/**
Use local variables instead, and learn how to use closures.
Always Declare Local Variables - Strict mode does not allow undeclared variables.
All variables used in a function should be declared as local variables.
Local variables must be declared with the var keyword or the let keyword, otherwise they will become global variables.
 */



/**
Declarations on Top - It is a good coding practice to put all declarations at the top of each script or function.
This will give code a cleaner look, also Provides a single place to look for local variables
Make it easier to avoid unwanted (implied) global variables
Reduce the possibility of unwanted re-declarations
By default, JavaScript moves all declarations to the top anyways (see 'JavaScript Hoisting').
 */
var firstName, lastName, price, discount, fullPrice;        // Declare at the beginning
firstName = "John";                                         // Use later
lastName = "Doe";
price = 19.90;
discount = 0.10;
fullPrice = price - discount;

// This also goes for loop variables:
var i;                                                      // Declare at the beginning
for (i = 0; i < 5; i++) {                                   // Use later
    // looped code
}



/**
Initialize Variables - It is a good coding practice to initialize variables when you declare them.
This willGive cleaner code
Provide a single place to initialize variables
Avoid undefined values
 */
// Declare and initiate at the beginning
// Initializing variables provides an idea of the intended use (and intended data type).
var firstName = "",
lastName = "",
price = 0,
discount = 0,
fullPrice = 0,
myArray = [],
myObject = {};



/**
Never Declare Number, String, or Boolean Objects
Always treat numbers, strings, or booleans as primitive values. Not as objects.
Declaring these types as objects, slows down execution speed, and produces nasty side effects:
 */
var x = "John";                                             // typeof = String
var y = new String("John");                                 // typeof = Object
(x === y)                                                   // FALSE

var x = new String("John");                                 // typeof = Object
var y = new String("John");                                 // typeof = Object
(x == y)                                                    // FALSE, CANNOT compare objects.



/**
Don't Use new Object()
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
*/
var x1 = {};                                                // new object
var x2 = "";                                                // new primitive string
var x3 = 0;                                                 // new primitive number
var x4 = false;                                             // new primitive boolean
var x5 = [];                                                // new array object
var x6 = /()/;                                              // new regexp object
var x7 = function(){};                                      // new function object



/**
Beware of Automatic Type Conversions
Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
JavaScript is loosely typed.
A variable can contain different data types, and a variable can change its data type:
*/
var x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number

// When doing mathematical operations, JavaScript can convert numbers to strings:
var x = 5 + 7;                                              // x.valueOf() is 12,  typeof x is a number
var x = 5 + "7";                                            // x.valueOf() is 57,  typeof x is a string
var x = "5" + 7;                                            // x.valueOf() is 57,  typeof x is a string
var x = 5 - 7;                                              // x.valueOf() is -2,  typeof x is a number
var x = 5 - "7";                                            // x.valueOf() is -2,  typeof x is a number
var x = "5" - 7;                                            // x.valueOf() is -2,  typeof x is a number
var x = 5 - "x";                                            // x.valueOf() is NaN, typeof x is a number

// Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):
// Example
var stringMinusString = "Hello" - "Dolly"                   // returns NaN



/**
Use === Comparison
The == comparison operator always converts (to matching types) before comparison.
The === operator forces comparison of both values and type:
 */
0 == "";                                                    // true
1 == "1";                                                   // true
1 == true;                                                  // true

0 === "";                                                   // false
1 === "1";                                                  // false
1 === true;                                                 // false




/**
Use Parameter Defaults
If a function is called with a missing argument, the value of the missing argument is set to undefined.
Undefined values can break your code. It is a good habit to assign default values to arguments.
 */
function myFunction(x, y) {                                 // param 2 (y) may not be given
  if (y === undefined) {                                    // set y default to 0
    y = 0;
  }
}

function (a=1, b=1) {                                       // ECMAScript 2015 allows default parameters in the function call
    /*function code*/;
}



/**
End Your Switches with Defaults
Always end your switch statements with a default. Even if you think there is no need for it.
 */
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}



/**
Avoid Using eval()
The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
Because it allows arbitrary code to be run, it also represents a security problem. Similar in nature to how SQL injections happen.
 */


