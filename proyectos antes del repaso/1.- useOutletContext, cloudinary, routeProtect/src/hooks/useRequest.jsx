import { useEffect, useState } from "react";

import useAxios from "./useAxios";

const useRequest = (URL) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await useAxios(URL);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
export default useRequest;
