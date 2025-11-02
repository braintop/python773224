import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Input from './components/Input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter initialValue={1} owner="Arielle" />
    <Counter initialValue={10} owner="Laura" />
    <Counter initialValue={20} owner="MemoUz" />

    <Input placeholder="Enter your ilya" />
    </>
  )
}

export default App
