const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.post("/categories", CategoryController.create);
router.put("/categories", CategoryController.update);
router.get("/", CategoryController.getAll);
router.get("/id/:id", CategoryController.getById);


module.exports = router;