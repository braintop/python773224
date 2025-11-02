import { useEffect } from "react";
import { useState } from "react";
export default function Timer() {
    const [counter, setCounter] = useState<number>(0);
    console.log("counter:", counter);
    useEffect(() => {
        const timer = setInterval(() => {
          setCounter((counter) => counter + 1);
        }, 1000);
        return () => clearInterval(timer);
      },[]);
      
    
    return (
        <div>
            <h1>Timer</h1>
            <h2>Counter: {counter}</h2>
        </div>
    )
}