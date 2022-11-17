import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NewGame } from "../pages/NewGame";
import { Deposit } from '../pages/Deposit';
import {Bet} from "../pages/Bet";

export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/bet" element={<Bet/>}/>
        </Routes>
     </BrowserRouter>
   )
}

