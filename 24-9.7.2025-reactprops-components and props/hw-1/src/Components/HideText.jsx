import { useState } from "react";

export function HideText() {
    console.log("components HideText rendered")
    //1. variables and properties 
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("")

    //2. functions 
    function toggle() {
        if (isVisible) {
            setIsVisible(false)
            setMessage("")
        }
        else {
            setIsVisible(true)
            setMessage("This is my message....")
        }
    }
    //3. js + html 
    return (
        <div>
            <button onClick={toggle}>hide and show text</button>
            <p>{message}</p>
        </div>
    )


}