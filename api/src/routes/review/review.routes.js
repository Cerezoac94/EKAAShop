import { Router } from "express";
import ReviewController from "../../controllers/review/Review.controller.js";
import authAdmin from "../../middleware/authAdmin.js";
import authMe from "../../middleware/authMe.js";

const reviewRoutes = Router();

reviewRoutes.get("/", ReviewController.getAllReview);
reviewRoutes.use(authMe);
reviewRoutes.post("/:idUser/:idProduct", ReviewController.createReview);
reviewRoutes.put("/:id", ReviewController.updateReview);
reviewRoutes.use(authAdmin);
reviewRoutes.delete("/:id", ReviewController.deleteReview);

export default reviewRoutes;