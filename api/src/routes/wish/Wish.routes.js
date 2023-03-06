import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";

const wishRoutes = Router();

wishRoutes.get('/:id', WishController.getWish)
wishRoutes.post('/:idUser/:idProduct', WishController.addProductWish)

export default wishRoutes;