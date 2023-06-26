import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return <div>Home</div>;
};
