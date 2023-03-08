import React, { useContext, useReducer } from "react";

const CounterContext = React.createContext({});

// TODO New File
const counterReducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + action.payload };
    }
    case "Decrement": {
      return { count: state.count - action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const INITIAL_VALUE = { count: 0 };

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_VALUE);

  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CounterProvider");
  }
  return context;
};

export { CounterProvider, useCounter };
