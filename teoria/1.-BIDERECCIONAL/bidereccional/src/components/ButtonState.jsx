import React from "react";

export const ButtonState = ({ setteo, children }) => {
  // si el componente esta modificando un estado que no le pertenece siempre siempre
  return (
    <>
      <button
        onClick={() => {
          setteo((value) => {
            const updateState = value + 1;
            console.log(updateState);
            localStorage.setItem("count", updateState);
            return updateState;
          });
        }}
      >
        {children}
      </button>
    </>
  );
};
