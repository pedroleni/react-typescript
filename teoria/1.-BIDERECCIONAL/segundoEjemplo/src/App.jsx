import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(0);

  const handleCount = () => {
    //! ------------- Asincronmias de react ----------------------
    // las asincronias son general que si tu has actualizado un estado, debajo de la linea dee ejecucion de la actualizacion
    /// no tiene acceso al valor actualizado sino al antiguo
    setCount(() => {
      return count + 1;
    });
    console.log(count); // tendriamos acceso al estado antiguo no al actualizado
  };

  const handleHello = () => {
    //! ------------- Asincronmias de react ----------------------
    // las asincronias son general que si tu has actualizado un estado, debajo de la linea dee ejecucion de la actualizacion
    /// no tiene acceso al valor actualizado sino al antiguo
    setHello((value) => {
      return value + 1;
    });
  };

  //! IMPORTANTE ----> SI QUIERO TENER ACCESO AL VALOR DE ESE ESTADO ACTUALIZADO USEEFFECT CON ARRAY DE DEPENDENCIAS CON LO QUE QUIERO ESCUCHAR -> ESTADO

  //! 1)  ------- USEEFFECT PARA CONNTROLAR DOS COSAS:
  //! ----------------A) El primer renderizado del componete y su desmontaje
  //! ----------------B) Controlo el cambio de una variable incluida en el array de depedencias
  useEffect(() => {
    console.log(" count actualizado", count);
  }, [count]);

  //! 2) -----USEEFFECT PARA CUANDO ME MONTO POR PRIMERA VEZ Y CUANDO ME DESMONTO
  useEffect(() => {
    console.log("me monto");
    return () => console.log("me desmonto");
  }, []);

  //! 3) ----USEEFFECT PARA CONTROLAR LA ACTUALIZACION DEL COMPONENTE ----> SIN ARRAY DE DEPENDENCIAS
  useEffect(() => {
    console.log("me actualizo");
  });

  return (
    <>
      <button onClick={() => handleCount()}>count is {count}</button>
      <button onClick={() => handleHello()}>hELLO is {count}</button>
    </>
  );
}

export default App;
