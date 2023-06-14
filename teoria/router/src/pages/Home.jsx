import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="containerHome">
      <Link to="/gallery">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1218961153/es/foto/museo-de-arte.jpg?s=612x612&w=0&k=20&c=hXyQwCozj4h4otEwrQvv0Fku5mQ7g9KQGKGRaS8-hGc="
            alt=""
          />
        </figure>
      </Link>

      <button onClick={() => navigate("/gallery")}>Gallery</button>
    </div>
  );
};

export default Home;
