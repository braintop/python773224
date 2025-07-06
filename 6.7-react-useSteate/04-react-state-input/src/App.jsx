import { useState } from "react"
function App() {
  //let firstname = "Mamo";// משתנה רגיל 
  const [firstname, setFirstName] = useState("Mamo")// משתנה מצב
  function firstNameChanged(e) {
    setFirstName(e.target.value)
  }
  return (
    <>
      <h1>useState with Input</h1>
      <input
        type="text"
        placeholder="firstname"
        onChange={firstNameChanged}
      >
      </input>
      <p>{firstname}</p>
    </>
  )
}

export default App
