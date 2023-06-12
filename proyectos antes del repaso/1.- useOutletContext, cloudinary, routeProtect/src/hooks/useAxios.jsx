import axios from "axios";

const useAxios = async (options) => {
  return await axios.request(options).then((res) => res.data);
};

export default useAxios;
