import { Router } from "express";
import UserController from "../../controllers/user/User.controller.js";
import authMe from "../../middleware/authMe.js";

const userRoutes = Router();

userRoutes.post("/", UserController.createUser);
// userRoutes.get("/all", UserController.getAllUser); //NO SE USARÁ ESTÉ ENDPOINT
userRoutes.use(authMe);
userRoutes.get("/:id", UserController.getUserById);
userRoutes.put("/:id", UserController.updateUser);
userRoutes.delete("/:id", UserController.deleteUser);

export default userRoutes;