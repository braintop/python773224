import { useContext } from "react"
import UserContext from "../Contexts/UserContext"

export function Header() {
    const { userName  } = useContext(UserContext)

    return (
        <div>
            <h1>Welcome : {userName}</h1>
        </div>
    )
}
