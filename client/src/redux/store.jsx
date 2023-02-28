import { configureStore } from "@reduxjs/toolkit";
import { categories } from "./service/categoryService";
import { discounts } from "./service/discountService";
import { products } from "./service/productService";
import { users } from "./service/userService";

export const store = configureStore({
	reducer: {
		[users.reducerPath]: users.reducer,
		[categories.reducerPath]: categories.reducer,
		[products.reducerPath]: products.reducer,
		[discounts.reducerPath]: discounts.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(users.middleware)
			.concat(categories.middleware)
			.concat(products.middleware)
			.concat(discounts.middleware),
});
