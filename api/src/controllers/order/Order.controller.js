import { Op, Sequelize } from "sequelize";
import {
  Order,
  OrderDetail,
  Product,
  Cart,
  CartProduct,
  Discount,
  User,
  Category,
} from "../../models/index.js";

class OrderController {
  static async createOrder(req, res) {
    try {
      const id = req.body.id;

      const cart = await Cart.findOne({
        where: {
          idUser: id,
        },
      });
      if (!cart) throw "Error finding cart";

      const cartProducts = await CartProduct.findAll({
        where: {
          idCart: cart.id,
        },
      });
      console.log("cartProduct", cartProducts);
      if (!cartProducts.length)
        throw "There are no products to add to the order";

      for (const cartProduct of cartProducts) {
        const product = await Product.findByPk(cartProduct.idProduct);
        if (parseInt(product.stock) < parseInt(cartProduct.quantity))
          throw "Uno o más productos no tienen suficiente stock";
      }

      const order = await Order.create({
        idUser: cart.idUser,
        paid: true,
        shipmentState: "no enviado",
        orderDate: new Date(),
      });
      if (!order) throw "The order is not created";

      let total = 0;
      for (const cartProduct of cartProducts) {
        const product = await Product.findByPk(cartProduct.idProduct);
        let productPrice = product.price;

        const discount = await Discount.findOne({
          where: {
            idProduct: cartProduct.idProduct,
          },
        });
        if (discount) {
          const now = new Date();
          if (now >= discount.startDate && now <= discount.endDate) {
            productPrice *= 1 - discount.discount / 100;
          }
        }

        await OrderDetail.create({
          idOrder: order.id,
          idProduct: cartProduct.idProduct,
          quantity: cartProduct.quantity,
          unitPrice: productPrice,
        });
        await product.update({
          stock: parseInt(product.stock) - parseInt(cartProduct.quantity),
        });
        total += parseInt(productPrice) * parseInt(cartProduct.quantity);
      }

      order.update({
        total,
      });

      await CartProduct.destroy({
        where: {
          idCart: cart.id,
        },
      });

      res.status(201).send({
        success: true,
        message: "Order successfully created",
        order,
        total,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  
  static async getAllOrders(req, res) {
    try {
      const results = await Order.findAll({
        include: [
          
          {
            model: OrderDetail,
            attributes: ["idProduct", "quantity", "unitPrice"],
            include: [
              {
                model: Product,
                attributes: ["name", "image"],
              },
            ],
          },
        ],
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

  
  static async getOrdersByProduct(req, res) {
    try {
      
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

  
  static async getOrderByUser(req, res) {
    try {
      const { idUser } = req.params;

      const results = await Order.findAll({
        where: {
          idUser: idUser,
        },
        include: [
          {
            model: OrderDetail,
            attributes: ["idProduct", "quantity", "unitPrice"],
            include: [
              {
                model: Product,
                attributes: ["name", "image"],
              },
            ],
          },
        ],
      });

      if (results.length === 0) throw "No order exists";
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

  
  static async getOrderById(req, res) {
    try {
      const { idOrder } = req.params;
      const results = await Order.findOne({
        where: {
          id: idOrder,
        },
        attributes: ["id", "orderDate", "shipmentState"],
        include: [
          {
            model: User,
            attributes: ["firstName", "lastName", "phone", "adress"],
          },
          {
            model: OrderDetail,
            attributes: ["quantity", "unitPrice"],
            include: [
              {
                model: Product,
                attributes: ["name", "image"],
                include: [
                  {
                    model: Category,
                    attributes: ["name"],
                  },
                ],
              },
            ],
          },
        ],
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
  
  static async updateOrder(req, res) {
    try {
      const { shipmentState } = req.body;
      const { idOrder } = req.params;
      const results = await Order.update(
        {
          shipmentState,
        },
        {
          where: {
            id: idOrder,
          },
        }
      );
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
  
  static async deleteOrder(req, res) {
    try {
      const { idOrder } = req.params;

      //Encontramos la orden
      const order = await Order.findOne({
        where: {
          id: idOrder,
        },
      });
      
      if (order.shipmentState === "enviado") {
        throw "Only can cancel orders with a 'no enviado' status";
      }

      
      const orderDetail = await OrderDetail.findAll({
        where: {
          idOrder: idOrder,
        },
      });

      
      for (const detail of orderDetail) {
        
        const producto = await Product.findOne({
          where: {
            id: detail.idProduct,
          },
        });
        
        await Product.update(
          {
            stock: detail.quantity + producto.stock,
          },
          {
            where: {
              id: detail.idProduct,
            },
          }
        );
      }

      await Order.destroy({
        where: {
          id: idOrder,
        },
      });

      res.status(201).send({
        success: true,
        message: "Order deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err.message,
      });
    }
  }

  
  static async deleteProductOrder(req, res) {
    
    try {
      const { idOrder, idProduct } = req.params;
      const { quantity } = req.body;
      const qty = parseInt(quantity);

      const order = await OrderDetail.findOne({
        where: {
          idorder: idOrder,
          [Op.and]: [{ idProduct: idProduct }],
        },
      });
      if (quantity > order.quantity) {
        throw "The quantity is greater than the one registered in the order";
      }
      const product = await Product.findOne({
        where: {
          id: order.idProduct,
        },
      });

      await product.update(
        {
          stock: qty + product.stock,
        },
        {
          where: {
            id: product.id,
          },
        }
      );

      await OrderDetail.update(
        {
          quantity: order.quantity - qty,
        },
        {
          where: {
            idorder: idOrder,
            [Op.and]: [{ idProduct: idProduct }],
          },
        }
      );

      await OrderDetail.destroy({
        where: {
          idProduct: idProduct,
          quantity: {
            [Op.eq]: 0,
          },
        },
      });

      res.status(201).send({
        success: true,
        message: "Item deleted",
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err.message,
      });
    }
  }
}
export default OrderController;
