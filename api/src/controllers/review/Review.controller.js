import { Review, Product, User, Order, OrderDetail } from "../../models/index.js";

class ReviewController {
  
  static async createReview(req, res) {
    try {

      
      const { idUser, idProduct } = req.params
      const { title, description, rating } = req.body
      const reviewDate = new Date()
      reviewDate.toLocaleDateString();
      const ProductInOrder = await Order.findOne({
        where:{
          idUser: idUser
        },
        include: {
          model: OrderDetail,
          where:{
            idProduct: idProduct
          }
        }
      })
      if (!ProductInOrder) {
        throw 'You cannot create a review for a product that has not been purchased'
      }
      
      const results = await Review.create({ rating, title, description, reviewDate, idUser, idProduct })
      console.log(2);
      if (!results) throw "The Review is not created"
      res.status(201).send({
        success: true,
        message: "Review created succesfully",
        results
      })
      

    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  
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
          attributes:['name', 'image']
        }
      ]
      })
      if (results.length === 0) throw "No review found"

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
