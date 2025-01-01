import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noFooterHeader =
    location.pathname.includes("login") || location.pathname.includes("signUP");
  return (
    <div className="max-w-screen-2xl mx-auto">
      {noFooterHeader || <Navbar></Navbar>}

      <div>
        {" "}
        <Outlet></Outlet>
      </div>
      {noFooterHeader || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
