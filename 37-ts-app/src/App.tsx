import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Input from './components/Input'
import Students from './components/Students'
import Tasks from './components/Tasks'
import type TaskProps from './components/Task'
function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<TaskProps[]>([  
    { id: 1, title: "take uzi home", isDone: true },
    { id: 2, title: "buy tshirt", isDone: false },
    { id: 3, title: "play bla", isDone: true },
  ])

  function toggleDone(id: number): void {
    alert(`Task ${id} is done`);
    let newTasks: TaskProps[] = tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task);
    setTasks(newTasks);
  }


  const students = [
    { id: 1, name: "Dana", grade: 90 },
    { id: 2, name: "Amit", grade: 85 },
    { id: 3, name: "Roni", grade: 92 },
  ]

  return (
    <>
    <Counter initialValue={1} owner="Arielle" step={1} />
    <Counter initialValue={10} owner="Laura" step={10} />
    <Counter initialValue={20} owner="MemoUz" step={20} />

    <Input placeholder="Enter your ilya" />
    <Students students={students} />

    <Tasks tasks={tasks} toggleDone={toggleDone} />
    </>
  )
}

export default App
