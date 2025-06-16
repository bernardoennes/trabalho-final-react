import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";
import Sobre from "../Pages/sobre/sobre";

import Carrinho from "../Pages/Carrinho/Carrinho";
import { Cadastrar } from "../pages/cadastroPage/createAccountPage";
import { Login } from "../Pages/login/login";
import { Ajuda } from "../Pages/Ajuda/Ajuda";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastrar/>}/>
            <Route path="/categoria/:nomeCategoria" element={<HomePage />}/>
            <Route path="/search" element={<HomePage />} />
            <Route path="/ajuda" element={<Ajuda />} />
        </Routes>
    )
}