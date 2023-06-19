import { useEffect, useState } from "react";

export const useFetch = (url) => {
  //! 1) Generamos un estado complejo con lo que necesitamos donde llamamos al fetch
  /// vamos a hacer un estado de la peticion asincrona y vamos a gestionar un estado complejo
  // en este estado complejo tendremos la data, el estado de esta cargando, y tendremos el seteo de errores
  const [state, setState] = useState({
    data: null,
    isLoading: null,
    hasError: null,
  });
  //! 3) FUNCION ASINCRONA QUE GESTIONA LAS ASINCRONIAS Y LA MODIFICACION DEL ESTADO
  const getData = async () => {
    // cuando yo empiezo a hacr una llamada asincrona
    setState({ ...state, isLoading: true });

    try {
      // Hacer la llamada fech
      const resp = await fetch(url);

      // si la rsspuesta no es correcta lanzo un error
      if (!resp.ok) {
        throw new Error(`HTTP ERROR: STATUS ${resp.status}/ ${resp}`);
      } else {
        // si todo esta correcto lo convertimos a JSON
        const data = await resp.json();

        // como tengo la data tengo que poner el isloading en false, y la data la metemos en el estado
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  // montamos un useEffect con el array de dependencia ocuypado por url para asi escuchar cuando este valor cambie
  // ------> se lanza tambien cuando se monta por primera vez y cuando se desmonta
  //! 2) CREAMOS EL USEEFFECT PARA GESTIONAR UNA FUNCION ASINCRONA
  useEffect(() => {
    getData();

    //return () => console.log("me desmonto");
  }, [url]);

  //! 4) DEVOLVEMOS EL ESTADO QUE LUEGO VAMOS A UTLIZAR PARA PINTAR EN LOS COMPONENTES
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
