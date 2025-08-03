import { Student } from "./Components/Student"
import { Students } from "./Components/Students"
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

  let students = [
    { firstname: "oren", lastname: "uriel", grade: 60 },
    { firstname: "guy", lastname: "almog", grade: 45 },
    { firstname: "Arielle", lastname: "Geva", grade: 100 }
  ]
  return (
    <>
      <h1>Tasks</h1>
      {/* <Tasks tasks={missions} /> */}
      {/* <Student firstname="sergei" lastname="memo" grade={100} /> */}
      <Students students={students} />
    </>
  )
}

export default App
