import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NewGame } from "../pages/NewGame";
import { PerfilHistoric } from '../pages/PerfilHistoric';
import {Bet} from "../pages/Bet";
import { CreateUser } from '../pages/CreateUser';
import {PerfilDeposit } from '../pages/PerfilDeposit';
import { PerfilWithdraw } from '../pages/PerfilWithdraw';
import { Home } from '../pages/Home';
import { PerfilSettings } from '../pages/PerfilSettings';
import { ChangeUsersPassword } from '../pages/ChangeUserPassword';
import {PasswordRecovery} from "../pages/PasswordRecovery";
import {ConfirmPasswordRecovery} from "../pages/ConfirmPasswordRecovery";
import { EmployeeDashboard } from '../pages/EmployeeDashboard';
import { Test } from '../pages/Test';


export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/bet" element={<Bet/>}/>
            <Route path="/user/create" element={<CreateUser/>} />
            <Route path="/perfil/deposit" element={<PerfilDeposit/>} />
            <Route path="/perfil/withdraw" element={<PerfilWithdraw/>} />
            <Route path="/perfil/historic" element={<PerfilHistoric/>}/>
            <Route path="/perfil/settings" element={<PerfilSettings/>} />
            <Route path="/superuser /password" element={<ChangeUsersPassword/>}/>
            <Route path={"/password_recovery"} element={<PasswordRecovery/>}/>
            <Route path={"/confirm_recovery"} element={<ConfirmPasswordRecovery/>}/>
            <Route path={"/dashboard"} element={<EmployeeDashboard/>}/>
            <Route path={"/test"} element={<Test />}/>
        </Routes>
     </BrowserRouter>
   )
}
