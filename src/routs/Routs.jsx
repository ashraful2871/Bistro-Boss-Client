import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Order from "../components/order/Order";
import Login from "../pages/Login";
import SignUP from "../pages/signUp/SignUP";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../layout/dashboard/DashBoard";
import Cart from "../pages/dashboard/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: (
          <PrivetRoute>
            <Menu></Menu>
          </PrivetRoute>
        ),
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUP",
        element: <SignUP></SignUP>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
