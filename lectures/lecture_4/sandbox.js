
// Lecture 4 - Variables

/* Variables are used to store data in a program. They are like containers that
hold values. */

// Variables can be declared using the 'let', or 'const' keywords, and the 'var'
// keyword. The latter is not used as much anymore. See the last example.

// 'let' is the new way of declaring variables in JavaScript. It is
// block-scoped, meaning that it can only be accessed within the block it is
// declared in.
let age = 38;
let year = 1986;
console.log("Age: ", age, "Born: ", year);

// Having declared a variable, you can reassign it a new value, but you do not
// need to use the 'let' keyword again.
age = 30;
year = 1994;
console.log("Age: ", age, "Born: ", year);

// 'const' is used to declare variables that should not be reassigned. It is
// block-scoped, like 'let'. If you try to reassign a 'const' variable, you will
// get an error.
const temperature = 98.6;
console.log("Temperature: ", temperature);

temperature = 100; // This will throw an error

// 'var' is the old way of declaring variables in JavaScript. It is not used as
// much anymore. It is also function-scoped, meaning that it can be accessed
// anywhere within the function it is declared. This can lead to bugs in your
// code.
//
// Uncomment the following two lines, as well as commented the 'const' error
// above, to see the result.
//
// var score = 100; console.log("My score is: ", score);