import { Router } from "express";
import OrderController from "../../controllers/order/Order.controller.js";

const orderRoutes = Router();

orderRoutes.get("/", OrderController.getAllOrder);
orderRoutes.get('/filter_product/:idProduct', OrderController.getOrdersByProduct)
orderRoutes.get('/filter_order/:idUser', OrderController.getOrderByUser)
orderRoutes.post("/", OrderController.createOrder);
orderRoutes.put("/:id", OrderController.updateOrder);
orderRoutes.delete("/:id", OrderController.deletedOrder);

export default orderRoutes;
