import { useContext } from "react";
import CounterContext from "../Contexts/CounterContext";

export function B() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>B Component</h2>
      <p>Count from context: {count}</p>
    </div>
  );
}
