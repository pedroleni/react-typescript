import { useAuth } from "../context/authContext";
import "./CheckCode.css";

export const CheckCode = () => {
  const { allUser } = useAuth();

  console.log(allUser);
  return <div>CheckCode</div>;
};
