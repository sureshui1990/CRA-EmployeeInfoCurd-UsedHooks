import React, { useReducer, createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const initialState = {
  firstCount: 0,
  secondCount: 15,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + 1 };
    case "decrement":
      return { ...state, firstCount: state.firstCount - 1 };
    case "reset":
      return initialState;
    case "incrementActionVal":
      return { ...state, secondCount: state.secondCount + action.val };
    case "decrementActionVal":
      return { ...state, secondCount: state.secondCount - action.val };
    default:
      return state;
  }
};

export const CounterContext = createContext();

export default function Root() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CounterContext.Provider value={{counterState: count, counterDispatch: dispatch}}>
        Combine of use reducer and use context
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
}
