import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NewGame } from "../pages/NewGame";

export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newgame" element={<NewGame />} />
        </Routes>
     </BrowserRouter>
   )
}

