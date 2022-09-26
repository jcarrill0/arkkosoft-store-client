import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';



const ProtectedRoute = ({ redirecTo="/signin"}) => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  if (!currentUser) {
    return <Navigate to={redirecTo} replace />;
  }
  return <Outlet />;  
}

export default ProtectedRoute