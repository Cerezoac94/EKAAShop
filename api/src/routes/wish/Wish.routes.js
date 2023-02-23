import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";

const wishRoutes = Router();

wishRoutes.post("/", WishController.createWish)
wishRoutes.get("/", WishController.getWish)
// TODO: all necessary paths

export default wishRoutes;