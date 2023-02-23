import { Card } from "../../models/index.js";

class CardController {
  static async createCard(req, res){
    try {
      res.send("<h1>Create card</h1>")
    } catch (err) {
      
    }
  }

  static async getCard(req, res){
    try {
      res.send("<h1>Get card</h1>")
    } catch (err) {
      
    }
  }

  // TODO: metodos de clase
}

export default CardController;