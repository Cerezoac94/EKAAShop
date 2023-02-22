import { Router } from "express";
import product from "./product/product.js";

const routes = Router()

routes.use('/products', product)

export default routes