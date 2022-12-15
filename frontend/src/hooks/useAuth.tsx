import {AuthContext} from "../contexts/Auth/AuthContext";
import {useContext} from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}