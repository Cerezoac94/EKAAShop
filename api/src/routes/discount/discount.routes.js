import { Router } from 'express';
import DiscountController from '../../controllers/discount/Discount.controller.js';

const discountRoutes = Router();

discountRoutes.post("/", DiscountController.createDiscount);
discountRoutes.get("/",DiscountController.getAllDiscounts);

export default discountRoutes;