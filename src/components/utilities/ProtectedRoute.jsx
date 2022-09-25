import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({user, redirecTo="/signin"}) => {
  if (!user) {
    return <Navigate to={redirecTo} replace />;
  }
  return <Outlet />;  
}

export default ProtectedRoute