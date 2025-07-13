import { useState } from "react"

export function AgeChecker(props) {
    //1. properties 
    const [age, setAge] = useState(0)
    const [minorMessage, setMinorMessage] = useState("")
    const [adultMessage, setAdultMessage] = useState("")

    //2. functions 
    function checkAge() {
        if (age >= 18) {
            setAdultMessage(props.adultMessage)
            setMinorMessage("")
        }
        else if (age < 18) {
            setMinorMessage(props.minorMessage)
            setAdultMessage("")
        }
    }
    //3. jsx + html 
    return (
        <div>
            <h1>Age Chedcker</h1>
            <input type="number" onChange={(e) => setAge(+e.target.value)}></input>
            <button onClick={checkAge}>{props.buttonText}</button>
            <p style={{ color: "red" }}>{minorMessage}</p>
            <p style={{ color: "blue" }}>{adultMessage}</p>

        </div>
    )

}