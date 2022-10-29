import { AuthContext } from "./AuthContext";
import {useContext} from "react";
import { RoutesBase } from "../../routes/RoutesBase";

export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if (!auth.user){
        return <RoutesBase/>;
    }
    
    return children;
}