import { useState } from "react"
import { CheckAge } from "./Components/CheckAge"
import { HideText } from "./Components/HideText"
import { Input } from "./Components/Input"
import { Message } from "./Components/Message"
import { SumNumbers } from "./Components/SumNumbers"
import { SumNumbersV2 } from "./Components/SumNumbersV2"
function App() {
    return (
        <>
            <h1>Components</h1>
            <Message />
            <HideText />
            <Input/>
            <SumNumbers/>
            <SumNumbersV2/>
            <CheckAge/>
        </>
    )
}

export default App
