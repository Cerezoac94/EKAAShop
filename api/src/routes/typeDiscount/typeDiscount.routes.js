import { Router } from "express";
import TypeDiscountController from "../../controllers/typeDiscount/TypeDiscount.controller.js";

const typesDiscountRoutes = Router();

typesDiscountRoutes.get("/", TypeDiscountController.getAllTypeDiscount);
typesDiscountRoutes.get("/:id", TypeDiscountController.getTypeDiscountById);
typesDiscountRoutes.post("/", TypeDiscountController.createTypeDiscount);
typesDiscountRoutes.put("/:id", TypeDiscountController.updateTypeDiscount);
typesDiscountRoutes.delete("/:id", TypeDiscountController.deletedTypeDiscount);

export default typesDiscountRoutes;
