import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";

const wishRoutes = Router();


wishRoutes.post('/:idUser/:idProduct', WishController.addProductWish)
wishRoutes.put("/:id", WishController.updateWish);
wishRoutes.delete("/:id", WishController.deleteWish);
// TODO: all necessary paths

export default wishRoutes;