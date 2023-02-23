import { Router } from "express";
import WishProductController from "../../controllers/wishProduct/WishProduct.controller.js";

const wishProductRoutes = Router();

wishProductRoutes.post("/", WishProductController.createWishProduct);
wishProductRoutes.get("/", WishProductController.getWishProduct);
//TODO: all necessary paths

export default wishProductRoutes;