import { useState } from "react";

import "./App.css";
import Modal from "./assets/components/UI/Modal/Modal";

function App() {
  const [render, setRender] = useState(false);

  return (
    <>
      <header></header>
      <main>
        <button id="openModal" onClick={() => setRender(true)}>
          VER MODAL
        </button>
        {render && (
          <Modal>
            <h1>Esto es una prueba del modal</h1>
            <h3> Holaaaa</h3>
            <button onClick={() => setRender(false)}>X</button>
          </Modal>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
