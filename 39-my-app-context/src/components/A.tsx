import { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function A() {
    const { counter } = useContext(UserContext);
    return (
        <div>
            <h1>A</h1>
            <p>{counter}</p>
        </div>
    )
}