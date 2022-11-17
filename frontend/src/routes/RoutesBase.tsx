import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NewGame } from "../pages/NewGame";
import { Deposit } from '../pages/Deposit';
import { Historic } from '../pages/Historic';
import {Bet} from "../pages/Bet";
import { Withdraw } from '../pages/Withdraw';
import { CreateUser } from '../pages/CreateUser';


export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/historic" element={<Historic/>}/>
            <Route path="/bet" element={<Bet/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/user/create" element={<CreateUser/>} />
        </Routes>
     </BrowserRouter>
   )
}
