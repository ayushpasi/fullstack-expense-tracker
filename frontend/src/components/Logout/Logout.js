import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
export default function Logout() {
  const { logout } = useContext(AuthContext);
  logout();

  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
}
