import React from "react";
import {
  FaBook,
  FaCalendar,
  FaCreditCard,
  FaHome,
  FaList,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaBagShopping, FaBookBookmark, FaRedRiver } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../components/Hooks/useCart";
import useAdmin from "../../components/Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 p-4 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon> Add Items
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/updateItem">
                  <FaList></FaList> Update Item
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaBook></FaBook> Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/PaymentHistory">
                  <FaCreditCard></FaCreditCard> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <FaRedRiver></FaRedRiver> Add Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBookBookmark></FaBookBookmark> Payment history
                </NavLink>
              </li>
            </>
          )}

          {/* share navLink */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaBagShopping></FaBagShopping> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaPhone></FaPhone> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
