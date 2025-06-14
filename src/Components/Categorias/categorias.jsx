import styles from "./categorias.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categorias").then((res) => {
      setCategorias(res.data);
    });
  }, []);

  useEffect(() => {
    const categoriaSalva = localStorage.getItem("categoria") || "";

    axios.get("http://localhost:8080/produtos").then((res) => {
      const produtosFiltrados = res.data.filter(
        (produto) => produto.categoria === categoriaSalva
      );
      setProdutos(produtosFiltrados);
      setLoading(false);
    });
  }, []);

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
