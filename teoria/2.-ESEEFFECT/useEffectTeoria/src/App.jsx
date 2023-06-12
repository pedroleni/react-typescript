import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Error from "./components/Error";

function App() {
  const [name, setName] = useState("Juan");
  const [surName, setSurName] = useState("Lerida");

  const inputName = useRef(null);
  const inputSurname = useRef(null);

  return (
    <>
      <h1>
        Hola {name} {surName}
      </h1>
      <input
        type="text"
        ref={inputName}
        onChange={() => setName(inputName.current.value)}
      />
      <input
        type="text"
        ref={inputSurname}
        onChange={() => setSurName(inputSurname.current.value)}
      />
      {/* cuando name sea diferente a Pedro en ese caso 
       se monta el componente en caso contrario se desmonta y 
       lo vemos gracias al useEffect con el array de dependencias vacio */}
      {name !== "Pedro" && <Error />}
    </>
  );
}

export default App;
