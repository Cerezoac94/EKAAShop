import { Op } from "sequelize";
import { Category, Product, Discount, Order, OrderDetail } from "../../models/index.js";

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
  //Filtrar productos por categoria
  static async getProductByCategory(req,res){
    try {
      const {category}=req.body
      const results = await Category.findOne({
        where: { name: category },
        include: [Product]
      })
      if (!results) throw 'No products for this category'
      res.status(200).send({
        results
      })
    } catch (err) {
      res.status(404).send(err)
    }
  }
  //Filtrar productos con descuento
  static async getDiscountProducts(req, res) {
    try {
      let dateToday = new Date();
      const results = await Discount.findAll({
        where: {
          endDate: { [Op.gt]: dateToday },
        },
        include: {
          model: Product,
          include:{model:Category}
        },
      });
      if (results[0] === 0) throw "No discount with discount";

      res.status(201).send({
        succes: true,
        message: "Discount",
        results,
      });
    } catch (err) {
      res.status(404).send({
        succes: false,
        message: err,
      });
    }
  }
  
  //Filtrar todas las ordenes de un producto en especifico

  static async getOrdersByProduct(req, res){
    try {
       const results = await Order.findAll({
        include: [{
          model: OrderDetail,
          where: { idProduct: 1 }
        }]
       })  
       
       res.status(201).send({
        succes: true,
        message: "All orders by product",
        results,
      });
    } catch (err) {
      
    }
  }





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
