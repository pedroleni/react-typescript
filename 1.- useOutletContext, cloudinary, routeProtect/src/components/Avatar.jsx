import "./Avatar.css";

import React, { useEffect, useState } from "react";

import useCloudinary from "../hooks/useCloudinary";

const Avatar = ({ data }) => {
  console.log("data", data);

  return <img className="avatar" src={localStorage.getItem("urlIMG")} alt="" />;
};

export default Avatar;
