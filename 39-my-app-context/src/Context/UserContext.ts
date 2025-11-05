import { createContext } from "react";

interface UserContextType {
    firstname: string;
    lastname: string;
    counter: number;
    setCounter: (counter: number) => void;
}

const UserContext = createContext<UserContextType>({ firstname: "", lastname: "", counter: 0, setCounter: (counter: number) => {} });

export default UserContext;