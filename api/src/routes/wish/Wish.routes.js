import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";

const wishRoutes = Router();


wishRoutes.put("/:id", WishController.updateWish);
wishRoutes.delete("/:id", WishController.deleteWish);
// TODO: all necessary paths

export default wishRoutes;