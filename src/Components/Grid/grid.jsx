import styles from "./grid.module.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "../Cards/card";
import axios from "axios";

export function Grid() {
  const [produtos, setProdutos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 5;

  const indiceUltimo = paginaAtual * produtosPorPagina;
  const indicePrimeiro = indiceUltimo - produtosPorPagina;
  const produtosPaginaAtual = produtos.slice(indicePrimeiro, indiceUltimo);
  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/produtos").then((res) => {
      setProdutos(res.data);
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.gridContainer}>
        {produtosPaginaAtual.map((produto, idx) => (
          <Card
            key={idx}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.linkImagem}
            descricao={produto.descricao}
          />
        ))}
      </div>

      <div className={styles.botoesNavegacao}>
        <button
          onClick={paginaAnterior}
          disabled={paginaAtual === 1}
          className={styles.botaoPaginacao}
        >
          <ArrowLeft />
        </button>

        <button
          onClick={proximaPagina}
          disabled={paginaAtual === totalPaginas}
          className={styles.botaoPaginacao}
        >
          <ArrowRight />
        </button>
      </div>

      <div className={styles.infoPaginacao}>
        Página {paginaAtual} de {totalPaginas} - Mostrando{" "}
        {produtosPaginaAtual.length} produtos
      </div>
    </div>
  );
}
