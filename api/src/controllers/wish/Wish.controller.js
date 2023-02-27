import { User, Wish } from "../../models/index.js"

class WishController {
  // Create
  static async createWish(req, res) {
    try {
      const results = await Wish.create(req.body)
      if (!results) throw "The wish is not created"
      res.status(201).send({
        success: true,
        message: "Wish created succesfully",
        results
      })
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

 // GET ALL WILL NOT BE USED
 static async getAllWish(req, res) {
  try {
    const results = await Wish.findAll()
    if (results.length === 0) throw "No wish found"
    res.status(200).send({
      success: true,
      message: "Wish",
      results
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err
    })
  }
}

 // GET BY ID
 static async getWishById(req, res) {
  try {
    const results = await Wish.findOne({
      where: {
        id: req.params.id
      },
      attributes: ["name"],
      include: { model: User, attributes: ["userName"] }
    })
    if (!results) throw "No wish found"
    res.status(200).send({
      success: true,
      message: "Users",
      results
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err
    })
  }
}

// UPDATE
  // REVIEW: check if only indicated fields can be updated
  static async updateWish(req, res) {
    try {
      const results = await Wish.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if (results[0] === 0) throw "No wish was updated"
      res.status(204).send()
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

   // DELETE
  //  only if more than one wish can be created
   static async deleteWish(req, res) {
    try {
      const results = await Wish.destroy({
        where: {
          id: req.params.id
        }
      })
      if (results === 0) throw "No wish was deleted"
      res.status(204).send()
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err
      })
    }
  }

}

export default WishController