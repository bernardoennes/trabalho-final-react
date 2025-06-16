import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CarrinhoProvider } from "./Contexts/CarrinhoContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CarrinhoProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CarrinhoProvider>
  </BrowserRouter>
);
