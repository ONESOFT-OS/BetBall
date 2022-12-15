import {useEffect, useState} from "react"

import {AuthContext, typeAuthProps} from "./AuthContext";
import {
    getTokenLocalStorage,
    loginRequestToken,
    removeTokenLocalStorage,
    setTokenLocalStorage
} from "../../utils/authFunctions";

export const AuthProvider = ({children}: typeAuthProps) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const token = getTokenLocalStorage();

        token == null ? setToken(null) : setToken(token);

    }, []);


    async function loginAuthentication(email: string, senha: string) {
        const response = await loginRequestToken(email, senha);

        if (response.status === 200) {
            console.log(response.data);
            setToken(response.detail);
            setTokenLocalStorage(response.detail);
            return true;
        }

        return false;
    }

    async function logOut() {
        setToken(null);
        removeTokenLocalStorage();
    }

    return (
        <AuthContext.Provider value={{token, loginAuthentication, logOut}}>
            {children}
        </AuthContext.Provider>);
}