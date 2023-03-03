import { Router } from "express";
import CategoryController from "../../controllers/category/Category.controller.js";

const categoryRoutes = Router();

categoryRoutes.get("/", CategoryController.getAllCategory);
categoryRoutes.post("/", CategoryController.createCategory);
categoryRoutes.put("/:id", CategoryController.updateCategory);
categoryRoutes.delete("/:id", CategoryController.deleteCategory);

export default categoryRoutes;
