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
      if (results.length === 0) throw "No wish found";
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
      // Se busca al usuario
      const user = await User.findByPk(idUser)
      if (!user) throw 'Problem with finding the user'

      // Target wish para el usuario correspondinte
      const wish = await Wish.findOne({ where: { idUser: user.id } });
      if (!wish) throw 'Problem with finding the wish'

      // Validate product
      const product = await Product.findByPk(idProduct);
      if (!product) throw 'No product found'


      //  add to wish
      const wishProduct = await WishProduct.findOne({
        where:
        {
          idWish: wish.id,
          idProduct: product.id
        }
      });
      // Si no hay ningún registro en wishProduct relacionado a la wish del usuario o en los registros que existen, o no existe el producto que se desea agregar, crea un nuevo registro en wishProduct
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
      // Si hay registro en wishProduct y el producto es el mismo, elimina el registro
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