import "./Cards.css";

import React from "react";
const Cards = ({ data }) => {
  return (
    <>
      {/* {
        // -----FORMA 1 optional chaining (?): FORMA DE CONTROLAR EL RECARGAR LA PAGINA POR EL USUARIO---------

        data.data?.anime.map((animeSingle) => (
          <figure key={animeSingle._id}>
            <h1 className="tituloCards">{animeSingle.name}</h1>
            <img className="imageFigure" src={animeSingle.images[0]} alt={animeSingle.name} />
            <p className="description">{animeSingle.description[0]}</p>
          </figure>
        ))
      } */}

      {/* { // -----FORMA 2 (length): FORMA DE CONTROLAR EL RECARGAR LA PAGINA POR EL USUARIO---------
    data.length != 0 && data.data.anime.map((animeSingle) => (
        
        <figure key={animeSingle._id}>
          <h1>{animeSingle.name}</h1>
          <img className="imageFigure" src={animeSingle.images[0]} alt={animeSingle.name} />
          <p className="description">{animeSingle.description[0]}</p>
        </figure>
      ))} */}

      {
        //------ FORMA 3 (Object.prototype.toString()): DE CONTROLAR EL RECARGAR LA PAGINA POR EL USUARIO---------------
        Object.prototype.toString.call(data) !== "[object Array]" &&
          data.data.anime.map((animeSingle) => (
            <figure key={animeSingle._id}>
              <h1 className="tituloCards">{animeSingle.name}</h1>
              <img
                className="imageFigure"
                src={animeSingle.images[0]}
                alt={animeSingle.name}
              />
              <p className="description">{animeSingle.description[0]}</p>
            </figure>
          ))
      }
    </>
  );
};

export default Cards;
