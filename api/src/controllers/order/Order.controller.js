import {
  Category,
  Order,
  OrderDetail,
  Payment,
  Product,
  User,
} from "../../models/index.js";

class OrderController {
  static async createOrder(req, res) {
    try {
      const results = await Order.create(req.body);
      if (!results) throw "The order is not registered";
      res.status(201).send({
        success: true,
        message: "Order registered successfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        succes: false,
        message: err,
      });
    }
  }
  //Esto es vista para el admin
  static async getAllOrder(req, res) {
    try {
      const results = await Order.findAll({
        include: [
          {
            model: OrderDetail,
            include: [
              {
                model: Product,
                attributes: ["name", "image"],
              },
            ],
          },
          {
            model: Payment,
            attributes: ["paymentMethod"],
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
  //Cambiar este controlador a las orders
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

  // GET BY ID ORDER (Admin)
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
  static async deletedOrder(req, res) {
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
