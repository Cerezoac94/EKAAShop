import { Router } from "express";
import StateController from "../../controllers/state/State.controller.js";

const stateRoutes = Router();

stateRoutes.post("/", StateController.createState);
stateRoutes.get("/", StateController.getAllStates);
stateRoutes.put("/:id", StateController.updateState);
stateRoutes.delete("/:id", StateController.deleteState);


export default stateRoutes;