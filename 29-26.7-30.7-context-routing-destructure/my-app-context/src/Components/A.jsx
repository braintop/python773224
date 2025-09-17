import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"
import UserContext from "../Contexts/UserContext"
import styles from "./A.module.css"



export function A() {
    const { userName } = useContext(UserContext)
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={darkMode?styles.dark:styles.light}>
            <h1>A:)</h1>
            <p>we love {userName}</p>
        </div>

    )

}
