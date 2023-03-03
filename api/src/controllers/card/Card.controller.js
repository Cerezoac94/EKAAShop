import { Card, User } from "../../models/index.js";

class CardController {
  // CREATE
  static async createCard(req, res) {
    try {
// desestrcutura campos idUser, cardNumber, expirationDate, cvv
      const results = await Card.create(req.body)
      if (!results) throw "The card is not created"
      res.status(201).send({
        success: true,
        message: "User card succesfully",
        results
      })
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }


  // GET BY IDUSER
  static async getCardById(req, res) {
    try {
      const results = await Card.findAll({
        where: {
          idUser: req.params.id
        },
        attributes: ["cardNumber", "expirationDate", "cvv"],
        include: { model: User, attributes: ["firstName", "lastName", "email"] }
      })
      if (!results) throw "No card found"
      res.status(200).send({
        success: true,
        message: "Cards",
        results
      })
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err
      })
    }
  }

// NOTE: No se permitirá update, simplemente eliminar

// DELETE
static async deleteCard(req, res) {
  try {
    const results = await Card.destroy({
      where: {
        id: req.params.id
      }
    })
    if (results === 0) throw "No card was deleted"
    res.status(204).send()
  } catch (err) {
    res.status(403).send({
      success: false,
      message: err
    })
  }
}

}

export default CardController;