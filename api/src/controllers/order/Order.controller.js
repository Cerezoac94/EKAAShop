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
      if (!cart) throw "Error finding cart"
      // guardar detalle del carrito
      const cartProducts = await CartProduct.findAll({
        where: {
          idCart: cart.id,
        },
      });
      if (cartProducts[0] === 0)
        throw "There are no products to add to the order";
      // comprobar stock suficiente
      // Verificamos si los productos tienen suficiente stock
      for (const cartProduct of cartProducts) {
        const product = await Product.findByPk(cartProduct.idProduct);
        if (parseInt(product.stock) < parseInt(cartProduct.quantity)) throw "Uno o más productos no tienen suficiente stock";
      }
      // Calcular total
      let total = 0
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
        total += (parseInt(productPrice) * parseInt(cartProduct.quantity))
      }


      // Creamos la orden y el detalle de la orden
      const order = await Order.create({
        idUser: cart.idUser,
        paid: true,
        shipmentState: "no enviado",
        orderDate: new Date(),
      });
      if (!order) throw "The order is not created";

      for (const p of cartProducts) {
        const product = await Product.findByPk(p.idProduct);
        await OrderDetail.create({
          idOrder: order.id,
          idProduct: p.idProduct,
          quantity: p.quantity,
          unitPrice: product.price,
        });
        await product.update({
          stock: parseInt(product.stock) - parseInt(p.quantity),
        });
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
  static async getAllOrder(req, res) {
    try {
      const results = await Order.findAll({
        include: [
          // NumOrden, Quien la hizo, fecha Orden, total de la order, status
          {
            model: OrderDetail,
            attributes: ['idProduct', 'quantity', 'unitPrice'],
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

  // GET BY ID ORDER (detail order Admin)
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
      const { paid, shipmentState } = req.body;
      const { id } = req.params;
      const results = await Order.update(
        {
          paid,
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
  //Esto puede que se quite
  static async deleteOrder(req, res) {
    try {
      const { id } = req.params;
      const results = await Order.destroy({
        where: {
          id: id,
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
