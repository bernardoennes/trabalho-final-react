import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";
import Sobre from "../Pages/sobre/sobre";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sobre" element={<Sobre/>}/>

        </Routes>
    )
}