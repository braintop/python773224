import { useContext } from "react";
import CounterContext from "../Contexts/CounterContext";

export function C() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>C Component</h2>
      <p>Count from context: {count}</p>
    </div>
  );
}
