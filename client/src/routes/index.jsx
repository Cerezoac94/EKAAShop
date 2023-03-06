import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Drinkware from "../pages/Drinkware";
import Home from "../pages/Home";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import Detail from "../pages/Detail";
import ShoppingCart from "../pages/ShoppingCart";
import WishList from "../pages/WishList";
import OrderList from "../pages/OrderList";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				
			},
			{
				path: "/drinkware",
				element: <Drinkware />,
				
			},
			{
				path: "/product_detail",
				element: <Detail/>
				
			},
			{
				path: "/cart",
				element: <ShoppingCart/>
			},
			{
				path: "/wish_list",
				element: <WishList/>
			},
			{
				path: "/about_us",
				element: <AboutUs/>
			},

			//Admin routes
			{
				path: "/orders_list",
				element: <OrderList/>
			},

			// TODO: RUTAS PARA ADMIN
			// {
			// 	path: "admin",
			// 	element: "component",
			// 	children: [
			// 		{
			// 			path: "create_product",
			// 			element: "component",
			// 		},
			// 		{
			// 			path: "update_product",
			// 			element: "component",
			// 		},
			// 	],
			// },

      
		],
	},

	{
		path: "/signup",
		element: "componente de signUp",
	},
	{
		path: "/login",
		element: <Login/>
	},
	{
		path: "/register",
		element: <Register/>
	},
]); // va treer las rutas, es un array de rutas(obbjets)

export default router;
