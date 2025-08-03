import { useContext } from "react"
import UserContext from "../Contexts/UserContext"

export function Profile() {
    const { userName  } = useContext(UserContext)

    return (
        <div>
            <p>username : {userName}</p>
        </div>
    )
}
