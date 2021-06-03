import { useReducer } from "react";

type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

// type CountAction = {
//   type: "INCREMENT" | "DECREMENT" | "SET";
//   payload?: number;
// };

type BasicCounterAction = {
  type: "INCREMENT" | "DECREMENT";
};

type SetCounterAction = {
  type: "SET";
  payload: number;
};

type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CountState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SET", payload: 0 });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
