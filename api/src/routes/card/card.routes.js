import { Router } from "express";
import CardController from "../../controllers/card/Card.controller.js";

const cardRoutes = Router()

cardRoutes.post("/", CardController.createCard);
// cardRoutes.get("/", CardController.getAllCard);
cardRoutes.get("/:id", CardController.getCardById);
cardRoutes.delete("/:id", CardController.deleteCard);
// TODO: all necessary routes

export default cardRoutes;