import styles from "./categorias.module.css";

import { Link } from "react-router-dom";

export function Categorias() {
  const categorias = [
    { nome: "Romance Gótico", pagina: "/categoria/romance" },
    { nome: "Clássicos", pagina: "/categoria/classicos" },
    { nome: "Coleções", pagina: "/categoria/colecoes" },
    { nome: "Horror", pagina: "/categoria/horror" },
    { nome: "Suspense", pagina: "/categoria/suspense" },
    { nome: "Aventura", pagina: "/categoria/aventura" },
    { nome: "Ficção Científica", pagina: "/categoria/ficcao" },
  ];

  return (
    <ul className={styles.categoriasItens}>
      {categorias.map((item, index) => (
        <li key={index} className={styles.menuItem}>
          <Link to={item.pagina}>{item.nome}</Link>
        </li>
      ))}
    </ul>
  );
}
