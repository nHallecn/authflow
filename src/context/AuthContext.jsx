import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export function useAuth(){
    const ctx = useContext(AuthContext);
    return ctx;
}