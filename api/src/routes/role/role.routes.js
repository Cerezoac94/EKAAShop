import { Router } from "express";
import RoleController from "../../controllers/role/Role.controller.js";
import authAdmin from "../../middleware/authAdmin.js";
import authMe from "../../middleware/authMe.js";

const roleRoutes = Router();

roleRoutes.use(authMe);
roleRoutes.use(authAdmin);
roleRoutes.post("/", RoleController.createRole);
roleRoutes.get("/", RoleController.getAllRoles);
roleRoutes.put("/:id", RoleController.updateRole);
roleRoutes.delete("/:id", RoleController.deleteRole);

export default roleRoutes;