import { Router } from 'express';
import DiscountController from '../../controllers/discount/Discount.controller.js';
import authAdmin from '../../middleware/authAdmin.js';
import authMe from '../../middleware/authMe.js';

const discountRoutes = Router();

// discountRoutes.use(authMe);
// discountRoutes.use(authAdmin);
discountRoutes.post("/", DiscountController.createDiscount);
discountRoutes.get("/",DiscountController.getAllDiscounts);
discountRoutes.put('/:id', DiscountController.updateDiscount)
discountRoutes.delete('/:id', DiscountController.deleteDiscount)

export default discountRoutes;