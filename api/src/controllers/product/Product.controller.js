import { Op } from "sequelize";
import { Category, Product, Discount } from "../../models/index.js";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
initializeApp(firebaseConfig)
const storage = getStorage()

class ProductController {
  
  static async createProduct(req, res) {
    try {
      const { name, description, price, stock, idCategory } = req.body;
      const image = req.file

      const metaData = {
        contentType:image.mimetype
      }
      const storageRef = ref(storage, `product/${name}/${image.originalname}`)
      const resUploadImg = await uploadBytesResumable(storageRef, image.buffer, metaData)
      const imageUrl = await getDownloadURL(resUploadImg.ref)
      req.body.image = imageUrl
      const results = await Product.create({
        name,
        description,
        price,
        stock,
        image:imageUrl,
        idCategory,
      });
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
        include: { model: Category, attributes: ["name"] },
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
      const {id} =req.params
      const results = await Product.findOne({
        where: {
          id: id,
        },
        include: { model: Category, attributes: ["id","name"] },
        attributes: ["id","name", "description", "price", "stock", "image"],
      });
      if (!results) throw "No product found";
      res.status(200).send({
        success: true,
        message: "Product found",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  
  static async getProductByCategory(req, res) {
    try {
      const { idCategory } = req.params;
      const results = await Product.findAll({
        where: { idCategory },
        include: [Category],
      });
      if (!results) throw "No products for this category";
      res.status(200).send({
        results,
      });
    } catch (err) {
      res.status(404).send(err);
    }
  }
  
  static async getProductsWithDiscount(req, res) {
    try {
      let now = new Date();
      const results = await Discount.findAll({
        where: {
          endDate: { [Op.gt]: now },
        },
        include: {
          model: Product,
          include: {
            model: Category,
          },
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

  static async updateProduct(req, res) {
    try {
      const {id} =req.params
      const { name, description, price, stock, image, idCategory } = req.body;
      const results = await Product.update(
        {
          name,
          description,
          price,
          stock,
          image,
          idCategory,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (results[0] === 0) throw "No product was updated";
      res.status(201).send({
        success: true,
        message: "Product update",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  static async deletedProduct(req, res) {
    try {
      const { id } =req.params
      const results = await Product.destroy({
        where: {
          id: id,
        },
      });
      if (results === 0) throw "No Product was deleted";
      res.status(201).send({
        success: true,
        message: "Product deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
}
export default ProductController;
