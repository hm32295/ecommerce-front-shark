import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProductRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/" replace />;
  }
    let role;
  try {
    const decodedToken = jwtDecode(token);

     role = decodedToken.role;
  } catch (error) {
    console.log("Invalid token:", error);

    localStorage.removeItem("token");

    return <Navigate to="/auth/login" replace />;
  }
    if (role === "admin") {
      return <Outlet />;
    }

    if (role === "user") {
      return <Navigate to="/user" replace />;
    }
    localStorage.removeItem("token");
    return <Navigate to="/auth/login" replace />;

  
};

export default ProductRoute;