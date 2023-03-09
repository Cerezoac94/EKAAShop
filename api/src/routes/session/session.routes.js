import  { Router } from 'express'
import SessionController from '../../controllers/session/Session.controller.js'
import authMe from '../../middleware/authMe.js';

const sessionRoutes = Router();

sessionRoutes.post("/login", SessionController.login);
// sessionRoutes.use(authMe);
sessionRoutes.get("/me", SessionController.me);
sessionRoutes.post("/logout", SessionController.logout);

export default sessionRoutes;