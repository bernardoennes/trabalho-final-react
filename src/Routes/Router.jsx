import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";
import Carrinho from "../Pages/Carrinho/Carrinho";
import { Cadastrar } from "../pages/cadastroPage/createAccountPage";
import Login from "../pages/login/login";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastrar/>}/>
        </Routes>
    )
}