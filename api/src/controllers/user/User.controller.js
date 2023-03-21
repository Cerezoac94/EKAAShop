import {
  State,
  User,
  Cart,
  Wish,
} from "../../models/index.js";
import { generateToken } from "../../config/token.js";
import newAccount from "../../utils/mails/newAccount.js";

class UserController {
  // FIXME: Al haber error de no encontrar "state" existente, aún así incrementa el id
  static async createUser(req, res) {
    try {
      const { userName, firstName, lastName, email, password } = req.body;
      const results = await User.create({
        userName,
        firstName,
        lastName,
        email,
        password,
        idRole: 2,
        memberSince:  new Date()
      });
      if (!results) throw "The User is not created";
      const cart = await Cart.create({
        idUser: results.id,
      });
      const wish = await Wish.create({
        idUser: results.id,
      });
      // send email new account
      await newAccount(email, userName)

      await results.update({
        idCart: cart.id,
        idWish: wish.id,
      });
      const payload = {
        id: results.id,
        userName: results.userName,
        role: results.idRole
      }
      const token = generateToken(payload)
      res.cookie("token", token)
      res.status(201).send({
        success: true,
        message: "User created succesfully",
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
          "id",
          "userName",
          "firstName",
          "lastName",
          "email",
          "birthday",
          "phone",
          "adress",
        ],
        include: { model: State, attributes: ["id","name"] },
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
        firstName,
        lastName,
        email,
        password,
        birthday,
        phone,
        adress,
        idState
      } = req.body;
      const { id } = req.params;
      const results = await User.update(
        {
          firstName,
          lastName,
          email,
          password,
          birthday,
          phone,
          adress,
          idState,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (results[0] === 0) throw "No user was updated";
      res.status(204).send({
        success: true,
        message: "User info successfully upgraded",
        results,
      });
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
