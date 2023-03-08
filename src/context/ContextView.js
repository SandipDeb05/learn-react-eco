import React from "react";
import Counter from "./Counter";
import { CounterProvider } from "./counter-context/counter-context";
import Header from "./Header";

const ContextView = () => {
  return (
    <div>
      <CounterProvider>
        <Header />
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default ContextView;
