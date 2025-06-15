import styles from "./carrinhoB.module.css";

import { ShoppingCart } from "lucide-react";

export function CarrinhoB({ addCarrinho }) {
  return (
    <button onClick={addCarrinho} className={styles.botao}>
      <ShoppingCart className={styles.carrinho} />
    </button>
  );
}
