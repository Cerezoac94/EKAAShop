import { configureStore } from "@reduxjs/toolkit";
import { carts } from "./service/cart.service";
import { categories } from "./service/category.service";
import { discounts } from "./service/discount.service";
import { orders } from "./service/order.service";
import { products } from "./service/product.service";
import { states } from "./service/state.service";
import { users } from "./service/user.service";
import { wishes } from "./service/wish.service";

export const store = configureStore({
	reducer: {
		[users.reducerPath]: users.reducer,
		[categories.reducerPath]: categories.reducer,
		[products.reducerPath]: products.reducer,
		[discounts.reducerPath]: discounts.reducer,
		[states.reducerPath]: states.reducer,
		[wishes.reducerPath]: wishes.reducer,
		[carts.reducerPath]: carts.reducer,
		[orders.reducerPath]: orders.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(users.middleware)
			.concat(categories.middleware)
			.concat(products.middleware)
			.concat(discounts.middleware)
			.concat(states.middleware)
			.concat(wishes.middleware)
			.concat(carts.middleware)
			.concat(orders.middleware)
});
