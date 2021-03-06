/**
 * https://www.w3schools.com/js/js_mistakes.asp
 * JavaScript Common Mistakes
 * This chapter points out some common JavaScript mistakes.
 */

/**
 * Assignment Operator (=) is NOT a comparison operator (==), (===)
 */
// Returns false (as expected) because x is not equal to 10:
var x = 0;
if (x == 10) { }

// Returns true (not as expected), because 10 is true:
var x = 0;
if (x = 10) { }

// Returns false (maybe not as expected), because 0 is false:
var x = 0;
if (x = 0)

/**
 * Expecting Loose Comparison
 */
// In regular comparison, data type does not matter. Returns true.
  var x = 10;
var y = "10";
console.log(x == y);

// In strict comparison, data type does matter. Returns false.
var x = 10;
var y = "10";
if (x === y) { }

// switch statements ALWAYS use STRICT comparison:
var x = 10;
switch (x) {
  case 10: alert("Hello");    // will run
}
var x = 10;
switch (x) {
  case "10": alert("Hello");  // will NOT run
}

/**
 * Addition != Concatenation
 * In JavaScript both operations use the same + operator.
 */
var x = 10 + 5;          // x = 15
var x = 10 + "5";        // x = "105"

/**
 * Misunderstanding Floats
 * All numbers in JavaScript are stored as 64-bits Floating point numbers(Floats).
 *

All programming languages, including JavaScript, have difficulties with precise floating point values:

var x = 0.1;
var y = 0.2;
var z = x + y            // the result in z will not be 0.3
To solve the problem above, it helps to multiply and divide:

Example
var z = (x * 10 + y * 10) / 10;       // z will be 0.3
Breaking a JavaScript String
JavaScript will allow you to break a statement into two lines:

Example 1
var x =
  "Hello World!";
But, breaking a statement in the middle of a string will not work:

Example 2
var x = "Hello
World!";
You must use a "backslash" if you must break a statement in a string:

Example 3
var x = "Hello \
World!";
Misplacing Semicolon
Because of a misplaced semicolon, this code block will execute regardless of the value of x:

if (x == 19);
{
  // code block
}
Breaking a Return Statement
It is a default JavaScript behavior to close a statement automatically at the end of a line.

Because of this, these two examples will return the same result:

Example 1
function myFunction(a) {
  var power = 10
  return a * power
}
Example 2
function myFunction(a) {
  var power = 10;
  return a * power;
}
JavaScript will also allow you to break a statement into two lines.

Because of this, example 3 will also return the same result:

Example 3
function myFunction(a) {
  var
    power = 10;
  return a * power;
}
But, what will happen if you break the return statement in two lines like this:

Example 4
function myFunction(a) {
  var
    power = 10;
  return
  a * power;
}
The function will return undefined!

Why ? Because JavaScript thought you meant:

Example 5
function myFunction(a) {
  var
    power = 10;
  return;
  a * power;
}
Explanation
If a statement is incomplete like:

var
  JavaScript will try to complete the statement by reading the next line:

power = 10;
But since this statement is complete:

return
JavaScript will automatically close it like this:

return;
This happens because closing(ending) statements with semicolon is optional in JavaScript.

JavaScript will close the return statement at the end of the line, because it is a complete statement.

Never break a return statement.

Accessing Arrays with Named Indexes
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays(or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays use numbered indexes:

Example
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;       // person.length will return 3
var y = person[0];           // person[0] will return "John"
In JavaScript, objects use named indexes.

If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.

After the automatic redefinition, array methods and properties will produce undefined or incorrect results:

Example:
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;      // person.length will return 0
var y = person[0];          // person[0] will return undefined
Ending Definitions with a Comma
Trailing commas in object and array definition are legal in ECMAScript 5.

Object Example:
person = { firstName: "John", lastName: "Doe", age: 46, }
Array Example:
points = [40, 100, 1, 5, 25, 10,];
WARNING!!

Internet Explorer 8 will crash.

JSON does not allow trailing commas.

  JSON:
person = { "firstName": "John", "lastName": "Doe", "age": 46 }
JSON:
points = [40, 100, 1, 5, 25, 10];
Undefined is Not Null
JavaScript objects, variables, properties, and methods can be undefined.

In addition, empty JavaScript objects can have the value null.

This can make it a little bit difficult to test if an object is empty.

You can test if an object exists by testing if the type is undefined:

Example:
if (typeof myObj === "undefined")
  But you cannot test if an object is null, because this will throw an error if the object is undefined:

Incorrect:
if (myObj === null)
  To solve this problem, you must test if an object is not null, and not undefined.

But this can still throw an error:

Incorrect:
if (myObj !== null && typeof myObj !== "undefined")
  Because of this, you must test for not undefined before you can test for not null:

    Correct:
    if (typeof myObj !== "undefined" && myObj !== null)
*/