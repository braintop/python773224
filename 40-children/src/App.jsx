import Card from './components/Card'
import Cardv2 from './components/Cardv2'
import Box from './components/Box'
import Alert from './components/Alert'
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

    <Box color="red">

      <p>This is a box</p>
    </Box>
    <Box color="blue">

      <p>This is a box</p>
    </Box>
    <Box color="green">

      <p>This is a box</p>
    </Box>
    <Box color="yellow">

      <p>This is a box</p>
    </Box>
    <Box color="purple">

      <p>This is a box</p>
    </Box>
    <Alert type="success">
      <p>This is a success alert</p>
    </Alert>
    <Alert type="error">
      <p>This is a error alert</p>
    </Alert>
    <Alert type="warning">
      <p>This is a warning alert</p>
    </Alert>
    <Alert type="info">
      <p>This is a info alert</p>
    </Alert>
    </>
  )
}

export default App
