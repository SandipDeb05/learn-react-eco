import React from "react";
import { useCounter } from "./counter-context/counter-context";

const Counter = () => {
  const { state, dispatch } = useCounter();

  const incrementHandler = () => dispatch({ type: "Increment", payload: 10 });
  const decrementHandler = () => dispatch({ type: "Decrement", payload: 5 });

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
