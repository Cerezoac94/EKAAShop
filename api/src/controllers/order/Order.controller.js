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
  //CREATE ORDER
  static async createOrder(req, res) {
    try {
      const id = req.body.id;
      // encontrar carrito del usuario
      const cart = await Cart.findOne({
        where: {
          idUser: id,
        },
      });
      if (!cart) throw "Error finding cart";
      // guardar detalle del carrito
      const cartProducts = await CartProduct.findAll({
        where: {
          idCart: cart.id,
        },
      });
      console.log("cartProduct", cartProducts);
      if (!cartProducts.length)
        throw "There are no products to add to the order";
      // comprobar stock suficiente
      // Verificamos si los productos tienen suficiente stock
      for (const cartProduct of cartProducts) {
        const product = await Product.findByPk(cartProduct.idProduct);
        if (parseInt(product.stock) < parseInt(cartProduct.quantity))
          throw "Uno o más productos no tienen suficiente stock";
      }
      // Creamos la orden
      const order = await Order.create({
        idUser: cart.idUser,
        paid: true,
        shipmentState: "no enviado",
        orderDate: new Date(),
      });
      if (!order) throw "The order is not created";

      // Calcular total y creación del detalle de la orden
      let total = 0;
      for (const cartProduct of cartProducts) {
        const product = await Product.findByPk(cartProduct.idProduct);
        let productPrice = product.price;

        // Buscar descuento y aplicarlo si existe
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
        // crear detalle de orden
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

      // Eliminar productos del carrito
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

  //Esto es vista para el admin
  static async getAllOrders(req, res) {
    try {
      const results = await Order.findAll({
        include: [
          // NumOrden, Quien la hizo, fecha Orden, total de la order, status
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

  // GET BY ID ORDER (detail order)
  // REVIEW: analizar y corregir los atributos a devolver que verá el admin
  static async getOrderById(req, res) {
    try {
      const { idOrder } = req.params;
      const results = await Order.findOne({
        where: {
          id: idOrder,
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
  //Esto puede que se quite
  static async updateOrder(req, res) {
    try {
      const { shipmentState } = req.body;
      const { id } = req.params;
      const results = await Order.update(
        {
          shipmentState,
        },
        {
          where: {
            id: id,
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
  //Desde vista de lista o general de las ordenes
  static async deleteOrder(req, res) {
    try {
      const { idOrder } = req.params;

      //Encontramos la orden
      const order = await Order.findOne({
        where: {
          id: idOrder,
        },
      });
      //Con la orden encontrada se valida el shipmentState
      if (order.shipmentState === "enviado") {
        throw new Error("Only can cancel orders with a 'no enviado' status");
      }

      //Se busca el detalle de la orden
      const orderDetail = await OrderDetail.findAll({
        where: {
          idOrder: idOrder,
        },
      });

      //Se itera sobre la orderDetail
      for (const detail of orderDetail) {
        //En la ordenDetail se encuentra el producto a afectar
        const producto = await Product.findOne({
          where: {
            id: detail.idProduct,
          },
        });
        // se afecta el stock del producto
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

  // desde el detalle de la orden
  static async deleteProductOrder(req, res) {
    // idOrder y idProduct desde params
    // quantity desde body
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
        throw new Error(
          "The quantity is greater than the one registered in the order"
        );
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
