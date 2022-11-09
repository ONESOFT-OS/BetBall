import { stringify } from "querystring";
import { useEffect, useState } from "react"
import { useApi } from "../../hooks/userApi";

import { User } from "../../types/User"
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    
    
    const api = useApi();

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if(data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.signout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }
    
    return (
        <AuthContext.Provider value={{ user, signin, signout}}>
            {children}
        </AuthContext.Provider>


    );
}