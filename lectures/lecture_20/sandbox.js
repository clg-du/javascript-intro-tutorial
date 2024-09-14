
// Lecture 20 - Switch Statements

// Switch statements are used to execute different blocks of code based on the value of an
// expression. In JavaScript, switch statements are defined using the switch keyword followed
// by an expression in parentheses, a block of code in curly braces, and one or more case
// clauses followed by a block of code in curly braces.

// In this example, we demonstrate the use of a switch statement to determine the day of the
// week based on a numeric value.

// Define a numeric value representing the day of the week
let day = 3;

// Use a switch statement to determine the day of the week
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// In this example, we define a numeric value representing the day of the week and use a
// switch statement to determine the day of the week based on the value. The switch statement
// evaluates the value of the day variable and executes the corresponding block of code for
// the matching case clause. If no case clause matches the value, the default block of code
// is executed.

// Switch statements are a powerful tool for controlling the flow of a program based on the
// value of an expression. They provide a concise and expressive way to execute different
// blocks of code depending on the value of a variable.

// End of Lecture 20
