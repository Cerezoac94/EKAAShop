import { Router } from "express";
import CardController from "../../controllers/card/Card.controller.js";

const cardRoutes = Router()

cardRoutes.post("/", CardController.createCard);
cardRoutes.get("/", CardController.getCard);
// TODO: all necessary routes

export default cardRoutes;