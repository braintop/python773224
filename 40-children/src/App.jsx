import Card from './components/Card'
import Cardv2 from './components/Cardv2'
function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Card>
        <h2>Card 1</h2>
        <p>This is a card</p>
      </Card>
      <Cardv2 title="Card 2">
        <button>Click me</button>
      </Cardv2>
      <Cardv2 title="Card 3">
        <button>Click me</button>
      </Cardv2>

      <Cardv2 title="User Info">
        <p>Name: Alice</p>
        <p>Age: 25</p>
      </Cardv2>

    </>
  )
}

export default App
