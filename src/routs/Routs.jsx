import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Order from "../components/order/Order";
import Login from "../pages/Login";

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
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
