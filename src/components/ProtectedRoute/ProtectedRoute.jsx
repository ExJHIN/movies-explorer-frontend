import { Route, Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ logIn, children,  ...props }) => {
  return (
    <Route {...props} {...logIn ? children : <Navigate to="/"/> }/>
  );
};
