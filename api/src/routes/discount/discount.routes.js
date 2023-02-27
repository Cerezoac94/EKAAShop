import { Router } from 'express';
import DiscountController from '../../controllers/discount/Discount.controller.js';

const discountRoutes = Router();

discountRoutes.post("/", DiscountController.createDiscount);
discountRoutes.get("/",DiscountController.getAllDiscounts);
discountRoutes.get('/:id', DiscountController.getDiscountById)
discountRoutes.put('/:id', DiscountController.updateDiscount)
discountRoutes.delete('/:id', DiscountController.deleteDiscount)

export default discountRoutes;