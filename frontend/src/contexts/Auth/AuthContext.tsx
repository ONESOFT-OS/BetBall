import { createContext } from "react";
import {AxiosResponse} from "axios";

export interface typeUser {
    token: string;
    role: string;
}

export interface typeAuthContext extends typeUser {
    loginAuthentication: (email: string, password: string) => Promise<AxiosResponse>;
    logOut: () => void;
}

export type typeAuthProps = {
    children: JSX.Element;
};

export const AuthContext = createContext<typeAuthContext>(
    {} as typeAuthContext
);
