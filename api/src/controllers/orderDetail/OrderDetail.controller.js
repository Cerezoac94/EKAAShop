import { OrderDetail } from "../../models/index.js"

class OrderDetailController {
    static async createOrderDetail(req, res) {
        try {
            res.send('OrderDetailCreado')
        } catch (err) {

        }
    }
    static async getAllOrderDetail(req, res) {
        try {
            res.send('OrderDetails')
        } catch (err) {

        }
    }

}

export default OrderDetailController