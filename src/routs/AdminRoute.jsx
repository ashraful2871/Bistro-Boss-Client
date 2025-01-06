import React from "react";
import useAuth from "../components/Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (user && isAdmin) {
    return children;
  }
  if (loading || isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
