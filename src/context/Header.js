import React from "react";
import { useCounter } from "./counter-context/counter-context";

const Header = () => {
  const { state } = useCounter();
  return <div>Head component: {state.count}</div>;
};

export default Header;
