import { useEffect, useState } from "react";
import axios from "axios";

const Carrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nomesCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    axios
      .get("http://localhost:8080/produtos", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmRyZUBlbWFpbC5jb20iLCJleHAiOjE3NDk2OTMwMDV9.WVJ6tnp6-U_Y6Ifvsa6OSsuOlBMlcCeFdybwOeSzPTU",
        },
      })
      .then((res) => {
        const produtosNoCarrinho = res.data.filter((produto) =>
          nomesCarrinho.includes(produto.nome)
        );
        setProdutos(produtosNoCarrinho);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h2>Carrinho</h2>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.nome}>
              <strong>{produto.nome}</strong> - R$ {produto.preco?.toFixed(2)}{" "}
              <br />
              <span>{produto.descricao}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrinho;