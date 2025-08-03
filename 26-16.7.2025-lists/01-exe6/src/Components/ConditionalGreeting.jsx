import { useState } from "react";

export function ConditionalGreeting() {
    const [isMorning, setIsmorning] = useState(false)

    return (
        <h1 
        style={{ 
            borderRadius: "10px",
            width: "120px",
            border: "1px solid black",
            padding: "10px" }}
            onClick={() => setIsmorning(!isMorning)}>
            {isMorning ? "בוקר  🌅" : "ערב 🌇"}
        </h1>
    )
}