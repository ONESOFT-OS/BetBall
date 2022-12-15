import { AuthContext } from "./AuthContext";
import {useContext} from "react";
import { RoutesBase } from "../../routes/RoutesBase";
import { useAuth } from '../../hooks/useAuth';

export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const {token} = useAuth();

    if (!token){
        return <RoutesBase/>;
    }

    return children;
}
