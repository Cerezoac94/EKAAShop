import  { Router } from 'express'
import SessionController from '../../controllers/session/Session.controller.js'

const sessionRoutes = Router();

sessionRoutes.post("/login", SessionController.login)
sessionRoutes.get("/me", SessionController.me)
sessionRoutes.post("/logout", SessionController.logout)

export default sessionRoutes;