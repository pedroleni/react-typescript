import React from "react";
import { useContext, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";

const Manga = () => {
  const [requestManga] = useOutletContext();
  const { login, user } = useContext(UserContext);
  console.log(user);
  return <div className="gallery"></div>;
};

export default Manga;
