import { Router } from "express";
import ProductController from "../../controllers/product/Product.controller.js";

const productRoutes = Router();

productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.post("/", ProductController.createProduct);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.delete("/:id", ProductController.deletedProduct);

export default productRoutes;
