import { useContext } from "react";
import CounterContext from "../Contexts/CounterContext";

export function D() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>D Component</h2>
      <button onClick={() => setCount(count + 1)}>
        Count from context: {count}
      </button>
    </div>
  );
}
