import { Router } from "express";
import CartController from "../../controllers/cart/Cart.controller.js";

const cartRoutes = Router()

cartRoutes.get('/:id', CartController.getCart)
cartRoutes.post('/:idUser/:idProduct', CartController.addProductCart)
// cartRoutes.post('/', CartController.createCart)
cartRoutes.put('/:id',CartController.updateCart)
cartRoutes.delete('/:id', CartController.deletedCart)

export default cartRoutes