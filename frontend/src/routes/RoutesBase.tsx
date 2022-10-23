import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";


export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/singup" element={<SingUp />} />
        </Routes>
    </BrowserRouter>
   )
}

