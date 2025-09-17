import { useState } from "react"

export function Input() {
    const [firstName, setFirstName] = useState("")//לאסוף את הנתונים שהיוסר מקליד בתיבת הטקסט
    const [value, setValue] = useState("") // להציג את הנתונים כאשר היוסר לוחץ על כפתור
    const [emptyError, setEmptyError] = useState("")
    function handleChange(e) {
        setFirstName(e.target.value)
    }


    function displayName() {
        if (firstName.length === 0) {
            // === type and value 1==="1" => return false 
            // ==  1=="1" true 
            //alert("please enter a name")
            setEmptyError("please enter a name")
        }
        else {
            setEmptyError("")
        }
        setValue(firstName)
    }

    return (
        <div>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="enter your name"></input>
            <button onClick={displayName}>display name</button>
            <p>{value}</p>
            <p style={{ color: "red" }}>{emptyError}</p>
        </div >
    )
}