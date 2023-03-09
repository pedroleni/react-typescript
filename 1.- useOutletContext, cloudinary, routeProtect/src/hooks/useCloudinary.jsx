import axios from "axios";
import { useState } from "react";

const useCloudinary = () => {
  const [urlIMG, setUrlIMG] = useState(null);
  const [publicId, setPublicId] = useState(null);
  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images");

    return axios
      .post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_APP_CLOUD_NAME
        }/image/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
      .then((response) => {
        setUrlIMG(response.data.secure_url);
        setPublicId(response.data.public_id);
        return response.data.secure_url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteImage = () => {
    axios
      .delete(
        `https://api.cloudinary.com/v1_1/${publicId}/image/destroy?public_id=${publicId}&api_key=YOUR_API_KEY&api_secret=YOUR_API_SECRET`,
      )
      .then((response) => {
        console.log(response);
        // Aquí puedes manejar la respuesta de éxito
      })
      .catch((error) => {
        console.log(error);
        // Aquí puedes manejar el error
      });
  };
  return { uploadImage, urlIMG };
};

export default useCloudinary;
