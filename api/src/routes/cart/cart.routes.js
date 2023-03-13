import { Router } from "express";
import CartController from "../../controllers/cart/Cart.controller.js";

const cartRoutes = Router()

cartRoutes.get('/:id', CartController.getCart)
cartRoutes.post('/:idUser', CartController.addProductCart)
cartRoutes.put('/increase/:idCart/:idProduct', CartController.incrementProductCart)
cartRoutes.put('/decrease/:idCart/:idProduct', CartController.decrementProductCart)
cartRoutes.delete('/:idCart/:idProduct', CartController.deleteProductCart)

export default cartRoutes