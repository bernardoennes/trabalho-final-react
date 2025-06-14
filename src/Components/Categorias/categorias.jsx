import styles from "./categorias.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Categorias() {

  const categorias = [
    { nome: "Romance Gótico", pagina: "/categoria/romance" },
    { nome: "Clássicos", pagina: "/categoria/classico" },
    { nome: "Coleções", pagina: "/categoria/colecoes" },
    { nome: "Horror", pagina: "/categoria/horror" },
    { nome: "Suspense", pagina: "/categoria/suspense" },
    { nome: "Aventura", pagina: "/categoria/aventura" },
    { nome: "Ação", pagina: "/categoria/ficcao" },
    { nome: "Vampiros", pagina: "/categoria/ficcao" },
    { nome: "Lobos", pagina: "/categoria/ficcao" },
    { nome: "Magia", pagina: "/categoria/ficcao" },
    { nome: "Ficção Científica", pagina: "/categoria/ficcao" },
    { nome: "Ficção Científica", pagina: "/categoria/ficcao" },
    { nome: "Ficção Científica", pagina: "/categoria/ficcao" },
  ];

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
