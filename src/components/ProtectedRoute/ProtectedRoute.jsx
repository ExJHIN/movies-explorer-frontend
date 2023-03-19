import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ component: Component,  ...props }) => {
  return (
    <>
    props.logIn ? <Component {...props} /> : <Navigate to="/" replace/>
    </> 
  );
};
