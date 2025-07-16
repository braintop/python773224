import { Task } from "./Components/Task"
import { Tasks } from "./Components/Tasks"
function App() {
  let missions = [
    {
      title: "take uzi home", isDone: true
    },
    {
      title: "buy tshirt", isDone: false
    },
    {
      title: "play bla", isDone: true
    }
  ]
  return (
    <>
      <h1>Tasks</h1>
      <Tasks tasks={missions} />
    </>
  )
}

export default App
