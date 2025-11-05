import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import UserContext from './Context/UserContext'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <h1>hello context</h1>
      <UserContext.Provider value={
        {
         firstname: "Dana", 
         lastname: "Israel", 
         counter,
         setCounter
         }}>
        <A />
        <B />
        <C />
        <D />
      </UserContext.Provider>
    </>
  )
}

export default App
