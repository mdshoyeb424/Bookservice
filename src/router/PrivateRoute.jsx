import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const isAuthenticated=false;
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;