import { User } from "../../models/index.js";

class UserController {
  static async createUser(req, res) {
    try {
      res.send("<h1>Create user</h1>")
    } catch (err) {

     }
  }

  static async getUser(req, res) {
    try {
      res.send("<h1>Get user</h1>")
    } catch (err) {

     }
  }

  // todo: metodos de clase
}

export default UserController;