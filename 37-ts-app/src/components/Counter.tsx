import { useState } from "react";


interface CounterProps {
    initialValue: number;
    owner: string;
    
}
  
export default function Counter({ initialValue, owner }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <h2>{owner}: Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
