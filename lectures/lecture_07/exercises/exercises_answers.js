
// Lecture 7 Exercises - String Methods

/* In this exercise, you will practice working with string methods in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Declare a variable named 'str' and assign it a string value.
let str = "Hello, World!";
console.log("The string is: " + str);

// Exercise 2: Use the 'length' property to determine the length of the string.
// NOTE: A property is different from a method. A property is a value that is stored
// in an object, while a method is a function that is stored in an object.
// Do not use () after the property name when accessing a property.
let strLength = str.length;
console.log("The length of the string is: " + strLength);

// Exercise 3: Use the 'toUpperCase' method to convert the string to uppercase.
let strUpper = str.toUpperCase();
console.log("The string in uppercase is: " + strUpper);

// Exercise 4: Use the 'toLowerCase' method to convert the string to lowercase.
let strLower = str.toLowerCase();
console.log("The string in lowercase is: " + strLower);

// Exercise 5: Use the 'charAt' method to access the character at index 7.
let charAt7 = str.charAt(7);
console.log("The character at index 7 is: " + charAt7);

// Exercise 6: Use the 'indexOf' method to find the index of the first occurrence of 'o'.
let indexOfO = str.indexOf("o");
console.log("The index of the first occurrence of 'o' is: " + indexOfO);

// Exercise 7: Use the 'lastIndexOf' method to find the index of the last occurrence of 'o'.
let lastIndexOfO = str.lastIndexOf("o");
console.log("The index of the last occurrence of 'o' is: " + lastIndexOfO);

// Exercise 8: Use the 'includes' method to determine if the string contains 'World'.
let includesWorld = str.includes("World");
console.log("The string includes 'World': " + includesWorld);

// Exercise 9: Use the 'startsWith' method to determine if the string starts with 'Hello'.
let startsWithHello = str.startsWith("Hello");
console.log("The string starts with 'Hello': " + startsWithHello);

// Exercise 10: Use the 'endsWith' method to determine if the string ends with 'World'.
let endsWithWorld = str.endsWith("World");
console.log("The string ends with 'World': " + endsWithWorld);

// Exercise 11: Use the 'slice' method to extract the substring from index 7 to the end.
let sliceSubstring = str.slice(7);
console.log("The substring from index 7 to the end is: " + sliceSubstring);

// Exercise 12: Use the 'substring' method to extract the substring from index 7 to 10.
let substringSubstring = str.substring(7, 10);
console.log("The substring from index 7 to 10 is: " + substringSubstring);

// Exercise 13: Use the 'split' method to split the string into an array of substrings.
let splitArray = str.split(",");
console.log("The array of substrings is: " + splitArray);



