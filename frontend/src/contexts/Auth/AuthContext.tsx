import { createContext } from 'react';

export interface typeUser {
    token?: string | boolean | null;
    type?: string | null;
}

export interface typeAuthContext extends typeUser {
    loginAuthentication: (email: string, password: string) => Promise<boolean>;
    logOut: () => void;
}

export type typeAuthProps = {
    children: JSX.Element;
};


export const AuthContext = createContext<typeAuthContext>(
    {} as typeAuthContext
);
