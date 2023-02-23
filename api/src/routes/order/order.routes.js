import { Router } from "express";
import OrderController from "../../controllers/order/Order.controller.js";

const orderRoutes = Router();

orderRoutes.get("/", OrderController.getAllOrder);
orderRoutes.get("/:id", OrderController.getOrderById);
orderRoutes.post("/", OrderController.createOrder);
orderRoutes.put("/:id", OrderController.updateOrder);
orderRoutes.delete("/:id", OrderController.deletedOrder);

export default orderRoutes;
