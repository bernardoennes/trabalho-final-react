import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";
import { Cadastrar } from "../pages/cadastroPage/createAccountPage";
import Login from "../pages/login/login";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastrar/>}/>
        </Routes>
    )
}