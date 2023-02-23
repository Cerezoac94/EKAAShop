import { Router } from "express";
import CodeDiscountController from "../../controllers/codeDiscount/CodeDiscount.controller.js";

const codeDiscountRoutes = Router();

codeDiscountRoutes.get("/", CodeDiscountController.getAllCodeDiscount);
codeDiscountRoutes.get("/:id", CodeDiscountController.getCodeDiscountById);
codeDiscountRoutes.post("/", CodeDiscountController.createCodeDiscount);
codeDiscountRoutes.put("/:id", CodeDiscountController.updateCodeDiscount);
codeDiscountRoutes.delete("/:id", CodeDiscountController.deleteCodeDiscount);

export default codeDiscountRoutes;
