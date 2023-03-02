import { Wish } from "../../models/index.js"

class WishController {

 


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