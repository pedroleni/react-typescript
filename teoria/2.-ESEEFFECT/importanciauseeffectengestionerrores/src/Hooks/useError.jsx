import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useError = (count) => {
  if (count == 20)
    Swal.fire({
      icon: "success",
      title: "tu has llegado a 20",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useError;
