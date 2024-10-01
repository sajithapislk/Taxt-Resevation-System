// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  if (allowedRole === "user") {
    const userData = localStorage.getItem("user");

    if (!userData) {
      return <Navigate to="/login" replace />;
    }
  } else if (allowedRole === "driver") {
    const driverData = localStorage.getItem("driver");

    if (!driverData) {
      return <Navigate to="/login" replace />;
    }
  } else if (allowedRole === "admin") {
    const driverData = localStorage.getItem("admin");

    if (!driverData) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
