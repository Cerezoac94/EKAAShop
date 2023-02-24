import { Role } from "../../models/index.js";

class RoleController {
  // CREATE
  static async createRole(req, res){
    try {
      const results = await Role.create(req.body)
      if (!results) throw "The category is not created"
      res.status(201).send({
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

  // GET ALL
  static async getAllRoles(req, res){
    try {
      const results = await Role.findAll()
      if(results.length === 0) throw "No role found"
      res.status(200).send({
        success: true,
        message: "Roles",
        results
      })
    } catch (err) {
      res.status(404).send({ 
        success: false,
        message: err
       })
    }
  }

  // GET BY ID
  // REVIEW: Es probable que este endpoint no sea necesario
  static async getRoleById(req, res){
    try {
      const results = await Role.findOne({
        where: {
          id: req.params.id
        },
        attributes: ["name"]
      })
      console.log(results);
      if(!results) throw "No role found"
      res.status(200).send({
        success: true,
        message: "Categories",
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
  static async updateRole(req, res){
    try {
      const results = await Role.update( req.body, {
        where: {
          id: req.params.id
        }
      })
      console.log(results);
      if(results[0] === 0) throw "No role was updated"
      res.status(204).send() 
    } catch (err) {
      res.status(400).send({ 
        success: false,
        message: err
      })
    }
  }

  // DELETE
  static async deleteRole(req, res){
    try {
      const results = await Role.destroy({
        where: {
          id: req.params.id
        }
      })
      console.log(results);
      if(results === 0) throw "No role was deleted"
      res.status(204).send() 
    } catch (err) {
      res.status(403).send({ 
        success: false,
        message: err
      })
    }
  }


  // TODO: metodos de clase
}

export default RoleController;