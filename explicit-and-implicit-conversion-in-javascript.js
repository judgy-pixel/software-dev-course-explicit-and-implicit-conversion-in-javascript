/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; 
console.log("The result is: " + result);
// The original coding runs fine, but if we want it to use explicit coding,
// we need to add number in front of the string

let isValid = Boolean("false" === "true"); 
if (isValid) {
    console.log("This is valid!");
}
// The original coding results in "This is valid!" as strings are truthy.
// If we don't want that to run, we need to change it so that it compares
// "true" and "false". Since they are not the same, it doesn't run

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
// The original coding combined 25 with 5 instead of adding.
// If we change the string to a number, it adds them instead.

// EXAMPLES
// Implicit type conversion
let num = 10;
let str = "5";
let result = num + str; // number + string → string concatenation
console.log("Implicit Conversion:");
console.log("Before: num is", num, "(", typeof num, "), str is", str, "(", typeof str, ")");
console.log("After: result is", result, "(", typeof result, ")");

// Explicit type conversion
let value = undefined;
let converted = Number(value); // explicitly converting undefined → NaN
console.log("\nExplicit Conversion:");
console.log("Before: value is", value, "(", typeof value, ")");
console.log("After: converted is", converted, "(", typeof converted, ")");