import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { ButtonCommon } from "../../Components/Button/Comum/buttonCommon";
import styles from "./Carrinho.module.css";

const Carrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantidades, setQuantidades] = useState({});

  useEffect(() => {
    const nomesCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    axios
      .get("http://localhost:8080/produtos", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvQGVtYWlsLmNvbSIsImV4cCI6MTc0OTg2MTIwNH0.rA99yYLJj60wYTnAphDNgjY_PoiLF9X7t-JqG8kX0Ag",
        },
      })
      .then((res) => {
        const produtosNoCarrinho = res.data.filter((produto) =>
          nomesCarrinho.includes(produto.nome)
        );
        setProdutos(produtosNoCarrinho);

        const quantidadesIniciais = {};
        produtosNoCarrinho.forEach((produto) => {
          quantidadesIniciais[produto.nome] = 1;
        });
        setQuantidades(quantidadesIniciais);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const alterarQuantidade = (nomeProduto, novaQuantidade) => {
    if (novaQuantidade >= 1) {
      setQuantidades((prev) => ({
        ...prev,
        [nomeProduto]: novaQuantidade,
      }));
    }
  };

  const removerProduto = (nomeProduto) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novoCarrinho = carrinhoAtual.filter((nome) => nome !== nomeProduto);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    setProdutos((prev) =>
      prev.filter((produto) => produto.nome !== nomeProduto)
    );
    setQuantidades((prev) => {
      const novasQuantidades = { ...prev };
      delete novasQuantidades[nomeProduto];
      return novasQuantidades;
    });
  };

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => {
      return total + produto.preco * (quantidades[produto.nome] || 1);
    }, 0);
  };

  const calcularTotalItens = () => {
    return Object.values(quantidades).reduce(
      (total, quantidade) => total + quantidade,
      0
    );
  };

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.carrinhoContainer}>
          <div className={styles.cabecalho}>
            <h1 className={styles.titulo}>Carrinho de compras</h1>
            {produtos.length > 0 && (
              <span className={styles.totalItens}>
                {calcularTotalItens()}{" "}
                {calcularTotalItens() === 1 ? "item" : "itens"}
              </span>
            )}
          </div>

          {produtos.length === 0 ? (
            <div className={styles.carrinhoVazio}>
              <div className={styles.iconeVazio}>🛒</div>
              <h2 className={styles.tituloVazio}>Seu carrinho está vazio</h2>
              <p className={styles.textoVazio}>
                Adicione produtos ao seu carrinho para começar suas compras
              </p>
              <ButtonCommon
                title="Continuar comprando"
                onClick={() => (window.location.href = "/")}
              />
            </div>
          ) : (
            <div className={styles.conteudoCarrinho}>
              <div className={styles.listaProdutos}>
                {produtos.map((produto) => (
                  <div key={produto.nome} className={styles.produtoCard}>
                    <div className={styles.produtoImagem}>
                      <img
                        src={produto.linkImagem}
                        alt={produto.nome}
                        className={styles.imagem}
                      />
                    </div>

                    <div className={styles.produtoInfo}>
                      <h3 className={styles.produtoNome}>{produto.nome}</h3>
                      <p className={styles.produtoDescricao}>
                        {produto.descricao}
                      </p>

                      <div className={styles.produtoDetalhes}>
                        <span className={styles.disponibilidade}>
                          ✓ Em estoque
                        </span>
                      </div>
                    </div>

                    <div className={styles.produtoAcoes}>
                      <div className={styles.quantidadeContainer}>
                        <label className={styles.quantidadeLabel}>Qtd:</label>
                        <div className={styles.quantidadeControle}>
                          <button
                            className={styles.quantidadeBotao}
                            onClick={() =>
                              alterarQuantidade(
                                produto.nome,
                                (quantidades[produto.nome] || 1) - 1
                              )
                            }
                            disabled={(quantidades[produto.nome] || 1) <= 1}
                          >
                            −
                          </button>
                          <span className={styles.quantidadeTexto}>
                            {quantidades[produto.nome] || 1}
                          </span>
                          <button
                            className={styles.quantidadeBotao}
                            onClick={() =>
                              alterarQuantidade(
                                produto.nome,
                                (quantidades[produto.nome] || 1) + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className={styles.precoContainer}>
                        <span className={styles.produtoPreco}>
                          R${" "}
                          {(
                            produto.preco * (quantidades[produto.nome] || 1)
                          ).toFixed(2)}
                        </span>
                        {(quantidades[produto.nome] || 1) > 1 && (
                          <span className={styles.precoUnitario}>
                            R$ {produto.preco?.toFixed(2)} cada
                          </span>
                        )}
                      </div>

                      <div className={styles.acoesProduto}>
                        <button
                          className={styles.botaoRemover}
                          onClick={() => removerProduto(produto.nome)}
                        >
                          Remover
                        </button>
                        <button className={styles.botaoSalvar}>
                          Salvar para depois
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.resumoPedido}>
                <div className={styles.resumoCard}>
                  <h3 className={styles.resumoTitulo}>Resumo do pedido</h3>

                  <div className={styles.resumoItem}>
                    <span>
                      Subtotal ({calcularTotalItens()}{" "}
                      {calcularTotalItens() === 1 ? "item" : "itens"}):
                    </span>
                    <span>R$ {calcularTotal().toFixed(2)}</span>
                  </div>

                  <div className={styles.resumoTotal}>
                    <span>Total:</span>
                    <span className={styles.valorTotal}>
                      R$ {calcularTotal().toFixed(2)}
                    </span>
                  </div>

                  <ButtonCommon
                    title="Finalizar compra"
                    onClick={() => alert("Compra finalizada!")}
                  />
                  <div className={styles.seguranca}>
                    <span className={styles.iconeSeguranca}>🔒</span>
                    <span>Compra 100% segura</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrinho;
