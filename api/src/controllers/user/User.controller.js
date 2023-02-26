import { State, User } from "../../models/index.js";

class UserController {

  // FIXME: Al haber error de no encontrar "state" existente, aún así incrementa el id
  static async createUser(req, res) {
    try {
      const results = await User.create(req.body)
      if (!results) throw "The User is not created"
      res.status(201).send({
        success: true,
        message: "User created succesfully",
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
  static async getAllUser(req, res) {
    try {
      const results = await User.findAll()
      if (results.length === 0) throw "No user found"
      res.status(200).send({
        success: true,
        message: "States",
        results
      })
    } catch (err) {
      res.status(404).send({
        success: false,
        message: err
      })
    }
  }
  // 

  // GET BY ID
  static async getUserById(req, res) {
    try {
      const results = await User.findOne({
        where: {
          id: req.params.id
        },
        attributes: ["userName", "firstName", "lastName", "email", "birthday", "phone", "adress", "memberSince"],
        include: { model: State, attributes: ["name"] }
      })
      if (!results) throw "No user found"
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
  static async updateUser(req, res) {
    try {
      const results = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if (results[0] === 0) throw "No user was updated"
      res.status(204).send()
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

  // DELETE
  static async deleteUser(req, res) {
    try {
      const results = await User.destroy({
        where: {
          id: req.params.id
        }
      })
      if (results === 0) throw "No user was deleted"
      res.status(204).send()
    } catch (err) {
      res.status(403).send({
        success: false,
        message: err
      })
    }
  }

  // todo: metodos de clase
}

export default UserController;