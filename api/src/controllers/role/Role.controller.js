import { Role } from "../../models/index.js";

class RoleController {
  static async createRole(req, res){
    try {
      res.send("<h1>Create role</h1>")
    } catch (err) {
      
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