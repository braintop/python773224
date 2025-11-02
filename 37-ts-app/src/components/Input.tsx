import { useState } from "react";

interface InputProps {
    placeholder: string;
}

export default function Input({ placeholder }: InputProps) {

    const [value, setValue] = useState<string>("");
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <input onChange={handleChange} type="text" placeholder={placeholder} />
    )
}