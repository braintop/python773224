import { useState } from "react";


interface CounterProps {
    initialValue: number;
    owner: string;
    step: number;
}
  
export default function Counter({ initialValue, owner, step}: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <h2>{owner}: Counter: {count}</h2>
      <button onClick={() => setCount(count + step)}>+ {step}</button>
      <button onClick={() => setCount(count - step)}>- {step}</button>
    </div>
  );
}
