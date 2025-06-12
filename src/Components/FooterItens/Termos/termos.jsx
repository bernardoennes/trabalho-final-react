import styles from "../footerItens.module.css";

import { Link } from "react-router-dom";

export function Termos() {

  const utilidades = [
    { nome: "Termos de Uso", pagina: "/termosdeuso" },
    { nome: "Política de Privacidade", pagina: "/privacidade" },
    { nome: "Política de Pagamento", pagina: "/pagamentos" },
    { nome: "Trocas e Devoluções", pagina: "/trocasedevolucoes" },
    { nome: "Regulamento de Cashback", pagina: "/cashback" },
    { nome: "Localize o Seu Pedido", pagina: "/localizarpedido" },
  ];

  return (
    <div className={styles.coluna}>
      <h1 className={styles.topico}>Privacidade e Termos</h1>
      <ul>
        {utilidades.map((link, i) => (
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

