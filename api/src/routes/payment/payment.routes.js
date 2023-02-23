import { Router } from "express";
import PaymentController from "../../controllers/payment/Payment.controller.js";

const paymentRoutes = Router();

paymentRoutes.get("/", PaymentController.getAllPayment);
// paymentRoutes.get("/detail/:id", PaymentController.getPaymentById);
paymentRoutes.post("/", PaymentController.createPayment);
paymentRoutes.put("/:id", PaymentController.updatePayment);
paymentRoutes.delete("/:id", PaymentController.deletedPayment);

export default paymentRoutes;
