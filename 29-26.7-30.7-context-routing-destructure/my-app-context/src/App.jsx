import { useState } from 'react'
import CounterContext from './Contexts/CounterContext';
import { B } from './Components/B';
import { C } from './Components/C';
import { D } from './Components/D';
import { A } from './Components/A';
import UserContext from './Contexts/UserContext';
import { Login } from './Components/Login';
import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import ThemeContext from './Contexts/ThemeContext';

function App() {
    const [count, setCount] = useState(0)
    const [userName, setUserName] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    return (
        <>
            <h1>Hello context</h1>
            <button onClick={toggleDarkMode}> {darkMode ? "🌙" : "☀️"} </button>
            <ThemeContext.Provider value={{darkMode}}>
                <UserContext.Provider value={{ userName, setUserName }}  >
                    <CounterContext.Provider value={{ count, setCount }}>
                        <A />
                        <C />
                        <B />
                        <D />
                        <Header />
                        <Login />
                        <Profile />
                    </CounterContext.Provider>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}

export default App
