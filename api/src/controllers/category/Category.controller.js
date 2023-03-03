import { Category} from "../../models/index.js";

class CategoryController {
  static async createCategory(req, res) {
    try {
      const results = await Category.create(req.body);
      if (!results) throw "The category is not created";
      res.status(201).send({
        success: true,
        message: "Category created succesfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  static async getAllCategory(req, res) {
    try {
      const results = await Category.findAll(req.body);
      if (results.length === 0) throw "No categories registered";
      res.status(200).send({
        success: true,
        message: "Categories",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }


  static async updateCategory(req, res) {
    try {
      const results = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (results[0] === 0) throw "No category was updated";
      res.status(201).send({
        success: true,
        message: "Category updated",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const results = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (results === 0) throw "No category was deleted";
      res.status(201).send({
        success: true,
        message: "Category deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
}
export default CategoryController;
