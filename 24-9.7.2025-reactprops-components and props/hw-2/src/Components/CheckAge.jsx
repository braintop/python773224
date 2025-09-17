import { useState } from "react"

export function CheckAge(){
    //1. properties 
    const [age, setAge] = useState(0)
    const [message, setMessage] = useState("")
    //2. functions 
    //3. js + html 
    function checkInputAge(){
        if(age>=18){
            //alert("old")
            setMessage("old")
        }
        else if(age>=0 && age<18){
            //alert("young")
            setMessage("young")
        }
        else{
            setMessage("error. please fill age above 0")
        }
    }
    return(
        <div>
            <h1>Check Age</h1>
            <input type="number" onChange={(e)=>{setAge(+e.target.value)}}></input>
            <button onClick={checkInputAge}>Check</button>
            <p>{message}</p>
        </div>
    )
    
}