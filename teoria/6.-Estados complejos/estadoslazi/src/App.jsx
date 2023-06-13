import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

const App = () => {
  //! inicializar un estado en lazy es meter una callback en el estado incial para darle un estado inicial un poco mas complejo
  const [counter, setCounter] = useState(() => {
    return !localStorage.getItem("count")
      ? 0
      : parseInt(localStorage.getItem("count"));
  });
  return (
    <>
      <h1> Contador de nuestra con estados lazy</h1>
      <p> Valor del contador: {counter}</p>
      <Button setteo={setCounter}>Cambiar el estado del padre del count</Button>
    </>
  );
};

export default App;
