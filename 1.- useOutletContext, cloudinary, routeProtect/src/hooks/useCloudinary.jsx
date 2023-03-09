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

  const deleteImage = () => {};
  return { uploadImage, urlIMG, deleteImage };
};

export default useCloudinary;
