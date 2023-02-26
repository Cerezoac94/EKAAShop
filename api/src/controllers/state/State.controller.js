import { State } from "../../models/index.js";

class StateController {
  static async createState(req, res) {
    try {
      const results = await State.create(req.body)
      if (!results) throw "The state is not created"
      res.status(201).send({
        success: true,
        message: "State created succesfully",
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
  static async getAllStates(req, res) {
    try {
      const results = await State.findAll()
      if(results.length === 0) throw "No state found"
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

  // UPDATE
  static async updateState(req, res){
    try {
      const results = await State.update( req.body, {
        where: {
          id: req.params.id
        }
      })
      if(results[0] === 0) throw "No state was updated"
      res.status(204).send() 
    } catch (err) {
      res.status(400).send({ 
        success: false,
        message: err
      })
    }
  }


  // DELETE
  static async deleteState(req, res){
    try {
      const results = await State.destroy({
        where: {
          id: req.params.id
        }
      })
      if(results === 0) throw "No state was deleted"
      res.status(204).send() 
    } catch (err) {
      res.status(403).send({ 
        success: false,
        message: err
      })
    }
  }
  //TODO metodos de clase
}

export default StateController;