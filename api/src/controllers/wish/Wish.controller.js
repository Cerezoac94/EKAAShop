import { Wish, User, Product, WishProduct } from "../../models/index.js"

class WishController {

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