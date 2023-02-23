import { Router } from "express";
import RoleController from "../../controllers/role/Role.controller.js";

const roleRoutes = Router();

roleRoutes.post("/", RoleController.createRole);
roleRoutes.get("/", RoleController.getRole);
// TODO: all necessary paths

export default roleRoutes;