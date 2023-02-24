import { Router } from 'express';
import OrderDetailController from '../../controllers/orderDetail/OrderDetail.controller.js';
const orderDetailRoutes = Router()
orderDetailRoutes.post("/", OrderDetailController.createOrderDetail)
orderDetailRoutes.get("/", OrderDetailController.getAllOrderDetail)

export default orderDetailRoutes