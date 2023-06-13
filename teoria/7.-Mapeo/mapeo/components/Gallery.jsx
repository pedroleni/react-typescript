import { imageList } from "../src/data/data.global";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {imageList.map((imagen) => (
        <Card data={imagen} key={imagen.alt} />
      ))}
    </div>
  );
};

export default Gallery;
