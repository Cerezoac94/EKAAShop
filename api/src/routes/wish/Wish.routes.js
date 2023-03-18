import { Router } from "express";
import WishController from "../../controllers/wish/Wish.controller.js";
import authMe from "../../middleware/authMe.js";

const wishRoutes = Router();

wishRoutes.use(authMe);
wishRoutes.get('/:id', WishController.getWish)
wishRoutes.post('/:idUser/:idProduct', WishController.addProductWish)

export default wishRoutes;