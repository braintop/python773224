import { useContext } from "react";

import UserContext from "../Context/UserContext";

export default function C() {
    const { firstname, lastname } = useContext(UserContext);
    return (
        <div>
            <h1>C</h1>
            <p>{firstname} {lastname}</p>
        </div>
    )
}