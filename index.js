const express = require("express");
const app = express();
const db = require("./config/database")
const PORT = 3000;

app.use(express.json());
app.use("/categories", require("./routes/categories"));
app.use("/products", require("./routes/products"));

app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE expressDB";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  });

  app.get("/create_products_table", (req, res) => {
    let sql =
      "CREATE TABLE products (id INT AUTO_INCREMENT, name_product VARCHAR(255), price INT, PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Products table created...");
    });
  });

  app.get("/create_categories_table", (req, res) => {
    let sql =
      "CREATE TABLE categories (id INT AUTO_INCREMENT, name_category VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories table created...");
    });
  });

  app.get("/create_product_categories_table", (req, res) => {
    let sql = `
      CREATE TABLE product_categories (
        product_id INT,
        category_id INT,
        PRIMARY KEY (product_id, category_id),
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )
    `;
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product Categories table created...");
    });
  });


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));