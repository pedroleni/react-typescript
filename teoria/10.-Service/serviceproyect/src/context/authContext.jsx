import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

//! 1) ---------------PRIMERO CREAR EL CONTEXTO CON EL METODO CREATECONTEXT------
const AuthContext = createContext();

//! 2) -------------- CREAR LA FUNCION QUE PROVEE DEL CONTEXTO Y QUE GRAPEA A LAS PAGINAS-----

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    const parseUser = JSON.parse(data);

    if (data) {
      return parseUser;
    } else {
      return null;
    }
  });

  //! ALLUSER -----solo cuando me registro para guardar la respuesta--

  const [allUser, setAllUser] = useState({
    data: {
      confirmationCode: "",
      user: {
        password: "",
        email: "",
      },
    },
  });

  const navigate = useNavigate();

  //! -----------------------------------------------------------------------
  //? -------------------- LOGIN -------------------------------------------
  //! -----------------------------------------------------------------------

  const userLogin = (data) => {
    // data{
    //     token: jsajfsdkgsdhj
    //     name: akjlsfsklklhjhjdklg
    //     imagen: asjjsdkgkl
    // }

    // primero lo meto en el localstorage, recordar luego meterlo en el sessionStorage
    localStorage.setItem("user", data);

    // despues lo metemos parseado al estado global que setea nuestro usuario logado
    const parseUser = JSON.parse(data);
    setUser(() => parseUser);
  };
  //! -----------------------------------------------------------------------
  //? -------------------- LOGOUT -------------------------------------------
  //! -----------------------------------------------------------------------

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  //! -----------------------------------------------------------------------
  //? -------- PUENTE PARA CUANDO TENGAMOS PROBLEMAS DE ASYNCRONIA ----------
  //! -----------------------------------------------------------------------

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");

        break;

      default:
        break;
    }
  };

  // UseMemo memoriza el return de una funcion
  const value = useMemo(
    () => ({
      user,
      setUser,
      userLogin,
      logout,
      allUser,
      setAllUser,
      bridgeData,
    }),
    [user, allUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//! 3) --------------CREAR UN CUSTOM HOOK QUE NOS ayude a utilizar EEL CONTEXTO -------

export const useAuth = () => {
  return useContext(AuthContext);
};
