import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useCart from "./Hooks/useCart";
import useAdmin from "./Hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log(cart);
  const handleLogOut = () => {
    logout();
  };

  const menuLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <>
          <li>
            <NavLink onClick={handleLogOut}>Logout</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  const dropdownLinks = (
    <>
      <li>
        <NavLink>Available Car</NavLink>
      </li>
      <li>
        <NavLink>Add Car</NavLink>
      </li>
      <li>
        <NavLink>My Cars</NavLink>
      </li>
      <li>
        <NavLink>My Bookings</NavLink>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 max-w-screen-2xl text-white bg-black opacity-50">
      <div className="flex-1 ">
        <Link to="/" className=" flex items-center uppercase">
          <img
            className="h-16 w-16"
            src="https://i.ibb.co.com/D4YprTd/logo-removebg.png"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-2xl fontb">Bistro Boss</span>
            <span className="text-base">Restaurant</span>
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
      </div>
      <div className="flex-none flex items-center gap-4">
        {/* Cart Section */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-base-content">
                8 Items
              </span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link to="/dashboard/cart">
                  {" "}
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                referrerPolicy="no-referrer"
                alt="Tailwind CSS Navbar component"
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {dropdownLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
