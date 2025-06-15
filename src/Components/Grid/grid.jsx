import styles from "./grid.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "../Cards/card";
import axios from "axios";

export function Grid({ categoria, busca }) {
  const [produtos, setProdutos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [carrinho, setCarrinho] = useState([]);
  const [popupConfirmaAdd, setPopupConfirmaAdd] = useState(false);
  const [retornoPopup, setRetornoPopup] = useState("");
  const produtosPorPagina = 12;
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
      let filtrados = res.data;
      if (categoria) {
        filtrados = filtrados.filter(
          (p) =>
            p.categoria &&
            p.categoria.toLowerCase() === categoria.toLowerCase()
        );
      }
      if (busca) {
        filtrados = filtrados.filter(
          (p) =>
            p.nome &&
            p.nome.toLowerCase().includes(busca.toLowerCase())
        );
      }
      filtrados.sort((a, b) =>
        a.nome.localeCompare(b.nome, undefined, { sensitivity: "base" })
      );
      setProdutos(filtrados);
      setPaginaAtual(1);
    });
  }, [categoria, busca]);

  const addCarrinho = (produto) => {
    setCarrinho((antCarrinho) => {
      const novoCarrinho = [...antCarrinho, produto];
      console.log("Carrinho atualizado:", novoCarrinho);
      console.log("Produto adicionado:", produto);
      return novoCarrinho;
    });
    setRetornoPopup(`${produto.nome} adicionado ao carrinho com sucesso!`);
    setPopupConfirmaAdd(true);
    setTimeout(() => {
      setPopupConfirmaAdd(false);
    }, 3000);
  };

  return (
    <div className={styles.pageContainer}>
      {popupConfirmaAdd && (
        <div className={styles.popupConfirmaAdd}>{retornoPopup}</div>
      )}
      <div className={styles.gridContainer}>
        {produtosPaginaAtual.map((produto, idx) => (
          <Card
            key={idx}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.linkImagem}
            descricao={produto.descricao}
            addCarrinho={() => addCarrinho(produto)}
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
