import { useState, useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("count:", count);
    useEffect(() => {
        console.log("count changed to :", count);
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}