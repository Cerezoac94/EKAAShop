import { Router } from "express";
import Cart from "../../controllers/cart/Cart.controller.js";

const cartRoutes = Router()

cartRoutes.get('/:id', Cart.getCart)
cartRoutes.post('/:idUser/:idProduct', Cart.addProductCart)
// cartRoutes.post('/', Cart.createCart)
cartRoutes.put('/:id',Cart.updateCart)
cartRoutes.delete('/:id', Cart.deletedCart)

export default cartRoutes