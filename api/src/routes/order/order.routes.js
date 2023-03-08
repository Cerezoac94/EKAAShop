import { Router } from "express";
import OrderController from "../../controllers/order/Order.controller.js";

const orderRoutes = Router();

orderRoutes.get("/", OrderController.getAllOrders);
orderRoutes.get('/:idUser', OrderController.getOrderByUser);
orderRoutes.get('/detail/:idOrder', OrderController.getOrderById);
orderRoutes.get('/product/:idProduct', OrderController.getOrdersByProduct);
orderRoutes.post("/", OrderController.createOrder);
orderRoutes.put("/:id", OrderController.updateOrder);
orderRoutes.delete("/:idOrder", OrderController.deleteOrder);
orderRoutes.delete("/:idOrder/:idProduct", OrderController.deleteProductOrder);

export default orderRoutes;
