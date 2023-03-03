import { Order, OrderDetail, Product } from "../../models/index.js";


class OrderController {
  // static async addProductCart(req, res) {
  //   try {
  //     // REVIEW: idUser obtenerlo más adelante desde payload, desde cookie o metodo authMe, más adelante ver cómo!
  //     // Analizar si idProduct vendrá desde el body o como param
  //     const { idUser, idProduct } = req.params;
  //     const { quantity } = req.body;
  //     const qtyInt = parseInt(quantity);
  //     // Se busca al usuario
  //     const user = await User.findByPk(idUser);
  //     if (!user) throw "Problem with finding the user";

  //     // Target Cart para el usuario correspondinte
  //     const cart = await Cart.findOne({ where: { idUser: user.id } });
  //     if (!cart) throw "Problem with finding the cart";

  //     // Validate product
  //     const product = await Product.findByPk(idProduct);
  //     if (!product) throw "No product found";

  //     //  add to cart
  //     // Primero busco el cartProduct asociado al cart que se busco anteriormente
  //     const cartProduct = await CartProduct.findOne({
  //       where: { idCart: cart.id, idProduct: product.id },
  //     });
  //     //  if(!cartProduct) throw "Not added to cart"

  //     // Si no hay un cartProduct o en el cartProduct no existe el producto, crea un cartProduct
  //     if (!cartProduct) {
  //       const results = await CartProduct.create({
  //         idCart: cart.id,
  //         idProduct: product.id,
  //         quantity: quantity,
  //       });
  //       if (!results) throw "Not added to cart";
  //     }
  //     // Si hay cartProduct y el producto es el mismo, modifica la cantidad de el cartProduct aumentandole la cantidad indicada
  //     // if (cartProduct && cartProduct.idProduct == product.idProduct) {
  //     else {
  //       const results = await cartProduct.update({
  //         quantity: cartProduct.quantity + qtyInt,
  //       });
  //       if (results[0] === 0) throw "Not added to cart";
  //     }
  //     res.status(201).send({
  //       success: true,
  //       message: "Cart added",
  //     });
  //   } catch (err) {
  //     res.status(404).send({
  //       success: false,
  //       message: err,
  //     });
  //   }
  // }

  
  //Esto es vista para el admin
  static async getAllOrder(req, res) {
    try {
      const results = await Order.findAll({
        include: [
          // NumOrden, Quien la hizo, fecha Orden, total de la order, status
        {
          model: OrderDetail,
          attributes:['quantity', 'total', 'paid', 'shipmentState'],
          include: [
            {
              model: Product,
              attributes: ['name', 'image'],
            },
          ],
        }
      ],
      attributes: ['id', 'orderDate']
    });
      if (results.length === 0) throw "The user has no orders";
      res.status(201).send({
        success: true,
        message: "Orders",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  //Filtrar todas las ordenes de un producto en especifico
  static async getOrdersByProduct(req, res) {
    try {
      //Se obtiene el id del producto para filtrar sus ordenes
      const { idProduct } = req.params;

      const results = await OrderDetail.findAll({
        attributes: ["quantity", "unitPrice"],
        include: [
          {
            model: Product,
            attributes: ["Name", "image"],
            where: {
              id: idProduct,
            },
          },
          {
            model: Order,
            attributes: ["orderDate"],
            include: [
              {
                model: User,
                attributes: ["userName"],
              },
            ],
          },
        ],
      });
      if (!results) throw "no products with orders";
      res.status(201).send({
        success: true,
        message: "Orders",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // GET ORDER BY IDUSER
  static async getOrderByUser(req, res) {
    try {
      const { idUser } = req.params;

      const results = await Order.findAll({
        where: {
          idUser: idUser,
        },
        attributes: ["orderDate"],
        include: [
          {
            model: OrderDetail,
            attributes: ["quantity", "unitPrice"],
            include: [
              {
                model: Product,
                attributes: ["name", "image"],
              },
            ],
          },
        ],
      });

      if (results.length === 0) throw "no products with orders";
      res.status(201).send({
        success: true,
        message: "Orders",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // GET BY ID ORDER (detail order Admin)
  // REVIEW: analizar y corregir los atributos a devolver que verá el admin
  static async getOrderById(req, res) {
    try {
      const {idOrder} = req.params
      const results = await Order.findOne({
        where: {
          id: idOrder,
        },
        attributes:['orderDate'],
        include:[
          {
            model:OrderDetail,
            attributes:['quantity', 'unitPrice'],
            include:[
              {
                model:Product,
                attributes:['name', 'image'],
                include:[
                  {
                    model:Category,
                    attributes:['name']
                  }
                ]
              }
            ]
          }
        ]
      });
      if (!results) throw "No order aviable";
      res.status(200).send({
        success: true,
        message: "order found",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  //Esto puede que se quite
  static async updateOrder(req, res) {
    try {
      const results = await Order.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (results[0] === 0) throw "order was not updated";
      res.status(201).send({
        success: true,
        message: "Order update",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  //Esto puede que se quite
  static async deleteOrder(req, res) {
    try {
      const results = await Order.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (results === 0) throw "No order was deleted";
      res.status(201).send({
        success: true,
        message: "Order deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
}
export default OrderController;
