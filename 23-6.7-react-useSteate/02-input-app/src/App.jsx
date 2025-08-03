function App() {

  function firstNameChange() {
    console.log("first name changed")
  }
  function clicked(element) {
    //alert("input clicked")
    //console.log(e.target)// html element 
    console.log(element.target.value)
  }
  return (
    <>
      <h1>input</h1>
      <input
        type="text"
        placeholder="firstname"
        onChange={clicked}

      >
      </input>
      <input
        type="text"
        placeholder="lastname"
        onChange={clicked}
      >
      </input>

    </>
  )
}

export default App
