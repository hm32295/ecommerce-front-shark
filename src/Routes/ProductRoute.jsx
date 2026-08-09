import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import UserRedirect from "../validation/UserRedirect";

const ProductRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }
    let role;
  try {
    const decodedToken = jwtDecode(token);

    role = decodedToken.role;
    
  } catch (error) {
    console.log("Invalid token:", error);

    localStorage.removeItem("token");

    return <Navigate to="/auth/" replace />;
  }
    if (role === "admin") {
      return <Outlet />;
    }

    if (role === "user") {
        <UserRedirect />
        return null;
    }
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;

  
};

export default ProductRoute;

