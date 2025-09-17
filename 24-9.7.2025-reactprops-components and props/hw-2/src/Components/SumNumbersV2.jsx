import { useState } from "react"
export function SumNumbersV2() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [sum, setSum] = useState(0)
    // () => {}  , (e) => {}
    return (
        <>
            <input
                type="number"
                placeholder="type first number"
                onChange={ (e)=>{setNumber1(+e.target.value)} }
            >
            </input>
            <input
                type="number"
                placeholder="type second number"
                onChange={e=>setNumber2(+e.target.value)}
            ></input>
            <button onClick={()=>{setSum(number1+number2)}}>Display Sum</button>
            <h1>the sum is {sum}</h1>
        </>
    )
}