import Swal from "sweetalert2/dist/sweetalert2.all.js";
export const useCheckCodeError = (
  res,
  setDeleteUser,
  setOkCheck,
  setUser,
  setReloadPageError,
  setRes
) => {
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status

  console.log("entro ");
  //! ------------------ 200 : todo ok ---> testCheckOk: true
  if (res?.data?.testCheckOk?.toString() == "true") {
    // comprobamos que vengas del login con el localStorage
    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseCurrentUser = JSON.parse(currentUser);
      const customUser = {
        ...parseCurrentUser,
        check: true,
      };
      // como quiero volver a meterlo al local tengo que volver a convertirlo en un string
      const customUserString = JSON.stringify(customUser);
      setUser(() => customUser);
      localStorage.setItem("user", customUserString);
    }
    setOkCheck(() => true);
    Swal.fire({
      icon: "success",
      title: "Ok correct code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //! ------------------ 200 : todo ok ---> testCheckOk: false
  if (res?.data?.testCheckOk?.toString() == "false") {
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
    setRes(() => {});
  }

  //! ------------------- 200: usuario borrado includes('error delete user')

  if (res?.data?.delete?.includes("error delete user")) {
    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
    setRes(() => {});
  }
  //! ------------------- 200: usuario no borrado includes ('ok delete user')
  if (res?.data?.delete?.includes("ok delete user")) {
    setDeleteUser(() => true);
    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "Your user is delete. Register again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
    setRes(() => {});
  }

  //! -------------------- 404: 'User not found' --> mi amigo a recargado la pagina allUser se ha reseteado no tengo el emaial
  //! ----------------------------> usuario se lleva por la via del login

  if (res?.response?.data?.includes("User not found")) {
    setReloadPageError(() => true);
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try login, please.",
      showConfirmButton: false,
      timer: 1500,
    });

    setRes(() => {});
  }
  //!  -------------------- 404: random error.message, de la parte de la actualizacion del user
  if (res?.response?.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }
  //! ---------------------- 500: interval server error
  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }
};
