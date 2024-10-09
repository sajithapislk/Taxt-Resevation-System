import { Navigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const userData = localStorage.getItem("user");
  if (userData) {
    return <Navigate to="/user/take-ride" replace />;
  }

  const driverData = localStorage.getItem("driver");
  if (driverData) {
    return <Navigate to="/driver/dashboard" replace />;
  }

  const adminData = localStorage.getItem("admin");
  if (adminData) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

export default CheckAuth;
