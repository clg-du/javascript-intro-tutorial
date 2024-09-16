
// Lecture 13 Exercises - Functions

/* In this exercise, you will practice working with functions in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Write a function that takes two numbers as arguments and returns
// the sum of those numbers.
function add(a, b) {
    return a + b;
    }
    console.log(add(2, 3)); // Expected output: 5
    console.log(add(5, 7)); // Expected output: 12
    console.log(add(10, 20)); // Expected output: 30

// Exercise 2: Write a function that takes two numbers as arguments and returns
// the difference of those numbers.
function subtract(a, b) {
    return a - b;
    }
    console.log(subtract(10, 5)); // Expected output: 5
    console.log(subtract(20, 10)); // Expected output: 10
    console.log(subtract(100, 50)); // Expected output: 50

    // Exercise 3: Write a function that creates a blog post HTML template with
    // the given title, author, and content.

    function createBlogPost(title, author, content) {
        return `
        <div class="blog-post">
          <h2>${title}</h2>
          <p>By ${author}</p>
          <p>${content}</p>
        </div>
        `;
        }

        // Create a blog post with the title, author, and content
        let blogPost1 = createBlogPost("JavaScript Functions", "John Doe", "In this blog post, we will learn about JavaScript functions.");
        console.log(blogPost1);

        let blogPost2 = createBlogPost("JavaScript Arrays", "Jane Smith", "This blog post covers JavaScript arrays and how to use them.");
        console.log(blogPost2);

// Exercise 4: Write a function that takes an string as an argument and returns
// the letters in the string in alphabetical order.
function sortLetters(str) {
    return str.split("").sort().join("");
    }
    console.log(sortLetters("hello")); // Expected output: "ehllo"
    console.log(sortLetters("javascript")); // Expected output: "aacijprstv"
    console.log(sortLetters("web development")); // Expected output: "bdeeelmnnoptvw"