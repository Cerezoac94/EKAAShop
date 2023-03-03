import { Category, Product } from "../../models/index.js";

class ProductController {
  // CREATE
  static async createProduct(req, res) {
    try {
      const results = await Product.create(req.body);
      if (!results) throw "The product is not created";
      res.status(201).send({
        success: true,
        message: "Product created succesfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const results = await Product.findAll({
        include: { model: Category, attributes: ["name"] }
      });
      if (results.length === 0) throw "No products registered";
      res.status(201).send({
        success: true,
        message: "Products",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // GET BY ID
  // faltan los include
  static async getProductById(req, res) {
    try {
      const results = await Product.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["name", "description", "price", "stock", "image"],
      })
      if(!results) throw 'No product found'
      res.status(200).send({
        success:true,
        message: 'Product found',
        results
      })
    } catch (err) {
      res.status(404).send({
        success:false,
        message:err
      })
    }
  }

  static async getProductByCategory(req,res){
    try {
      // const {category}=req.body
      const results = await Category.findOne({
        where: { name: 'Termos' },
        include: [Product]
      })
      res.status(200).send({
        results
      })
    } catch (error) {
      
    }
  }

  // static async getProductByCategory(req,res){
  //   try {
  //     // const {category}=req.body
  //     const results = await Product.findAll({
  //       where: { idCategory: req.params.id },
  //       include: [Category]
  //     })
  //     console.log("🚀 ~ file: Product.controller.js:70 ~ ProductController ~ getProductByCategory ~ results:", results)
  //     res.status(201).send({
  //       results
  //     })
  //   } catch (error) {
      
  //   }
  // }


  static async updateProduct(req, res) {
    try {
      const results = await Product.update(req.body,{
        where:{
          id:req.params.id
        }
      })
      if (results[0]===0) throw 'No product was updated'
      res.status(201).send({
        success:true,
        message:'Product update'
      })
    } catch (err) {
      res.status(404).send({
        success:false,
        message:err
      })
    }
  }
  static async deletedProduct(req, res) {
    try {
      const results = await Product.destroy({
        where:{
          id: req.params.id
        }
      })
      if (results === 0) throw 'No Product was deleted'
      res.status(201).send({
        success:true,
        message:'Product deleted'
      })
    } catch (err) {
      res.status(404).send({
        success:false,
        message:err
      })
    }
  }
}
export default ProductController;
