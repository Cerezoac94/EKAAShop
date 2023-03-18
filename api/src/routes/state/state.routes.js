import { Router } from "express";
import StateController from "../../controllers/state/State.controller.js";
import authAdmin from "../../middleware/authAdmin.js";
import authMe from "../../middleware/authMe.js";

const stateRoutes = Router();

stateRoutes.use(authMe);
stateRoutes.get("/", StateController.getAllStates);
stateRoutes.use(authAdmin);
stateRoutes.post("/", StateController.createState);
stateRoutes.put("/:id", StateController.updateState);
stateRoutes.delete("/:id", StateController.deleteState);


export default stateRoutes;