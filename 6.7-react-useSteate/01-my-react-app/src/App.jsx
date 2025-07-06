function App() {
  //area 1 - variables 
  let counter = 0
  let city = "raanana"
  let country = "Israel"
  let street = "david eleazar"

  //functions 
  function test() {
    alert("test")
  }
  function displayAddress() {
    alert(country + " " + " " + city + " " + street)
  }


  return (
    <>
      <h1>hello world</h1>
      <button onClick={test}>test</button>
      <button onClick={displayAddress}>address</button>
      <p>{country} {city} {street}</p>
    </>
  )
}

export default App
