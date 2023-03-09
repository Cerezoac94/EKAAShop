import { Op } from "sequelize";
import { User } from "../../models/index.js";
import { generateToken } from "../../config/token.js";

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

  const payload = {
    id: results.id,
    userName: results.userName,
    role: results.idRole
  }
  const token = generateToken(payload)
  res.cookie("token", token)
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
  res.status(200).send({
    succes: true,
    message: "Authentication successful. The user is authenticated.",
    result: req.user
  })
}

static async logout(req, res){
  res.clearCookie("token");
  res.send(204)
}

}

export default SessionController;