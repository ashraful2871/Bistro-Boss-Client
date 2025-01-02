import React from "react";
import {
  FaCalendar,
  FaCreditCard,
  FaHome,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBookBookmark, FaRedRiver } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 p-4 min-h-screen bg-orange-400">
        <ul className="menu">
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
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reviews">
              <FaRedRiver></FaRedRiver> Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBookings">
              <FaBookBookmark></FaBookBookmark> My Bookings
            </NavLink>
          </li>
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
        </ul>
      </div>
      {/* dashboard */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
