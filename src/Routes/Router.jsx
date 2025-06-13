import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/home";

export function Router() {
    return  (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}