import { Router } from "express";
import StateController from "../../controllers/state/State.controller.js";

const stateRoutes = Router();

stateRoutes.post("/", StateController.createState);
stateRoutes.get("/", StateController.getState);

export default stateRoutes;