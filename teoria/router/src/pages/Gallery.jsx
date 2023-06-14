import React from "react";
import { listCharacter } from "../data/data.galley";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {listCharacter.map((item) => (
        <Card key={item.name} data={item} />
      ))}
    </div>
  );
};

export default Gallery;
