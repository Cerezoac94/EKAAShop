import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Drinkware from "../pages/Drinkware";
import Home from "../pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				
			},{
				path: "/drinkware",
				element: <Drinkware />,
				
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
		element: "componente de logIn",
	},
]); // va treer las rutas, es un array de rutas(obbjets)

export default router;
