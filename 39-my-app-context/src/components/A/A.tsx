import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import styles from "./A.module.css";
export default function A() {
    const { counter } = useContext(UserContext);
    return (
        <div>
            <h1 className={styles.color}>A</h1>
            <p>{counter}</p>
        </div>
    )
}