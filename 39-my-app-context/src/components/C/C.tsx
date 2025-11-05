import { useContext } from "react";

import UserContext from "../../Context/UserContext";
import NameContext from "../../Context/NameComtext";
import styles from "./C.module.css";
export default function C() {
    const { firstname, lastname } = useContext(UserContext);
    const { name } = useContext(NameContext);
    return (
        <div>
            <h1 className={styles.color}>C</h1>
            <p>{firstname} {lastname}</p>
            <p>{name}</p>
        </div>
    )
}