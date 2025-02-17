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
import AllUsers from "../layout/dashboard/all users/AllUsers";
import AddItems from "../layout/dashboard/add item/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../layout/dashboard/mannage items/ManageItems";
import UpdateItem from "../layout/dashboard/update item/UpdateItem";
import Payment from "../layout/dashboard/payment/Payment";
import PaymentHistory from "../layout/dashboard/payment history/PaymentHistory";
import UserHome from "../layout/dashboard/user home/UserHome";
import AdminHome from "../layout/dashboard/admin home/AdminHome";

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
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: (
          <PrivetRoute>
            <Cart></Cart>
          </PrivetRoute>
        ),
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //admin only routs
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            {" "}
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
