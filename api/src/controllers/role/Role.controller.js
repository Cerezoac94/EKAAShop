import { Role } from "../../models/index.js";

class RoleController {
  static async createRole(req, res){
    try {
      const results = await Role.create(req.body)
      if (!results) throw "The category is not created"
      res.status(200).send({
        success: true,
        message: "Role created succesfully",
        results
      })
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err
      })
    }
  }

  static async getRole(req, res){
    try {
      res.send("<h1>Get role</h1>")
    } catch (err) {
      
    }
  }

  // TODO: metodos de clase
}

export default RoleController;