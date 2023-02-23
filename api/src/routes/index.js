import { Router } from "express";
import productRoutes from "./product/product.routes.js";
import categoryRoutes from "./category/category.routes.js";
import paymentRoutes from "./payment/payment.routes.js";
import cartProductRoutes from "./cartProduct/cartProduct.routes.js";
import codeDiscountRoutes from "./codeDiscount/codeDiscount.routes.js";
import orderRoutes from "./order/order.routes.js";
import typesDiscountRoutes from "./typeDiscount/typeDiscount.routes.js";
import cartRoutes from "./cart/cart.routes.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/category", categoryRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/cart_product", cartProductRoutes);
routes.use("/type_discount", typesDiscountRoutes);
routes.use("/code_discount", codeDiscountRoutes);
routes.use("/order", orderRoutes);
routes.use('/cart', cartRoutes)

export default routes;
