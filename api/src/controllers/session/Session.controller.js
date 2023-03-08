import { Op } from "sequelize";
import { User } from "../../models/index.js";

class SessionController {
static async login(req, res){
try {
  const { userEmail, password } = req.body
  const results = await User.findOne({
    where: {
      [Op.or]: [{ userName: userEmail }, { email: userEmail }]
    }
  })
  if(!results) throw 'The user name or email and/or password you entered are incorrect.'
  const isEqual = await results.validatePassword(password)
  if(!isEqual) throw 'The user name or email and/or password you entered are incorrect.'

  res.status(200).send({
    succes: true,
    message: 'You have been successfully logged in!'
  })
} catch (err) {
  res.status(400).send({
    succes: false,
    message: err
  })
}
}

static async me(req, res){
  try {
  
  } catch (err) {
    
  }
}

static async logout(req, res){
  try {
  
  } catch (err) {
    
  }
}

}

export default SessionController;