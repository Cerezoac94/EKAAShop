import { Review, Product, User } from "../../models/index.js";

class ReviewController {
  // CREATE
  // VALIDAR QUE EL USER PUEDA CREAR REVIEW, SOLO A PRODUCTOS QUE HA ORDENADO
  static async createReview(req, res) {
    try {
      const { idProduct, idUser, rating, title, description, reviewDate } =
        req.body;

      const results = await Review.create({
        idProduct,
        idUser,
        rating,
        title,
        description,
        reviewDate,
      });
      if (!results) throw "The Review is not created";
      res.status(201).send({
        success: true,
        message: "Review created succesfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  // GET ALL
  static async getAllReview(req, res) {
    try {
      const results = await Review.findAll({
        include: [
          {
            model: User,
            attributes: ["userName"],
          },
          {
            model: Product,
            attributes: ["image"],
          },
        ],
      });
      if (results.length === 0) throw "No review found";
      res.status(200).send({
        success: true,
        message: "Review",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // GET BY ID will not be used

  // UPDATE
  // REVIEW: check if only indicated fields can be updated
  static async updateReview(req, res) {
    try {
      const {id} =req.params
      const { idProduct, idUser, rating, title, description, reviewDate } =
        req.body;
      // solo actualizará descripcion
      const results = await Review.update(
        {
          idProduct,
          idUser,
          rating,
          title,
          description,
          reviewDate,
        },
        {
          where: {
            idUser: id,
          },
        }
      );
      if (results[0] === 0) throw "No review was updated";
      res.status(204).send();
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  // DELETE inly admin be used
  static async deleteReview(req, res) {
    try {
      const {id} = req.params
      const results = await Review.destroy({
        where: {
          id: id,
        },
      });
      if (results === 0) throw "No review was deleted";
      res.status(204).send();
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err,
      });
    }
  }
}

export default ReviewController;
