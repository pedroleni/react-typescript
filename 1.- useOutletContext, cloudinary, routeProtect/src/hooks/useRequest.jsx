import { useEffect, useState } from "react";

import useAxios from "./useAxios";

const useRequest = (URL) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    console.log("Nos traemos la data " + URL.toString());
    const data = await useAxios(URL);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
export default useRequest;
