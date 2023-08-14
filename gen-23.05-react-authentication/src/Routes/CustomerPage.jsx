import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function CustomerPage() {
  const isLogin = useSelector((state) => state.auth.token !== "");

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}
