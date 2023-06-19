import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, name, image } = data;
  const pathCustom = `/gallery/character/${_id}`;
  return (
    <Link to={pathCustom}>
      <figure>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </figure>
    </Link>
  );
};

export default Card;
