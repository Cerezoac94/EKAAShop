import { Cart, CartProduct, User, Product } from "../../models/index.js";

class CartController {
// GET CART BY IDUSER
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
  // AddProductCart
  static async addProductCart(req, res) {
    try {
      // REVIEW: idUser obtenerlo más adelante desde payload, desde cookie o metodo authMe, más adelante ver cómo!
      // Analizar si idProduct vendrá desde el body o como param
      const { idUser } = req.params;
      const { quantity, idProduct } = req.body;
      const qtyInt = parseInt(quantity);
      // Se busca al usuario
      const user = await User.findByPk(idUser);
      if (!user) throw "Problem with finding the user";

      // Target Cart para el usuario correspondinte
      const cart = await Cart.findOne({ where: { idUser: user.id } });
      if (!cart) throw "Problem with finding the cart";

      // Validate product
      const product = await Product.findByPk(idProduct);
      if (!product) throw "No product found";

      //  add to cart
      // Primero busco el cartProduct asociado al cart que se busco anteriormente
      const cartProduct = await CartProduct.findOne({
        where: { idCart: cart.id, idProduct: product.id },
      });
      //  if(!cartProduct) throw "Not added to cart"

      // Si no hay un cartProduct o en el cartProduct no existe el producto, crea un cartProduct
      if (!cartProduct) {
        const results = await CartProduct.create({
          idCart: cart.id,
          idProduct: product.id,
          quantity: quantity,
        });
        if (!results) throw "Not added to cart";
      }
      // Si hay cartProduct y el producto es el mismo, modifica la cantidad de el cartProduct aumentandole la cantidad indicada
      // if (cartProduct && cartProduct.idProduct == product.idProduct) {
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

  //METODO INCREMENT, INCREMENTA EN UNO, EN ESTE CASO IRA AUMENTANDO EN UNO LA QUANTITY DEL CART
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

  //Eliminar un registro de la tabla CartProduct
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
