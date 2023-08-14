import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivatePage() {
  const isNotLogin = useSelector((state) => state.auth.token === "");

  if (isNotLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
