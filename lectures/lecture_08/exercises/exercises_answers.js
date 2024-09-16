
// Lecture 8 Exercises - HTML templates

/* In this exercise, you will practice working with HTML templates in JavaScript.
Remember to log output to the console to see the results of your code. */

// Exercise 1: Define an HTML template for a blog post for a website that includes
// placeholders for the title, author, and content of the post. Make sure that the content of
// the post is a paragraph of text and that the author can also enter a to-do list which is based on
// variables that you define in the template.
let title = "Hello, World!";
let author = "John Doe";
let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let todo1 = "Task 1";
let todo2 = "Task 2";
let todo3 = "Task 3";
let postTemplate = `
  <div class="post">
    <h2>${title}</h2>
    <p>By ${author}</p>
    <p>${content}</p>
    <ul>
      <li>${todo1}</li>
      <li>${todo2}</li>
      <li>${todo3}</li>
    </ul>
  </div>
`;
let post = postTemplate;
console.log(postTemplate);

// Exercise 2: Define an HTML template for a product card for an e-commerce website that
// includes placeholders for the product name, price, and description. Make sure that the
// description includes a list of features of the product.
let productName = "Product Name";
let productPrice = "$19.99";
let productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let feature1 = "Feature 1";
let feature2 = "Feature 2";
let feature3 = "Feature 3";
let productTemplate = `
  <div class="product">
    <h3>${productName}</h3>
    <p>${productPrice}</p>
    <p>${productDescription}</p>
    <ul>
      <li>${feature1}</li>
      <li>${feature2}</li>
      <li>${feature3}</li>
    </ul>
  </div>
`;
let product = productTemplate;
console.log(product);





