import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          IncrementByAmount
        </button>

        <p>Counter vale {counter}</p>
      </div>
    </div>
  );
}

export default App;
