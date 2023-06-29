import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { resendCodeConfirmationUser } from "../services/API_user/user.service";
import { useResendCode } from "../hooks";

export const ButtonReSend = ({ setReloadPageError }) => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const { allUser, user } = useAuth();

  //! 1) ---------------LAS FUNCIONES QUE GESTIONAN LOS SUBMIT DE LOS FORMULARIOS--------

  const handleReSend = async () => {
    // / no tenemos un form data porque sacamos la info por la parte del AllUser o
    // / ... del localStorage
    const getEmailLocalStorage = () => {
      const local = localStorage.getItem("user");
      const parseUserLocal = JSON.parse(local);
      //console.log(parseUserLocal.email);
      return parseUserLocal.email;
    };
    setSend(true);
    setRes(
      await resendCodeConfirmationUser({
        email: localStorage.getItem("user")
          ? getEmailLocalStorage()
          : allUser?.data?.user?.email,
      })
    );
    setSend(false);
  };

  //!2) ---------------- USEEFFECT  QUE GESTIONAN LOS ERRRORES Y EL 200 CON UN CUSTOMhook -----
  useEffect(() => {
    console.log(res);

    useResendCode(res, setReloadPageError, setRes);
  }, [res]);

  return (
    <button
      id="btnResend"
      className="btn"
      disabled={send}
      style={{ background: send ? "#49c1a388" : "#49c1a2" }}
      onClick={() => handleReSend()}
    >
      Resend Code
    </button>
  );
};
