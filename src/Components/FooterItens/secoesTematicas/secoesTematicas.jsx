import styles from "../footerItens.module.css";

import { Link } from "react-router-dom";

export function SecoesTematicas() {
  const secoesTematicas = [
    { nome: "Projetos", pagina: "/projetos" },
    { nome: "Boletim Literário", pagina: "/boletimliterario" },
    { nome: "Seleções Especiais", pagina: "/selecoes" },
    { nome: "Listas de Leituras", pagina: "/listasdeleituras" },
  ];

  return (
    <div className={styles.coluna}>
      <h1 className={styles.topico}>Seções Temáticas</h1>
      <ul>
        {secoesTematicas.map((link, i) => (
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
