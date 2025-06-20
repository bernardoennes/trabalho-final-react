import styles from "./navbar.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "../Button/Redondo/button";
import { ButtonSearch } from "../Button/Busca/buttonSearch";
import { Input } from "../Input/Busca/input";
import { Categorias } from "../Categorias/categorias";
import { MenuUsuario } from "../MenuUsuario/menuusuario";

export function Navbar() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [temaClaro, setTemaClaro] = useState(() => {
    const salvaTema = localStorage.getItem("tema");
    return salvaTema === "claro";
  });
  const [qtdCarrinho, setQtdCarrinho] = useState(0);

  useEffect(() => {
    if (temaClaro) {
      document.body.classList.add("tema-claro");
    } else {
      document.body.classList.remove("tema-claro");
    }
    localStorage.setItem("tema", temaClaro ? "claro" : "escuro");
  }, [temaClaro]);

  // atualizei o contador 
  useEffect(() => {
    function atualizarQtdCarrinho() {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      setQtdCarrinho(carrinho.length);
    }
    atualizarQtdCarrinho();

    // esse EventListener é pra "escutar" as mudanças seja la qual seja a pagina
    window.addEventListener("storage", atualizarQtdCarrinho);
    window.addEventListener("carrinhoUpdate", atualizarQtdCarrinho);

    return () => {
      window.removeEventListener("storage", atualizarQtdCarrinho);
      window.removeEventListener("carrinhoUpdate", atualizarQtdCarrinho);
    };
  }, []);

  const toggleTheme = () => {
    setTemaClaro((prevMode) => !prevMode);
  };

  const handleBusca = () => {
    navigate(`/search?q=${encodeURIComponent(busca)}`);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.intro}>
          <div
            className={styles.logoBack}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            title="Ir para a página inicial"
          >
            <img
              className={styles.logo}
              src="https://i.postimg.cc/02mXGRd2/0Logo.png"
              alt="Logo icon"
            />
          </div>
          <div className={styles.nomeDoSite}>O Canto do Corvo</div>
        </div>

        <div className={styles.busca}>
          <Input
            type="text"
            placeholder="Pelo que procura?"
            onChange={(e) => setBusca(e.target.value)}
          />
          <ButtonSearch
            onClick={handleBusca}
            icon={
              temaClaro
                ? "https://i.postimg.cc/w3KJxr7w/0-Busca-Claro.png"
                : "https://i.postimg.cc/L4JbXZJP/0Busca.png"
            }
          />
        </div>

        <div className={styles.menu}>
          <div className={styles.baseBotao} style={{ position: "relative" }}>
            <Button
              icon="https://i.postimg.cc/7Zksmsm1/0-Carrinho.png"
              onClick={() => navigate("/carrinho")}
            />
            {qtdCarrinho > 0 && (
              <span className={styles.carrinhoNotificacao}>
                {qtdCarrinho}
              </span>
            )}
          </div>
          <div className={styles.baseBotao}>
            <MenuUsuario />
          </div>
          <div className={styles.baseBotao}>
            <button
              onClick={toggleTheme}
              title={temaClaro ? "Claro" : "Escuro"}
            >
              <img
                className={styles.botaoTema}
                src="https://i.postimg.cc/Jh7TWywG/0Tema.png"
                alt="Tema"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className={styles.categorias}>
        <Categorias />
      </div>
    </div>
  );
}
