

const authAdmin = (req, res, next) => {
  const { role } = req.user
  if(role == 1) {
    next()
  }else{
    res.status(401).send({
      succes:false,
      message: "Unauthorized"
    }) 
  }
}

export default authAdmin;