import "./Card.css";
import "./Cards.css";

import React from "react";
const Card = ({ data }) => {
  return (
    <>
      <figure>
        <h1 className="tituloCards tituloWhite">{data.name}</h1>
        <img className="imageFigure" src={data.image} alt={data.name} />
        <p className="description">{data.description}</p>
      </figure>
    </>
  );
};

export default Card;
