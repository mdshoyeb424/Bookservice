import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/Authentication";

const PrivateRoute = ({ children }) => {

    const isAuthenticated=getAuth()?.token;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;