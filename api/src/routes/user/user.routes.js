import { Router } from "express";
import UserController from "../../controllers/user/User.controller.js";

const userRoutes = Router();

userRoutes.post("/", UserController.createUser);
userRoutes.get("/", UserController.getAllUser); //NO SE USARÁ ESTÉ ENDPOINT
userRoutes.get("/profile/:id", UserController.getUserById);
// userRoutes.get('/cart/:id', UserController.getUserCart);
// userRoutes.get('/:id/wish', UserController.getUserWish);
userRoutes.get('/:id/card', UserController.getUserCard);
userRoutes.get('/:id/order', UserController.getUserOrder);
userRoutes.put("/:id", UserController.updateUser);
userRoutes.delete("/:id", UserController.deleteUser);
// TODO: all necessary paths

export default userRoutes;