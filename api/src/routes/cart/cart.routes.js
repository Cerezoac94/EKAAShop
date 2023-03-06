import { Router } from "express";
import CartController from "../../controllers/cart/Cart.controller.js";

const cartRoutes = Router()

cartRoutes.get('/:id', CartController.getCart)
cartRoutes.post('/:idUser/:idProduct', CartController.addProductCart)
cartRoutes.put('/:idCart/:idProduct/increase', CartController.increaseProductCart)
cartRoutes.put('/:idCart/:idProduct/decrease', CartController.decreaseProductCart)
cartRoutes.delete('/:idCart/:idProduct', CartController.deletedProductCart)

export default cartRoutes