# Express and MySQL 🚀

## Objectives 🎯

In this project, our main objectives are to:

- 🔧 Handle Node.js
- 🚀 Understand how to interact with Express.js
- 📚 Learn to use Express.js
- 📦 Handle NPM
- 🏦 Learn to use MySQL with Express

## Endpoints 🛣️

### Exercise 1 📊

We start by creating the database endpoint. To do this, we create the following tables using Express and MySQL, as we have seen in class:

1. **Table Products** 📦
2. **Categories Table** 🗂️

And don't forget, in the case of a many-to-many relationship, you will need an intermediate table. 🔄

### Exercise 2 🆕

Now, it's time to create endpoints to add new products and categories. You can even add 2 new products and 2 new categories from Postman! 📤

### Exercise 3 🔄

Let's create endpoints to update products and categories. 🔄

### Exercise 4 📜

We have several endpoints to display and search for products and categories:

- 📦 Display all products
- 🗂️ Show all categories
- 📦🗂️ Display all products with their categories
- 🆔 Select a product by ID
- 📦 Display products in descending order
- 🆔 Select a category by ID
- 🔍 Search for a product by name

### Exercise 5 🗑️

You can also delete a product by its ID with the respective endpoint. 🚮

## MVC 🧩

We follow the MVC (Model-View-Controller) design pattern for our project. Here's how we've structured it:

### Create the config folder 📁

In the config folder, you'll find a `database.js` file that contains the database connection data. But remember, we have a `database.example.js` file too, which has the same information without your credentials. Be sure not to upload your `database.js` file to your GitHub repository. 🔒

### Folder Structure 📂

- **Products** 📦

  - In the routes folder, you'll find a `products.js` file containing all the product routes.
  - Additionally, we have a `ProductController.js` that contains all the product-related actions.

- **Categories** 🗂️

  - In the routes folder, there's a `categories.js` file containing all categories routes.
  - Plus, we've got a `CategoryController.js` that contains all the categories-related actions.

Let's make this project a success together! 🙌

<p align="center">
<img src="https://imgs.search.brave.com/50JDDd4L1QxFtnwMrj6rn158HP4VG0qHPxVKtKvCPn4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wb3N0bWFuLnN2/Zw.svg" width="30"">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="30" alt="JavaScript">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="30" alt="Node.js">
  <img src="https://imgs.search.brave.com/ziXbll6Eu_vanLF_3jITiNkpTCtx7YcJeFlLoeAvjIA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naXRs/YWIuc3ZnLnpvbmUv/b21uaWFpdC9kZXZl/bG9wZXItbG9nb3Mv/cmF3L21hc3Rlci9s/b2dvcy9mcm9udC1l/bmQtd2ViL25wbS5z/dmc.svg" width="30">
  <img src="https://imgs.search.brave.com/uF5-AZuQ1c913_WPi-S4p3l0x0K658ncMRh6vX5Kgqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9teXNxbC1sb2dv/LTEucG5n" width="30">
</p>

Completed by [Vero Polegre](https://github.com/VeroPolegre) and [Francesc Alberola](https://github.com/cescalberola)  🤝👩‍💻👨‍💻