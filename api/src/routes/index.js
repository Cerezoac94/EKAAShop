import { Router } from "express";
import productRoutes from "./product/product.routes.js";
import userRoutes from "./user/user.routes.js"
import wishRoutes from "./wish/wish.routes.js";
import stateRoutes from "./state/state.routes.js"
import roleRoutes from "./role/role.routes.js";
import categoryRoutes from "./category/category.routes.js";
import orderRoutes from "./order/order.routes.js";
import cartRoutes from "./cart/cart.routes.js";
import reviewRoutes from "./review/review.routes.js";
import cardRoutes from "./card/card.routes.js";
import discountRoutes from "./discount/discount.routes.js";

const routes = Router();

routes.use("/product", productRoutes);
routes.use("/user", userRoutes);
routes.use("/wish", wishRoutes);
routes.use("/state", stateRoutes);
routes.use("/role", roleRoutes);
routes.use("/category", categoryRoutes);
routes.use("/order", orderRoutes);
routes.use('/cart', cartRoutes);
routes.use('/review', reviewRoutes);
routes.use('/card', cardRoutes);
routes.use('/discount', discountRoutes);

export default routes;