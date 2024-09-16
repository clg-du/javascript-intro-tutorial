
// Lecture 17 Exercises - Callback Functions

/* In this exercise, you will practice working with callback functions in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1:  Write a function that takes a callback function as an argument and
// calls the callback function with a message.
function callCallback(callback) {
    callback("Hello, world!");
}

// Define a callback function
function logMessage(message) {
    console.log(message);
}

// Call the callCallback function with the logMessage callback
callCallback(logMessage);

// Exercise 2: Write a function that takes an array of numbers and a callback function
// as arguments, and calls the callback function with the sum of the numbers in the array. 

function sumNumbers(numbers, callback) {

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    callback(sum);
}

// Define a callback function
function logSum(sum) {
    console.log("The sum of the numbers is: " + sum);
}

// Call the sumNumbers function with an array of numbers and the logSum callback
sumNumbers([1, 2, 3, 4, 5], logSum);

// Exercise 3: Write a function that takes a string and a callback function as arguments,
// and calls the callback function with the reversed string.

function reverseString(str, callback) {
    
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    callback(reversed);
}

// Define a callback function
function logReversedString(reversed) {
    console.log("The reversed string is: " + reversed);
}

// Call the reverseString function with a string and the logReversedString callback
reverseString("hello", logReversedString);

// Exercise 4: Write a function that takes an array of strings and a callback function
// as arguments, and calls the callback function with the concatenated string.

function concatenateStrings(strings, callback) {

    let concatenated = "";
    for (let string of strings) {
        concatenated += string;
    }
    callback(concatenated);
}

// Define a callback function
function logConcatenatedString(concatenated) {
    console.log("The concatenated string is: " + concatenated);
}

// Call the concatenateStrings function with an array of strings and the logConcatenatedString callback
concatenateStrings(["hello", "world", "!"], logConcatenatedString);

// Exercise 5: Write a function that takes an array of numbers and a callback function
// as arguments, and calls the callback function with the maximum number in the array.

function findMaxNumber(numbers, callback) {
  
      let max = numbers[0];
      for (let number of numbers) {
          if (number > max) {
              max = number;
          }
      }
      callback(max);
  }

// Define a callback function
function logMaxNumber(max) {
    console.log("The maximum number is: " + max);
}

// Call the findMaxNumber function with an array of numbers and the logMaxNumber callback

findMaxNumber([1, 2, 3, 4, 5], logMaxNumber);

// Exercise 6: Write a function that takes a string and a callback function as arguments,
// and calls the callback function with the number of characters in the string.

function countCharacters(str, callback) {
    callback(str.length);
}

// Define a callback function
function logCharacterCount(count) {
    console.log("The number of characters is: " + count);
}

// Call the countCharacters function with a string and the logCharacterCount callback
countCharacters("hello", logCharacterCount);

// Exercise 7: Write a function that takes an array of strings and a callback function
// as arguments, and calls the callback function with the longest string in the array.

function findLongestString(strings, callback) {

    let longest = strings[0];
    for (let string of strings) {
        if (string.length > longest.length) {
            longest = string;
        }
    }
    callback(longest);
}

// Define a callback function
function logLongestString(longest) {
    console.log("The longest string is: " + longest);
}

// Call the findLongestString function with an array of strings and the logLongestString callback
findLongestString(["hello", "world", "goodbye"], logLongestString);