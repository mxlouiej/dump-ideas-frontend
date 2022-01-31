import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { localUser } = useAuth();
  const location = useLocation();

  if (!localUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
