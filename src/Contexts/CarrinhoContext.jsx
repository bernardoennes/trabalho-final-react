import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    setCarrinho(carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []);
  }, []);

  const adicionarAoCarrinho = (nomeProduto) => {
    setCarrinho((prev) => {
      if (!prev.includes(nomeProduto)) {
        const novoCarrinho = [...prev, nomeProduto];
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        window.dispatchEvent(new Event("carrinhoUpdate"));
        return novoCarrinho;
      }
      return prev;
    });
  };

  const removerDoCarrinho = (nomeProduto) => {
    setCarrinho((prev) => {
      const novoCarrinho = prev.filter((nome) => nome !== nomeProduto);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      window.dispatchEvent(new Event("carrinhoUpdate"));
      return novoCarrinho;
    });
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.setItem("carrinho", JSON.stringify([]));
    window.dispatchEvent(new Event("carrinhoUpdate"));
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}