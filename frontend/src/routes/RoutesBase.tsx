import {BrowserRouter, Route, Routes, Outlet, Navigate} from 'react-router-dom';
import {SignIn} from "../pages/SignIn";
import {SignUp} from "../pages/SignUp";
import {NewGame} from "../pages/NewGame";
import {PerfilHistoric} from '../pages/PerfilHistoric';
import {Bet} from "../pages/Bet";
import {CreateUser} from '../pages/CreateUser';
import {PerfilDeposit} from '../pages/PerfilDeposit';
import {PerfilWithdraw} from '../pages/PerfilWithdraw';
import {Home} from '../pages/Home';
import {PerfilSettings} from '../pages/PerfilSettings';
import {ChangeUsersPassword} from '../pages/ChangeUserPassword';
import {PasswordRecovery} from "../pages/PasswordRecovery";
import {ConfirmPasswordRecovery} from "../pages/ConfirmPasswordRecovery";
import {EmployeeDashboard} from '../pages/EmployeeDashboard';
import {Test} from '../pages/Test';
import {PerfilAdmSettings} from '../pages/PerfilAdmSettings';
import {PerfilAdm} from '../pages/PerfilAdm';
import {Allgames} from '../pages/Games';
import {DefineProfit} from '../pages/Profit';
import {SystemLogs} from '../pages/Logs';
import {PerfilEmployee} from "../pages/PerfilEmployee";
import {EditGame} from '../pages/EditGame';
import {EmployeeDashboardFinish} from '../pages/EmployeeDashboardFinish';
import {EmployeeDashboardTime} from '../pages/EmployeeDashboardTime';
import {useAuth} from '../hooks/useAuth';
import { AdmDashboard } from '../pages/AdmDashboard';
import { AdmUsers } from '../pages/AdmUsers';
import { ROLES } from "../utils/roles";

interface RouteProps {
    allowedRoles?: string[];
}

export function ProtectLoginRoute() {
    const { token } = useAuth();

    if (token === '' || token === undefined) return null;

    return token ? <Navigate to="/" /> : <Outlet />;
}

export function ProtectRoute(props: RouteProps) {
    const { token, role } = useAuth();
    const { allowedRoles } = props;

    if (token === '' || token === undefined) return null;

    const canAccess = allowedRoles?.includes(role);

    return token && canAccess ? <Outlet /> : <Navigate to="/" replace />;
}

export const RoutesBase = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*PUBLIC ROUTES*/}
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path={"/password_recovery"} element={<PasswordRecovery/>}/>
                <Route path={"/confirm_recovery"} element={<ConfirmPasswordRecovery/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/superuser/password" element={<ChangeUsersPassword/>}/>

                {/* USER ROUTES */}
                <Route element={<ProtectRoute allowedRoles={[ROLES.User]}/> }>
                    <Route path="/perfil/withdraw" element={<PerfilWithdraw/>}/>
                    <Route path="/perfil/historic" element={<PerfilHistoric/>}/>
                    <Route path="/perfil/deposit" element={<PerfilDeposit/>}/>
                    <Route path="/perfil/settings" element={<PerfilSettings/>}/>
                    <Route path="/bet" element={<Bet/>}/>
                    <Route path={"games"} element={<Allgames/>}/>
                </Route>

                {/* ADMIN ROUTES */}
                <Route element={<ProtectRoute allowedRoles={[ROLES.Admin]}/> }>
                    <Route path={"/adm/logs"} element={<SystemLogs/>}/>
                    <Route path={"/adm/dashboard"} element={<AdmDashboard/>}/>
                    <Route path={"/adm/users"} element={<AdmUsers/>}/>
                    <Route path="/user/create" element={<CreateUser/>}/>
                    <Route path={"perfil/adm"} element={<PerfilAdm/>}/>
                    <Route path={"admSettings"} element={<PerfilAdmSettings/>}/>
                    <Route path="/superuser/password" element={<ChangeUsersPassword/>}/>
                </Route>

                {/*EMPLOYEE ROUTES*/}
                <Route element={<ProtectRoute allowedRoles={[ROLES.Employee, ROLES.Admin]}/>}>
                    <Route path="/newgame" element={<NewGame/>}/>
                    <Route path="/editgame" element={<EditGame/>}/>
                    <Route path={"/dashboard"} element={<EmployeeDashboard/>}/>
                    <Route path={"/dashboard/time"} element={<EmployeeDashboardTime/>}/>
                    <Route path={"/dashboard/finish"} element={<EmployeeDashboardFinish/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path={"perfil/employee"} element={<PerfilEmployee/>}/>
                    <Route path={"profit"} element={<DefineProfit/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
