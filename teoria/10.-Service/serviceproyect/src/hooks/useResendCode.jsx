import Swal from "sweetalert2/dist/sweetalert2.all.js";
export const useResendCode = (res, setReloadPageError, setRes) => {
  //! ----------------200
  if (res?.status == 200)
    Swal.fire({
      icon: "success",
      title: "Ok send email with your code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  //! ---------------- 404 : 'User not found' ---> lo envio al login esta persona recargo la pagina y no esta allUser
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
  //!c --------------  500 : interval server error y el 404 general
  if (res?.response?.status == 500 || res?.response?.status == 404)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error! Don't send email ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
};
