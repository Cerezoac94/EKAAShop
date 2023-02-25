import { Router } from "express";
import productRoutes from "./product/product.routes.js";
import userRoutes from "./user/user.routes.js"
import wishRoutes from "./wish/Wish.routes.js";
import wishProductRoutes from "./wishProduct/wishProduct.routes.js";
import stateRoutes from "./state/state.routes.js"
import roleRoutes from "./role/role.routes.js";
import categoryRoutes from "./category/category.routes.js";
import paymentRoutes from "./payment/payment.routes.js";
import cartProductRoutes from "./cartProduct/cartProduct.routes.js";
import codeDiscountRoutes from "./codeDiscount/codeDiscount.routes.js";
import orderRoutes from "./order/order.routes.js";
import typesDiscountRoutes from "./typeDiscount/typeDiscount.routes.js";
import cartRoutes from "./cart/cart.routes.js";
import reviewRoutes from "./review/review.routes.js";
import cardRoutes from "./card/card.routes.js";
import discountRoutes from "./discount/discount.routes.js";
import orderDetailRoutes from "./orderDetail/orderDetail.routes.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/user", userRoutes);
routes.use("/wish", wishRoutes);
routes.use("/wish/detail", wishProductRoutes);
routes.use("/state", stateRoutes);
routes.use("/role", roleRoutes);
routes.use("/products", productRoutes);
routes.use("/category", categoryRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/cart_product", cartProductRoutes);
routes.use("/type_discount", typesDiscountRoutes);
routes.use("/code_discount", codeDiscountRoutes);
routes.use("/order", orderRoutes);
routes.use('/cart', cartRoutes);
routes.use('/review', reviewRoutes);
routes.use('/card', cardRoutes);
routes.use('/discount', discountRoutes);
routes.use("/order_detail", orderDetailRoutes);

export default routes;