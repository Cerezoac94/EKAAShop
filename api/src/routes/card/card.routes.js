import { Router } from "express";
import CardController from "../../controllers/card/Card.controller.js";
import authAdmin from "../../middleware/authAdmin.js";

const cardRoutes = Router()

// useMe, PERO NO SE USARÁN
cardRoutes.use(authAdmin);
cardRoutes.post("/", CardController.createCard);
cardRoutes.get("/:id", CardController.getCardById);
cardRoutes.delete("/:id", CardController.deleteCard);

export default cardRoutes;