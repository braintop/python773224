import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext(null);
export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return ctx;
}


export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // use the shared auth instance from firebase.js
    const authInstance = auth;

    useEffect(() => {
        const unsub = onAuthStateChanged(authInstance, (u) => {
            setUser(u);
            setLoading(false);
        });
        return () => unsub();
    }, [authInstance]);

    const login = async (email, password) => {
        const cred = await signInWithEmailAndPassword(authInstance, email, password);
        return cred.user;
    };

    const register = async (email, password) => {
        const cred = await createUserWithEmailAndPassword(authInstance, email, password);
        return cred.user;
    };

    const logout = async () => {
        await signOut(authInstance);
    };

    const value = useMemo(() => ({ user, loading, login, register, logout }), [user, loading]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}


