import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import Input from './components/Input'
import NameContext from './Context/NameComtext'
import UserContext from './Context/UserContext'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("");
  return (
    <>
      <h1>hello context</h1>
      <NameContext.Provider value={{ name, setName }} >
        <UserContext.Provider value={
          {
            firstname: "Dana",
            lastname: "Israel",
            counter,
            setCounter
          }}>
          <Input />
          <A />
          <B />
          <C />
          <D />
        </UserContext.Provider>
      </NameContext.Provider>
    </>
  )
}

export default App
