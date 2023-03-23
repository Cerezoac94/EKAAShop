import { Cart, CartProduct, User, Product } from "../../models/index.js";

class CartController {

  static async getCart(req, res) {
    try {
      const idUser = req.params;
      const results = await Cart.findOne({
        where: idUser,

        include: [
          { model: Product,
          attributes: ['id','name', 'description', 'price', 'stock', 'image'] }
        ]
      });
      if (results.Products.length === 0) throw "No products in Cart";
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
  
  static async addProductCart(req, res) {
    try {
      
      const { idUser } = req.params;
      const { quantity, idProduct } = req.body;
      const qtyInt = parseInt(quantity);
      const user = await User.findByPk(idUser);
      if (!user) throw "Problem with finding the user";

      
      const cart = await Cart.findOne({ where: { idUser: user.id } });
      if (!cart) throw "Problem with finding the cart";

      
      const product = await Product.findByPk(idProduct);
      if (!product) throw "No product found";

      
      const cartProduct = await CartProduct.findOne({
        where: { idCart: cart.id, idProduct: product.id },
      });
      
      if (!cartProduct) {
        const results = await CartProduct.create({
          idCart: cart.id,
          idProduct: product.id,
          quantity: quantity,
        });
        if (!results) throw "Not added to cart";
      }
    
      else {
        const results = await cartProduct.update({
          quantity: cartProduct.quantity + qtyInt,
        });
        if (results[0] === 0) throw "Not added to cart";
      }
      res.status(201).send({
        success: true,
        message: "Cart added",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  static async incrementProductCart(req, res) {
    try {
      const { idCart, idProduct } = req.params;
      const results = await CartProduct.findOne({
        where: {
          idCart,
          idProduct,
        },
      });
      await results.increment("quantity");

      res.status(201).send({
        success: true,
        message: "added",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  static async decrementProductCart(req, res) {
    try {
      const { idCart, idProduct } = req.params;
      const results = await CartProduct.findOne({
        where: {
          idCart,
          idProduct,
        },
      });

      await results.decrement('quantity')

      res.status(201).send({
        success: true,
        message: "removed",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  
  static async deleteProductCart(req, res) {
    try {
      const { idCart, idProduct } = req.params;
      const results = await CartProduct.destroy({
        where: {
          idCart,
          idProduct
        },
      });
      if (results === 0) throw "No product in the cart";
      res.status(201).send({
        success: true,
        message: "removed",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        err
      });
    }
  }
  
}
export default CartController;
