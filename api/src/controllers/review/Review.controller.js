import { Review } from "../../models/index.js";

class ReviewController {
  static async createReview(req, res){
    try {
      res.send("<h1>Create review</h1>")
    } catch (err) {
      
    }
  }

  static async getReview(req, res){
    try {
      res.send("<h1>Get review</h1>")
    } catch (err) {
      
    }
  }

  // TODO metodos de clase
}

export default ReviewController;