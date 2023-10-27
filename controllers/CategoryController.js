const db = require("../config/database.js");

const CategoryController = {
  create(req, res) {
    let category = {
      name_category: req.body.name_category,
      description: req.body.description,
    };
    let sql = "INSERT INTO categories SET ?";
    db.query(sql, category, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Category added!");
    });
  },
  update(req, res) {
    let newCategory = {
      name_category: req.body.name_category,
      description: req.body.price,
    };
    let categoryId = req.params.id;
    let sql = "UPDATE categories SET name_category = ?, description = ? WHERE id = ?";
    db.query(
      sql,
      [newCategory.name_category, newCategory.description, categoryId],
      (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Category updated!");
      }
    );
  },

  getAll(req, res) {
    let sql = "SELECT * FROM categories";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getById(req, res) {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = CategoryController;