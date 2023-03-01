import { Cart } from "../../models/index.js";

class CartController {
  // static async createCart(req, res) {
  //   try {
  //     const results = await Category.create(req.body);
  //     if (!results) throw "The cart is not created";
  //     res.status(201).send({
  //       success: true,
  //       message: "Cart created succesfully",
  //       results,
  //     });
  //   } catch (err) {
  //     res.status(400).send({
  //       success: false,
  //       message: err,
  //     });
  //   }
  // }
  static async getAllCart(req, res) {
    try {
      const results = await Cart.findAll();
      if (results.length === 0) throw "No cart found";
      res.status(201).send({
        success: true,
        message: "Cart",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  static async getCart(req, res) {
    try {
    } catch (err) {}
  }
  static async updateCart(req, res) {
    try {
    } catch (err) {}
  }
  static async deletedCart(req, res) {
    try {
    } catch (err) {}
  }
}
export default CartController;
