import { State } from "../../models/index.js";

class StateController {
  static async createState(req, res) {
    try {
      res.send("<h1>Create state</h1>")
    } catch (err) {
      
    }
  }
  
  static async getState(req, res) {
    try {
      res.send("<h1>Get state</h1>")
    } catch (err) {
      
    }
  }

  //TODO metodos de clase
}

export default StateController;