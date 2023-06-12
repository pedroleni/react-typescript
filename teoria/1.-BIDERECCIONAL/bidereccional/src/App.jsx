import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonState } from "./components/ButtonState"; // importacion con el export
//import ButtonState from "./components/ButtonState"; // importancion por defecto

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> count is {count}</h1>
      {console.log(count)}
      <ButtonState setteo={setCount}>Cambiar el estado</ButtonState>
    </>
  );
}

export default App;
