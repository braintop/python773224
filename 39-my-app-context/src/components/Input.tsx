import { useContext, useState } from "react";
import NameContext from "../Context/NameComtext";
export default function Input() {
    const { name, setName } = useContext(NameContext);

    function handleFirstName(event:React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleFirstName} />
        </div>
    )
}