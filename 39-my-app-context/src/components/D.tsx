import { useContext } from "react";
import UserContext from "../Context/UserContext";
export default function D() {
    const { firstname, lastname, counter, setCounter } = useContext(UserContext);
    return (
        <div>
            <h1>D</h1>
            <p>{firstname} {lastname}</p>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}