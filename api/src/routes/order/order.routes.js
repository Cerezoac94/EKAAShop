import { Router } from "express";
import OrderController from "../../controllers/order/Order.controller.js";

const orderRoutes = Router();

orderRoutes.get("/", OrderController.getAllOrder);
orderRoutes.get('/orders/:idUser', OrderController.getOrderByUser)
orderRoutes.get('/orders/:idUser/:id', OrderController.getOrderById)
orderRoutes.get('/orders_product/:idProduct', OrderController.getOrdersByProduct)
orderRoutes.post("/", OrderController.createOrder);
orderRoutes.put("/:id", OrderController.updateOrder);
orderRoutes.delete("/:id", OrderController.deleteOrder);

export default orderRoutes;
