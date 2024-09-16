
// Lecture 9 Exercises - Arrays

/* In this exercise, you will practice working with arrays in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Declare an array named 'fruits' and assign it a list of fruits.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("The array of fruits is: " + fruits);

// Exercise 2: Use the 'length' property to determine the number of elements in
// the array. NOTE: The length property returns the number of elements in an
// array. It is an property, not a method, so it does not require parentheses.
let fruitsLength = fruits.length;
console.log("The number of fruits in the array is: " + fruitsLength);

// Exercise 3: Use the 'push' method to add a new fruit to the end of the array.
fruits.push("fig");
console.log("The array of fruits is: " + fruits);

// Exercise 4: Use the 'pop' method to remove the last fruit from the array.
fruits.pop();
console.log("The array of fruits is: " + fruits);

// Exercise 5: Use the 'unshift' method to add a new fruit to the beginning of the
// array.
fruits.unshift("apricot");
console.log("The array of fruits is: " + fruits);

// Exercise 6: Use the 'shift' method to remove the first fruit from the array.
fruits.shift();
console.log("The array of fruits is: " + fruits);

// Exercise 7: Use the 'splice' method to remove the second fruit from the array.
fruits.splice(1, 1);
console.log("The array of fruits is: " + fruits);

// Exercise 8: Use the 'slice' method to create a new array that contains only the
// first three fruits from the original array.
let firstThreeFruits = fruits.slice(0, 3);

// Exercise 9: Use the 'concat' method to combine the new array of fruits with the
// original array of fruits.
let combinedFruits = firstThreeFruits.concat(fruits);
console.log("The combined array of fruits is: " + combinedFruits);

// Exercise 10: Use the 'join' method to create a string that contains all the
// fruits in the array separated by commas.
let fruitsString = fruits.join(", ");
console.log("The string of fruits is: " + fruitsString);

// Exercise 11: Use the 'indexOf' method to find the index of the first occurrence
// of 'cherry' in the array.
let cherryIndex = fruits.indexOf("cherry");
console.log("The index of 'cherry' is: " + cherryIndex);

// Exercise 12: Use the 'lastIndexOf' method to find the index of the last occurrence
// of 'cherry' in the array.
let lastCherryIndex = fruits.lastIndexOf("cherry");
console.log("The last index of 'cherry' is: " + lastCherryIndex);

// Exercise 13: Use the 'includes' method to determine if the array contains 'date'.
let includesDate = fruits.includes("date");
console.log("The array includes 'date': " + includesDate);

// Exercise 14: Use the 'reverse' method to reverse the order of the elements in the
// array.
fruits.reverse();
console.log("The array of fruits is: " + fruits);

// Exercise 15: Use the 'sort' method to sort the elements of the array in
// alphabetical order.
fruits.sort();
console.log("The array of fruits is: " + fruits);