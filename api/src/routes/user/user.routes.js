import { Router } from "express";
import UserController from "../../controllers/user/User.controller.js";

const userRoutes = Router();

userRoutes.post("/", UserController.createUser);
userRoutes.get("/profile", UserController.getUser);
// TODO: all necessary paths

export default userRoutes;