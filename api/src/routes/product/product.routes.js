import { Router } from "express";
import ProductController from "../../controllers/product/Product.controller.js";

const productRoutes = Router();

productRoutes.get("/", ProductController.getAllProducts);

export default productRoutes;
