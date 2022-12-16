import { useEffect, useState } from "react";

import { AuthContext, typeAuthProps } from "./AuthContext";
import {
    getTokenLocalStorage,
    loginRequestToken,
    removeTokenLocalStorage,
    setTokenLocalStorage,
} from "../../utils/authFunctions";

export const AuthProvider = ({ children }: typeAuthProps) => {
    const [token, setToken] = useState<string>('');
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        const localStorage = getTokenLocalStorage();

        localStorage === null ? setToken('') : setToken(localStorage.token);
        localStorage === null ? setRole('') : setRole(localStorage.role);

    }, []);

    async function loginAuthentication(email: string, senha: string) {
        const response = await loginRequestToken(email, senha);

        if (response) {
            setToken(response.token);
            setRole(response.role);
            setTokenLocalStorage(response);
            return response;
        }
        return null;
    }

    async function logOut() {
        setToken("");
        removeTokenLocalStorage();
    }

    return (
        <AuthContext.Provider
            value={{ token, role, loginAuthentication, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};
