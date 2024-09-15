
// Lecture 8 - HTML templates

// HTML templates are used to create reusable HTML content. They allow you to
// define a template that can be used to generate HTML content dynamically.

// In this example, we define an HTML template for a blog post. The template
// includes placeholders for the title, author, and content of the post.

// We can use the template to generate HTML content by replacing the placeholders
// with the actual values.

// Define the HTML template for a blog post
let title = "Hello, World!";
let author = "John Doe";
let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let postTemplate = `
  <div class="post">
    <h2>${title}</h2>
    <p>By ${author}</p>
    <p>${content}</p>
  </div>
`;

// Generate HTML content using the template
let post = postTemplate;
console.log(post);

// In this example, we defined an HTML template for a blog post using a template
// literal. The template includes placeholders for the title, author, and content
// of the post. We then used the template to generate HTML content by replacing
// the placeholders with the actual values.

// HTML templates are a powerful tool for creating dynamic content in JavaScript
// applications. They allow you to define reusable templates that can be used to
// generate HTML content dynamically.

// End of Lecture 8