import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";

const wishRoutes = Router();

wishRoutes.post("/", WishController.createWish);
wishRoutes.get("/", WishController.getAllWish);
wishRoutes.get("/:id", WishController.getWishById);
wishRoutes.put("/:id", WishController.updateWish);
wishRoutes.delete("/:id", WishController.deleteWish);
// TODO: all necessary paths

export default wishRoutes;