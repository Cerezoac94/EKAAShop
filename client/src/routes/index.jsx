import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Drinkware from "../pages/Drinkware";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ShoppingCart from "../pages/ShoppingCart";
import WishList from "../pages/WishList";
import OrderList from "../pages/OrderList";
import AboutUs from "../pages/AboutUs";
import UserProfile from "../pages/UserProfile";
import IsAdmin from "../components/isAdmin/IsAdmin";
import AdminPanel from "../pages/AdminPanel";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
				path: "/profile",
				element: <UserProfile/>
				
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
				element: <OrderList/>,
		
			},

			// TODO: RUTAS PARA ADMIN
			{
				path: "admin/",
				element: <IsAdmin/>,
				children: [
					{
						path: 'panel',
						element: <AdminPanel/>					
					},
					// {
					// 	path: "create_product",
					// 	element: "component",
					// },
					// {
					// 	path: "update_product",
					// 	element: "component",
					// },
				],
			},

      
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
