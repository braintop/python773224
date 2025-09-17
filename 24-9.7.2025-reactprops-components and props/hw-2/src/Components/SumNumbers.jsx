import { useState } from "react"
export function SumNumbers() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [sum, setSum] = useState(0)
    function ChangeNumber1(e) {
        
        setNumber1(+e.target.value)
    }
    function ChangeNumber2(e) {
        setNumber2(+e.target.value)
    }
    function Addition() {
        setSum(number1 + number2)
    }
    return (
        <>
            <input
                type="number"
                placeholder="type first number"
                onChange={ChangeNumber1}
            >
            </input>
            <input
                type="number"
                placeholder="type second number"
                onChange={ChangeNumber2}
            ></input>

            <button onClick={Addition}>Display Sum</button>
            <h1>the sum is {sum}</h1>
        </>
    )
}