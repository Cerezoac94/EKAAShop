import { Card, User } from "../../models/index.js";

class CardController {
  
  static async createCard(req, res) {
    try {
      
      const { cardNumber, expirationDate, cvv, idUser } = req.body;
      const results = await Card.create({
        idUser,
        cardNumber,
        expirationDate,
        cvv
      });
      if (!results) throw "The card is not created";
      res.status(201).send({
        success: true,
        message: "User card succesfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  
  static async getCardById(req, res) {
    try {
      const { id } = req.params;
      const results = await Card.findAll({
        where: {
          idUser: id,
        },
        attributes: ["id", "cardNumber", "expirationDate", "cvv"],
        include: {
          model: User,
          attributes: ["firstName", "lastName", "email"],
        },
      });
      if (!results) throw "No card found";
      res.status(200).send({
        success: true,
        message: "Cards",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  
  static async deleteCard(req, res) {
    try {
      const { id } = req.params;
      const results = await Card.destroy({
        where: {
          id: id,
        },
      });
      if (results === 0) throw "No card was deleted";
      res.status(204).send();
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err,
      });
    }
  }
}

export default CardController;
