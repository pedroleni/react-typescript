import React, { useEffect, useState } from "react";

const Message = () => {
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    console.log("me monto soy el h3");
    const onMoveMouse = ({ x, y }) => {
      for (let i = 0; i < 10000; i++) {
        console.log("hola");
      }
      setCoord({ x, y });
    };
    window.addEventListener("mousemove", onMoveMouse);

    return () => {
      console.log("me desmonto soy el h3");
      window.removeEventListener("mousemove", onMoveMouse);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coord)}
    </>
  );
};

export default Message;
