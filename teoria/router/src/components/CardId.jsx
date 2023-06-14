import React from "react";
import { useParams } from "react-router-dom";
import { listCharacter } from "../data/data.galley";
const CardId = () => {
  const { id } = useParams();
  const filterData = listCharacter.filter((item) => item._id == id);

  return (
    <figure>
      <img src={filterData[0].image} alt={filterData[0].name} />
      <h3>{filterData[0].name}</h3>
      <p>{filterData[0].description}</p>
    </figure>
  );
};

export default CardId;
