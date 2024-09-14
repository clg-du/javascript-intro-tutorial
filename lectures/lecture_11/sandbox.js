
// Lecture 11 - Type Conversion

// Type conversion is the process of converting a value from one data type to
// another. In JavaScript, type conversion can occur implicitly or explicitly.

// Implicit type conversion occurs when JavaScript automatically converts a value
// from one data type to another. This can happen when performing operations
// between values of different types, such as adding a number and a string.

// Explicit type conversion occurs when a value is explicitly converted from one
// data type to another using built-in functions or operators. This can be useful
// when working with values of different types.

// In this example, we demonstrate both implicit and explicit type conversion in
// JavaScript.

// Implicit type conversion
let num = 5;
let str = "5";
console.log("num + str: ", num + str);

// Explicit type conversion
let num = 5;
let str = "5";
console.log("Number(str) + num: ", Number(str) + num);

// In this example, we define a number and a string. When we add the number and
// the string together, JavaScript implicitly converts the string to a number
// before performing the addition. This is an example of implicit type conversion.

// We then use the Number() function to explicitly convert the string to a number
// before adding it to the original number. This is an example of explicit type
// conversion.

// Type conversion is a common operation in JavaScript and is used to convert
// values between different data types. Understanding how type conversion works
// can help you write more robust and predictable code.

// End of Lecture 11