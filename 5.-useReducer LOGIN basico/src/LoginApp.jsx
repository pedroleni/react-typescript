import { useEffect, useReducer } from "react";

// ESTO DE AQUI PODRÍA ESTAR EN OTRO ARCHIVO, la logica del useReducer
const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};
///Tendermos un estado y unas acciones y va a devolver un estado del mismo tipo
const authReducer = (state, action) => {
  switch (action.type) {
    // devolverá el estado del logout
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    // devolverá el estado del login
    // payload es la informacion adiccional de la accion
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        nombre,
        username,
      };
    // Por defecto devuelve un state
    default:
      return state;
  }
};

export const LoginApp = () => {
  // Del state me voy destructurar el validando, el token y nombre
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  /// Nada mas iniciar a segundo y medio me va a dar el typo logout
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  // La funcion login mandare por el type login, y luego por payload el nombre y el username
  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Pedro",
        username: "Lerida",
      },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success"> Autenticado como: {nombre} </div>
      ) : (
        <div className="alert alert-danger"> No autenticado </div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
