import React, { useEffect } from "react";

const H1 = () => {
  useEffect(() => {
    console.log("me monto soy el h1 💚");

    return () => {
      console.log("me desmonto soy el h1 ❌");
    };
  }, []);

  return <h1>Estoy por encima del 600px</h1>;
};

export default H1;
