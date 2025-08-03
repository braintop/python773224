import { useState } from "react"
function App() {
  let [count, setCount] = useState(0)
  
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }
  return (
    <>
      <h1>useState</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <h2>{count}</h2>
    </>
  )
}
export default App
