import { createContext } from "react";

interface NameContextType {
    name: string;
    setName: (name: string) => void;
}

const NameContext = createContext<NameContextType>({ name: "", setName: (name: string) => {} });

export default NameContext;