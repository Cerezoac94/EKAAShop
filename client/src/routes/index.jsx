import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Drinkware from "../pages/Drinkware";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ShoppingCart from "../pages/ShoppingCart";
import WishList from "../pages/WishList";
import AboutUs from "../pages/AboutUs";
import UserProfile from "../pages/UserProfile";
import IsAdmin from "../components/isAdmin/IsAdmin";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllProducts from "../pages/AllProducts";
import Cooler from "../pages/Cooler";
import Accessories from "../pages/Accessories";
import CategoryMutationContainer from "../modules/admin/components/category/mutationCategory/MutationCategoryContainer";
import ProductMutationContainer from "../modules/admin/components/product/mutationProduct/ProductMutationContainer";
import OrdersListMap from "../modules/admin/components/order/OrdersListMap";
import OrderDetail from "../modules/admin/components/order/orderDetail/OrderDetail";
import UserOrders from "../pages/UserOrders";
import OrderDetailMap from "../modules/user_orders/components/orderDetail/OrderDetailMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/all_products",
        element: <AllProducts />,
      },
      {
        path: "/drinkware",
        element: <Drinkware />,
      },
      {
        path: "/cooler",
        element: <Cooler />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      // {
      // 	path:'/product_by_category',
      // 	element:<ProductsByCategory/>
      // }
      {
        path: "/product_detail/:id",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      // {
      //   path: "/buynow",
      //   element: <BuyNow />,
      // },
      {
        path: "/wish_list",
        element: <WishList />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/orders",
        element: <UserOrders />,
      },
      {
        path:'/order_detail/:idOrder',
        element: <OrderDetailMap/>
      },

      // TODO: RUTAS PARA ADMIN
      {
        path: "admin",
        element: <IsAdmin />,
        children: [
          {
            path: "",
            element: <Admin />,
          },
          {
            path: "category_mutation/:id/",
            element: <CategoryMutationContainer />,
          },
          {
            path: "product_mutation/:id",
            element: <ProductMutationContainer />,
          },
          {
            path: "orders_list",
            element: <OrdersListMap />,
          },
          {
            path: "orders_list/detail/:id",
            element: <OrderDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]); // va treer las rutas, es un array de rutas(obbjets)

export default router;
