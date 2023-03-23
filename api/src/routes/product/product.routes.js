import { Router } from "express";
import ProductController from "../../controllers/product/Product.controller.js";
import authAdmin from '../../middleware/authAdmin.js';
import authMe from "../../middleware/authMe.js";
import uploadImage from "../../middleware/uploadImage.js";

const productRoutes = Router();

productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/filter/discount", ProductController.getProductsWithDiscount);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.get("/filter/category/:idCategory", ProductController.getProductByCategory);
productRoutes.use(authMe);
productRoutes.use(authAdmin);
productRoutes.post("/", uploadImage, ProductController.createProduct);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.delete("/:id", ProductController.deletedProduct);

export default productRoutes;
