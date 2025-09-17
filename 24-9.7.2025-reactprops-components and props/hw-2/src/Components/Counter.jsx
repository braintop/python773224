import { useState } from 'react';

// קומפוננטת Counter שמקבלת ערך התחלתי דרך props
export function Counter(props) {
  const [count, setCount] = useState(props.start); // שימוש בערך המתקבל מהורה

  return (
    <div>
      <h1 style={{ color: "red" }}>🏆🏆🏆{props.owner}🏆🏆🏆 Counter</h1>
      <h2>Current count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}


