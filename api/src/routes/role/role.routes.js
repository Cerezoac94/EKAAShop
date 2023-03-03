import { Router } from "express";
import RoleController from "../../controllers/role/Role.controller.js";

const roleRoutes = Router();

roleRoutes.post("/", RoleController.createRole);
roleRoutes.get("/", RoleController.getAllRoles);
roleRoutes.put("/:id", RoleController.updateRole);
roleRoutes.delete("/:id", RoleController.deleteRole);
// TODO: all necessary paths

export default roleRoutes;