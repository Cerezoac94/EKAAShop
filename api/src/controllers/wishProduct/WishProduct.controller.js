import WishProduct from "../../models/wishProduct/WishProduct.model.js";

class WishProductController {
  static async createWishProduct(req, res){
    try {
      res.send("<h1>Create wish detail</h1>")
    } catch (err) {
      
    }
  }
  static async getWishProduct(req, res){
    try {
      res.send("<h1>Get wish detail</h1>")
    } catch (err) {
      
    }
  }
}

export default WishProductController;