import { Router } from "express";
import CartProductController from "../../controllers/cartProduct/CartProduct.controller.js";

const cartProductRoutes = Router();

cartProductRoutes.get("/", CartProductController.getAllCartProduct);
cartProductRoutes.get("/:id", CartProductController.getCartProductById);
cartProductRoutes.post("/", CartProductController.createCartProduct);
cartProductRoutes.put("/:id", CartProductController.updateCartProduct);
cartProductRoutes.delete("/:id", CartProductController.deletedCartProduct);

export default cartProductRoutes;
