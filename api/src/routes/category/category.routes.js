import { Router } from "express";
import CategoryController from "../../controllers/category/Category.controller.js";
import authAdmin from "../../middleware/authAdmin.js";
import authMe from "../../middleware/authMe.js";

const categoryRoutes = Router();


categoryRoutes.use(authMe)
categoryRoutes.use(authAdmin)
categoryRoutes.get("/", CategoryController.getAllCategory);
categoryRoutes.get('/:id', CategoryController.getCategoryById);
categoryRoutes.post("/", CategoryController.createCategory);
categoryRoutes.put("/:id", CategoryController.updateCategory);
categoryRoutes.delete("/:id", CategoryController.deleteCategory);

export default categoryRoutes;
