import { Order, OrderDetail, Payment, Product } from "../../models/index.js";

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
              attributes: ['name', 'image'],
            },
          ],
        },
        {
          model: Payment,
          attributes: ['paymentMethod']
        }
      ],
      // subQuery: false,
      // group: ['id']
      attributes: ['id']
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
