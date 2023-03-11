import { Category} from "../../models/index.js";

class CategoryController {
  static async createCategory(req, res) {
    try {
      const { name } = req.body
      const results = await Category.create({ name });
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
      const results = await Category.findAll();
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

  static async getCategoryById(req, res){
    try {
      const {id}=req.params
      const results = Category.findOne({
        where:{
          id:id
        }
      }) 
      res.status(200).send({
        success: true,
        message: "Category",
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
      const { id } = req.params
      const { name } = req.body
      const results = await Category.update({ name }, {
        where: {
          id: id,
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
      const { id } = req.params
      const results = await Category.destroy({
        where: {
          id: id,
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
