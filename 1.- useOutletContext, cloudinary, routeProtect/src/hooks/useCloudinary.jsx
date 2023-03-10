import axios from "axios";
import { useEffect, useState } from "react";

const useCloudinary = () => {
  const [urlIMG, setUrlIMG] = useState(() => localStorage.getItem("urlIMG"));
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
        localStorage.setItem("urlIMG", response.data.secure_url);
        setUrlIMG(response.data.secure_url);
        console.log(response.data.secure_url);
        setPublicId(response.data.public_id);
        return response.data.secure_url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, [urlIMG]);

  return { uploadImage, urlIMG, setUrlIMG };
};

export default useCloudinary;
