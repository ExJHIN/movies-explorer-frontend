import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ logIn, component: Component,  ...props}) => {
  return (
    logIn ? <Component {...props} /> : <Navigate to="/" replace/>
  );
};
