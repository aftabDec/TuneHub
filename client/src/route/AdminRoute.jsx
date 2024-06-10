import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const authUser = useSelector((store) => store.song.user);

  return authUser && authUser.isAdmin ? children : <Navigate to="/login" />;
};

export default AdminRoute;
