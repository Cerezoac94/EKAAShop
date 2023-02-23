import { Router } from "express";
import productRoutes from "./product/product.routes.js";
import userRoutes from "./user/user.routes.js"
import wishRoutes from "./wish/Wish.routes.js";
import wishProductRoutes from "./wishProduct/wishProduct.routes.js";
import stateRoutes from "./state/state.routes.js"
import roleRoutes from "./role/role.routes.js";

const routes = Router();

routes.use("/products", productRoutes)
routes.use("/user", userRoutes)
routes.use("/wish", wishRoutes)
routes.use("/wish/detail", wishProductRoutes)
routes.use("/state", stateRoutes)
routes.use("/role", roleRoutes)

export default routes;
