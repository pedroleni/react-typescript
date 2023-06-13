const Card = ({ data }) => {
  const { src, alt } = data;
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
};

export default Card;
