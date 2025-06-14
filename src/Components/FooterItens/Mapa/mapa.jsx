import styles from "../footerItens.module.css";

import { Link } from "react-router-dom";

export function Mapa() {
  const mapa = [
    { nome: "Home", pagina: "/" },
    { nome: "Sobre", pagina: "/sobre" },
    { nome: "Acervo", pagina: "/acervo" },
    { nome: "Resenhas", pagina: "/resenhas" },
  ];

  return (
    <div className={styles.coluna}>
      <h1 className={styles.topico}>Mapa</h1>
      <ul>
        {mapa.map((link, i) => (
          <li key={i}>
            <Link
              to={link.pagina}
              style={{ color: link.destaque ? "goldenrod" : "inherit" }}
              className={styles.link}
            >
              {link.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
