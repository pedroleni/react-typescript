import React from "react";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    console.log("me monto soy el h3");
    return () => {
      console.log("me desmonto soy el h3");
    };
  }, []);

  return <h3>Este señor no se llama Pedro</h3>;
};

export default Error;
