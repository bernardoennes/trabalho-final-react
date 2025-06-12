import styles from "./navbar.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import iconCarrinho from "../../assets/0Carrinho.png";
import iconTema from "../../assets/0Tema.png";
import iconBusca from "../../assets/0Busca.png";
import iconBuscaClaro from "../../assets/0BuscaClaro.png";

import { Button } from "../Button/Redondo/button";
import { ButtonSearch } from "../Button/Busca/buttonSearch";
import { Input } from "../Input/Busca/input";
import { Categorias } from "../Categorias/categorias";
import { MenuUsuario } from "../MenuUsuario/menuusuario";

export function Navbar() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  // Troca de tema
  const [temaClaro, setTemaClaro] = useState(() => {
    const salvaTema = localStorage.getItem("tema");
    return salvaTema === "escuro";
  });

  useEffect(() => {
    if (temaClaro) {
      document.body.classList.add("tema-claro");
    } else {
      document.body.classList.remove("tema-claro");
    }
    localStorage.setItem("tema", temaClaro ? "claro" : "escuro");
  }, [temaClaro]);

  const toggleTheme = () => {
    setTemaClaro((prevMode) => !prevMode);
  };

  // Busca
  const handleBusca = () => {
    navigate(`/search?q=${encodeURIComponent(busca)}`);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.intro}>
          <div className={styles.logo} />
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
            icon={temaClaro ? iconBuscaClaro : iconBusca}
          />
        </div>

        <div className={styles.menu}>
          <div className={styles.baseBotao}>
            <Button icon={iconCarrinho} onClick={() => navigate("/carrinho")} />
          </div>
          <div className={styles.baseBotao}>
            <MenuUsuario />
          </div>
          <div className={styles.baseBotao}>
            <button
              className={styles.botaoTema}
              onClick={toggleTheme}
              title={temaClaro ? "Claro" : "Escuro"}
            >
              {" "}
              <img className={styles.atalhoTema} src={iconTema} alt="Tema" />
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
