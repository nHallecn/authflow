import { createContext, useContext, useEffect, useState } from "react";
import { f_login, f_signup } from "../utils/api";

const AuthContext = createContext(null);


export function AuthProvider({children}){
    const [user, setUser] = useState(()=>{
        try {
            const saved = localStorage.getItem('auth-user');
            return saved ? JSON.parse(saved) : null;
        } catch {
            return null;
        }
    })

    useEffect(()=>{
        if(user){
            localStorage.setItem('auth-user', JSON.stringify(user))
        } else {
            localStorage.removeItem('auth-user');
        }
    }, [user]);

    async function login(email, password) {
        const loggedInUser = await f_login(email, password);
        setUser(loggedInUser);
        return loggedInUser;
    }

    async function signup(name, email, password) {
        const signedUpUser = await f_signup(name, email, password);
        setUser(signedUpUser);
        return signedUpUser;
    }

    function logout(){
        setUser('');
    }

    return(
        <AuthContext.Provider value={{user, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
    const ctx = useContext(AuthContext);
    return ctx;
}