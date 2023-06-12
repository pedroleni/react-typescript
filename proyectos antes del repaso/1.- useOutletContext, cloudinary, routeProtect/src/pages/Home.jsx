import "./Home.css";

import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";
const Home = () => {
  const { login, user } = useContext(UserContext);
  const textInput = useRef(null);
  const fileInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/anime");
  }, [user]);

  return (
    <div className="containerLogin">
      {!localStorage.getItem("user") && (
        <>
          <h2 className="tituloWhite">
            Por favor introduzca su nombre y una imagen para poder ver el contenido de la
            página
          </h2>
          <input type="text" ref={textInput} />
          <div className="custom-input-file">
            <input
              type="file"
              id="fichero-tarifas"
              className="input-file"
              ref={fileInput}
            />
            Subir fichero...
          </div>
          {/* login(textInput.current.value) */}
          <button
            className="loginButton"
            onClick={() => login(textInput.current.value, fileInput.current.files[0])}
          >
            {" "}
            Registrar
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
