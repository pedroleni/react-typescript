import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

const MultipleHookComponents = () => {
  const { increment, decrement, reset, counter } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //! vamos a gesitionar primero el error, si no hay errores lanzamos el return de abajo
  if (hasError) {
    return (
      <div className="alert alert-danger text-center">
        {hasError.toString()}
      </div>
    );
  }
  //! TODO ESTA OK Y LANZAMOS LO DE ABAJO SIN ERRORES

  return (
    <>
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        NEXT QUOTE
      </button>
    </>
  );
};

export default MultipleHookComponents;
