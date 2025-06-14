import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/homepage/home";
import { Login } from "../Pages/login/login";
export function Rotas() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}