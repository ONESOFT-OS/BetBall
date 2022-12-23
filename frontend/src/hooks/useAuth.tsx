import {AuthContext} from "../contexts/Auth/AuthContext";
import {useContext} from "react";

export const useAuth = () => {
    return useContext(AuthContext);
}