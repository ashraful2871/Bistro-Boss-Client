import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>Available Car</NavLink>
      </li>

      <li>
        <NavLink>Login</NavLink>
      </li>
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
        <Link
          to="/"
          className="text-xl md:text-3xl font-extrabold flex items-center uppercase"
        >
          <img
            className="h-16 w-16"
            src="https://i.ibb.co.com/D4YprTd/logo-removebg.png"
            alt=""
          />
          Bistro Boss
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
      </div>
      <div className="flex-none">
        {/* <div>
          <DarkLightMood></DarkLightMood>
        </div> */}

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
