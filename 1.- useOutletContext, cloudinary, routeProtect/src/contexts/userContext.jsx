import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import useCloudinary from "../hooks/useCloudinary";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { uploadImage, deleteImage } = useCloudinary();
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem("user");
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const login = (user, file) => {
    localStorage.setItem("user", user);
    setUser(user);
    uploadImage(file);
    navigate("/anime");
  };

  const logout = () => {
    localStorage.removeItem("urlIMG");
    localStorage.removeItem("user");

    deleteImage();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
