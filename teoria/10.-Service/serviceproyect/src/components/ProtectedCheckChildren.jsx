import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedCheckChildren = ({ children }) => {
  const { user, allUser } = useAuth();
  if (allUser?.data?.user?.check == true || user?.check == true) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
