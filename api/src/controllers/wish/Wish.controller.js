import { Wish, User, Product, WishProduct } from "../../models/index.js"

class WishController {

  // GET WISH
  static async getWish(req, res) {
    try {
      const idUser  = req.params
      const results = await Wish.findOne({
        where: idUser,
        include: [
          { model: Product,
          attributes: ['id','name', 'description', 'price', 'stock', 'image'] }
        ]
      });
      if (results.Products.length ===0) throw "No product wish ";
      res.status(201).send({
        success: true,
        message: "Wish",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  static async addProductWish(req, res) {
    try {
      const { idUser, idProduct } = req.params
    
      const user = await User.findByPk(idUser)
      if (!user) throw 'Problem with finding the user'

      
      const wish = await Wish.findOne({ where: { idUser: user.id } });
      if (!wish) throw 'Problem with finding the wish'

      
      const product = await Product.findByPk(idProduct);
      if (!product) throw 'No product found'


      
      const wishProduct = await WishProduct.findOne({
        where:
        {
          idWish: wish.id,
          idProduct: product.id
        }
      });
      
      if (!wishProduct) {
        const results = await WishProduct.create({
          idWish: wish.id,
          idProduct: product.id
        })
        res.status(201).send({
          success: true,
          message: "Product added to wish list"
        });
        if (!results) throw "Not added to wish"
      }
      
      else {
        const results = await WishProduct.destroy({
          where: {
            idWish: wish.id,
            idProduct: product.id
          }
        })
        res.status(201).send({
          success: true,
          message: "Product removed from wish"
        });
        if (results == 0) throw "Could not be eliminated due to wish"
      }
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err
      })
    }
  }

}

export default WishController