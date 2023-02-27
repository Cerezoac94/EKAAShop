import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
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
