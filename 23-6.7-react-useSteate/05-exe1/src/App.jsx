import { useState } from "react"
function App() {
  const [message, setMessage] = useState("Hello")
  function toggleMesage() {
    if (message == "Hello") {
      setMessage("GoodBye")
    }
    else {
      setMessage("Hello")
    }
  }
  return (
    <>
      <h1>{message}</h1>
      <button onClick={toggleMesage}>toggle</button>
    </>
  )
}

export default App
