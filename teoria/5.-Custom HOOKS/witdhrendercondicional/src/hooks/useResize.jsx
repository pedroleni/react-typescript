import { useEffect, useState } from "react";

const useResize = () => {
  const [ancho, setAncho] = useState(window.innerWidth);

  useEffect(() => {
    //! funcion que gestiona el evento
    const handleResive = () => {
      // setea en el estado el width actual
      setAncho(window.innerWidth);
    };

    //! gestioamos el montaje del componente
    // cuando se monte el componente le meto el evemto de tipo resize
    window.addEventListener("resize", handleResive);

    return () => {
      //! gestionamos el desmontaje del componente
      // tenemos que borrar el evento cuando se desmonte el componete
      window.removeEventListener("resize", handleResive);
    };
  }, []);

  return { ancho };
};

export default useResize;
