import { State } from "../../models/index.js";

class StateController {
  static async createState(req, res) {
    try {
      const {name} = req.body
      const results = await State.create({name})
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

  
  static async updateState(req, res){
    try {
      const {id} = req.params
      const {name} = req.body
      const results = await State.update( {id,name}, {
        where: {
          id: id
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


  
  static async deleteState(req, res){
    try {
      const {id} = req.params
      const results = await State.destroy({
        where: {
          id: id
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
  
}

export default StateController;