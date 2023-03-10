import { verify } from "../config/token.js"

const authMe = (req, res, next) => {
  try {
    const token = req.cookies.token
    if(!token) throw "The session token is invalid or has expired. Please log in again to obtain a new token"
    const { payload } = verify(token)
    if(!payload) throw "The session token is invalid or has expired. Please log in again to obtain a new token"
   
    req.user = payload
    next()
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err
    })
  }
}

export default authMe;