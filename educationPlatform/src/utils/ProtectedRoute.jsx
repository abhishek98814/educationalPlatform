import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // check if user is logged in

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // else show the protected page
}
