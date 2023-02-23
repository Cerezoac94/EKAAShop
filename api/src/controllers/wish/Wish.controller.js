import { Wish } from "../../models/index.js"

class WishController {
  static async createWish(req, res) {
    try {
      res.send("<h1>Create wish</h1>")
    } catch (err) {
      
    }
  }
  static async getWish(req, res) {
    try {
      res.send("<h1>Get wish</h1>")
    } catch (err) {
      
    }
  }
}

export default WishController