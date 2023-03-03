import { Review, Product, User } from "../../models/index.js";

class ReviewController {
  // CREATE
  // VALIDAR QUE EL USER PUEDA CREAR REVIEW, SOLO SI A PRODUCTOS QUE HA ORDENADO
  static async createReview(req, res) {
    try {
      const results = await Review.create(req.body)
      if (!results) throw "The Review is not created"
      res.status(201).send({
        success: true,
        message: "Review created succesfully",
        results
      })
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

  // GET ALL
  static async getAllReview(req, res) {
    try {
      const results = await Review.findAll({
        include:[
        {
            model:User,
            attributes:['userName'],
        },
        {
          model:Product,
          attributes:['image']
        }
      ]
      })
      if (results.length === 0) throw "No review found"
      res.status(200).send({
        success: true,
        message: "Review",
        results
      })
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err
      })
    }
  }

  // GET BY ID will not be used

  // UPDATE
  // REVIEW: check if only indicated fields can be updated
  static async updateReview(req, res) {
    try {
      // solo actualizará descripcion
      const results = await Review.update(req.body, {
        where: {
          idUser: req.params.id
        }
      })
      if (results[0] === 0) throw "No review was updated"
      res.status(204).send()
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

   // DELETE probably won't be used
   static async deleteReview(req, res) {
    try {
      const results = await Review.destroy({
        where: {
          id: req.params.id
        }
      })
      if (results === 0) throw "No review was deleted"
      res.status(204).send()
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err
      })
    }
  }

}

export default ReviewController;