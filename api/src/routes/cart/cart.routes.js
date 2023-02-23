import { Router } from "express";
import Cart from "../../controllers/cart/Cart.controller.js";

const cartRoutes = Router()

cartRoutes.get('/', Cart.getAllCart)
cartRoutes.get('/:id', Cart.getCartById)
cartRoutes.post('/', Cart.createCart)
cartRoutes.put('/:id',Cart.updateCart)
cartRoutes.delete('/:id', Cart.deletedCart)

export default cartRoutes