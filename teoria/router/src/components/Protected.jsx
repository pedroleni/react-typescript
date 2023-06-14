import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  if (!localStorage.getItem("user")) return <Navigate to="/" />;

  return children;
};

export default Protected;
