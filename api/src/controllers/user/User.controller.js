import {
  State,
  User,
  Cart,
  Wish,
} from "../../models/index.js";

class UserController {
  // FIXME: Al haber error de no encontrar "state" existente, aún así incrementa el id
  static async createUser(req, res) {
    try {
      const { userName, email, password } = req.body;
      const results = await User.create({
        userName,
        email,
        password,
        idRole: 2,
      });
      if (!results) throw "The User is not created";
      const cart = await Cart.create({
        idUser: results.id,
      });
      const wish = await Wish.create({
        idUser: results.id,
      });

      // await results.setCart(cart);
      // // 'idCart', cart.id
      // await results.setWish(wish);
      // // 'idCart', wish.id
      await results.update({
        idCart: cart.id,
        idWish: wish.id,
      });

      res.status(201).send({
        success: true,
        message: "User created succesfully",
        results,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  // GET ALL WILL NOT BE USED
  static async getAllUser(req, res) {
    try {
      const results = await User.findAll();
      if (results.length === 0) throw "No user found";
      res.status(200).send({
        success: true,
        message: "States",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }
  //

  // GET BY ID  (authme)
  // Review: como cambiar contraseña
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const results = await User.findOne({
        where: {
          id: id,
        },
        attributes: [
          "userName",
          "firstName",
          "lastName",
          "email",
          "birthday",
          "phone",
          "adress",
        ],
        include: { model: State, attributes: ["name"] },
      });
      if (!results) throw "No user found";
      res.status(200).send({
        success: true,
        message: "Users",
        results,
      });
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err,
      });
    }
  }

  // UPDATE
  // REVIEW: check if only indicated fields can be updated
  static async updateUser(req, res) {
    try {
      const {
        userName,
        firstName,
        lastName,
        email,
        password,
        birthday,
        phone,
        adress,
        memberSince,
        idState,
        idRole,
      } = req.body;
      const { id } = req.params;
      const results = await User.update(
        {
          userName,
          firstName,
          lastName,
          email,
          password,
          birthday,
          phone,
          adress,
          memberSince,
          idState,
          idRole,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (results[0] === 0) throw "No user was updated";
      res.status(204).send();
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  // DELETE
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const results = await User.destroy({
        where: {
          id: id,
        },
      });
      if (results === 0) throw "No user was deleted";
      res.status(204).send();
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err,
      });
    }
  }

}

export default UserController;
