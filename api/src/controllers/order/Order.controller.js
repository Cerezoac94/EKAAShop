import { Order, OrderDetail, Product } from "../../models/index.js";

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
          // NumOrden, Quien la hizo, fecha Orden, total de la order, status
        {
          model: OrderDetail,
          attributes:['quantity', 'unitPrice', 'paid', 'shipmentState'],
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


  // GET ORDER BY IDUSER

  // GET BY ID ORDER (Admin)
  // REVIEW: analizar y corregir los atributos a devolver que verá el admin
  static async getOrderById(req, res) {
    try {
      const results = await Order.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!results) throw "No order found";
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
      const results = await Order.update(req.body,{
        where:{
          id:req.params.id
        }
      })
      if (results[0]===0) throw "order was not updated"
      res.status(201).send({
        success:true,
        message:'Order update'
      })
    } catch (err) {
      res.status(404).send({
        success:false,
        message:err
      })
    }
  }
  //Esto puede que se quite
  static async deletedOrder(req, res) {
    try {
      const results = await Order.destroy({
        where:{
          id: req.params.id
        }
      })
      if (results === 0) throw 'No order was deleted'
      res.status(201).send({
        success:true,
        message:'Order deleted'
      })
    } catch (err) {
      res.status(404).send({
        success:false,
        message:err
      })
    }
  }
}
export default OrderController;
