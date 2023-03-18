import { Router } from "express";
import CartController from "../../controllers/cart/Cart.controller.js";
import authMe from "../../middleware/authMe.js";

const cartRoutes = Router()

cartRoutes.use(authMe)
cartRoutes.get('/:id', CartController.getCart)
cartRoutes.post('/:idUser', CartController.addProductCart)
cartRoutes.put('/increment/:idCart/:idProduct', CartController.incrementProductCart)
cartRoutes.put('/decrement/:idCart/:idProduct', CartController.decrementProductCart)
cartRoutes.delete('/:idCart/:idProduct', CartController.deleteProductCart)

export default cartRoutes