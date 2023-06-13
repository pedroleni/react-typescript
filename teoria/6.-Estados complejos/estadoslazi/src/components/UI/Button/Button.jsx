import "./Button.css";

const Button = ({ children, setteo }) => {
  return (
    <button
      onClick={() =>
        setteo((value) => {
          const updateState = value + 1;
          localStorage.setItem("count", updateState);
          return updateState;
        })
      }
    >
      {children}
    </button>
  );
};

export default Button;
