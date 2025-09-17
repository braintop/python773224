import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"
import UserContext from "../Contexts/UserContext"
import styles from "./Login.module.css"
export function Login() {
    const { userName, setUserName } = useContext(UserContext)
    const { darkMode } = useContext(ThemeContext)

    return (
        <div>
            <h1 className={darkMode?styles.dark:styles.light}  >Login</h1>
            <input type="text" onChange= {((e)=>setUserName(e.target.value))} />
        </div>
    )
}
