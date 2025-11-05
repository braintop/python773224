import A from './components/A/A'
import B from './components/B'
import C from './components/C/C'
import D from './components/D'
import Input from './components/Input'
import ThemeToggle from './components/ThemeToggle'
import NameContext from './Context/NameComtext'
import UserContext from './Context/UserContext'
import ThemeContext from './Context/ThemeContext'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <h1 className="color">hello context</h1>
        <ThemeToggle />
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
      </div>
    </ThemeContext.Provider>
  )
}

export default App
