/**
 * 
 * JavaScript Performance - How to speed up your JavaScript code.
 * 
 * 1) Reduce Activity in Loops
 * 2) Reduce DOM Access
 * 3) Reduce DOM Size
 * 4) Avoid Unnecessary Variables
 * 5) Delay JavaScript Loading
 * 6) Avoid using the "With" keyword
 */ 

/**
 * 1) Reduce Activity in Loops
 * Loops are often used in programming.
 * Each statement in a loop, including the for statement, is executed for EACH ITERATION of the loop.
 * this means; Statements or assignments that can be placed outside the loop will make the loop run faster.
 */
// Bad:
var i;
for (i = 0; i < arr.length; i++) {    // arr.length is accessed EACH TIME the loop is iterated.
    // ...
}
// Better Code:
var i;
var l = arr.length;
for (i = 0; i < l; i++) {             // Accesses the length property outside the loop and makes the loop run faster.
    // ...
}

/**
 * 2) Reduce DOM Access
 * Accessing the HTML DOM is very slow, compared to other JavaScript statements.
 * If you expect to access a DOM element several times, access it once, and use it as a local variable:
 */
// Example
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";              // Access the DOM via the variable, instead of repeatedly calling document.getElement...

/**
 * 3) Reduce DOM Size
 * Keep the number of elements in the HTML DOM small.
 * This will always improve page loading, and speed up rendering (page display), especially on smaller devices.
 * Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.
 */


/**
 * 4) Avoid Unnecessary Variables
 * Don't create new variables if you don't plan to save values.
 */
// Replace this code:
var fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
// With this:
document.getElementById("demo").innerHTML = firstName + " " + lastName;

/**
 * 5) Delay JavaScript Loading
 * Putting your scripts at the bottom of the page body lets the browser load the page first.
 * Since the HTTP specification defines that browsers should not download more than two components in parallel,
 * while a script is downloading, the browser will not start any other downloads. 
 * Parsing and rendering activity might be blocked.
 * 
 * An alternative is to use defer="true" in the script tag.
 * The defer attribute specifies that the script should be executed after the page has finished parsing, 
 * but it only works for external scripts.
 * 
 * Another alternative is adding your script to the page programmically, after the page has loaded via window.onload()
 */



Example
<script>
window.onload = function() {
  var element = document.createElement("script");
  element.src = "myScript.js";
  document.body.appendChild(element);
};
</script>
Avoid Using with
Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

The with keyword is not allowed in strict mode.