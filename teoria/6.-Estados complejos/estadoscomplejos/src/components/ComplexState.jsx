import React from "react";
import { useState } from "react";

export const ComplexState = () => {
  const [alum, setAlum] = useState({
    name: "",
    surname: "",
  });

  return (
    <div>
      <h1>
        {" "}
        {alum.name}|{alum.surname}
      </h1>

      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setAlum({ ...alum, name: e.target.value })}
      />
      <input
        type="text"
        name="surname"
        id="surname"
        onChange={(e) => setAlum({ ...alum, surname: e.target.value })}
      />

      <button onClick={() => console.log(alum)}> REGISTER</button>
    </div>
  );
};
