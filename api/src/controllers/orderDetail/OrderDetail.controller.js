import { Order, OrderDetail, Product } from "../../models/index.js"

class OrderDetailController {
    static async createOrderDetail(req, res) {
        try {
          const results = await OrderDetail.create(req.body);
          if (!results) throw "The product in the order is not added";
          res.status(201).send({
            success: true,
            message: "Product in order added succesfully",
            results,
          });
        } catch (err) {
          res.status(400).send({
            success: false,
            message: err,
          });
        }
      }
    

//    GET ALL
    static async getAllOrderDetail(req, res) {
        try {
            const results = await OrderDetail.findAll({
              include: [{ model: Product,
                attributes: ["name", "price", "image"] },
                {model: Order,
                    attributes:["orderDate"]
                }]
            });
            if (results.length === 0) throw "No products added";
            res.status(201).send({
              success: true,
              message: "Products",
              results,
            });
          } catch (err) {
            res.status(404).send({
              success: false,
              message: err,
            });
          }
    }

}

export default OrderDetailController