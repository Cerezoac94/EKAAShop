import { Router } from "express";
import UserController from "../../controllers/user/User.controller.js";

const userRoutes = Router();

userRoutes.post("/", UserController.createUser);
userRoutes.get("/all", UserController.getAllUser); //NO SE USARÁ ESTÉ ENDPOINT
userRoutes.get("/:id", UserController.getUserById);
userRoutes.put("/:id", UserController.updateUser);
userRoutes.delete("/:id", UserController.deleteUser);
// TODO: all necessary paths

export default userRoutes;