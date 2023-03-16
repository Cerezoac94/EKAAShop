import { Router } from "express";
import OrderController from "../../controllers/order/Order.controller.js";
import authAdmin from "../../middleware/authAdmin.js";
import authMe from "../../middleware/authMe.js";

const orderRoutes = Router();

// orderRoutes.use(authMe);
orderRoutes.post("/", OrderController.createOrder);
orderRoutes.get('/:idUser', OrderController.getOrderByUser);
orderRoutes.get('/detail/:idOrder', OrderController.getOrderById);
orderRoutes.delete("/:idOrder", OrderController.deleteOrder);
orderRoutes.delete("/:idOrder/:idProduct", OrderController.deleteProductOrder);
// orderRoutes.use(authAdmin);
orderRoutes.get("/", OrderController.getAllOrders);
orderRoutes.get('/product/:idProduct', OrderController.getOrdersByProduct);
orderRoutes.put("/:idOrder", OrderController.updateOrder);


export default orderRoutes;
