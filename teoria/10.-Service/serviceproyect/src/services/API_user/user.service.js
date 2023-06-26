import { updateToken } from "../../utils/updateToken";
import { APIuser } from "./serviceApiUser.config";

export const registerUser = async (formData) => {
  return APIuser.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -----------------------------CHECKCODE----------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return APIuser.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------LOGIN --------------------------------------------

export const loginUser = async (formData) => {
  return APIuser.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- AUTO LOGIN ------------------------------------------

export const autoLoginUser = async (formData) => {
  return APIuser.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------ FORGOT PASSWORD --------------------------------------
export const forgotPasswordUser = async (formData) => {
  return APIuser.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------------- CHANGE PASSWORD ----- ESTAMOS LOGADOS----------------

export const changePasswordUser = async (formData) => {
  return APIuser.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};
