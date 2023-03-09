import "./Card.css";
import "./Cards.css";

import React from "react";
const Card = ({ data }) => {
  return (
    <>
      <figure>
        <h1 className="tituloCards">{data.name}</h1>
        <img className="imageFigure" src={data.images[0]} alt={data.name} />
        <p className="description">{data.description[0]}</p>
      </figure>
    </>

    //  <figure>
    //      <h1>{data.name}</h1>
    //      <img className="imageFigure" src={data.images[0]} alt={data.name}/>
    //      <p className="description">{data.description[0]}</p>
    //  </figure>
  );
};

export default Card;
