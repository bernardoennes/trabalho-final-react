import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";
import { Login } from "../Pages/login/login";
import Carrinho from "../Pages/Carrinho/Carrinho";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}