import { Router } from "express";
import ReviewController from "../../controllers/review/Review.controller.js";

const reviewRoutes = Router();

reviewRoutes.post("/", ReviewController.createReview);
reviewRoutes.get("/", ReviewController.getAllReview);
reviewRoutes.put("/:id", ReviewController.updateReview);
reviewRoutes.delete("/:id", ReviewController.deleteReview);
// TODO: all necessary paths

export default reviewRoutes;