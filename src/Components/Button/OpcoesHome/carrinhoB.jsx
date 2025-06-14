import styles from "./carrinhoB.module.css";

import { ShoppingCart } from "lucide-react";

export function CarrinhoB({ onClick }) {
  return (
    <button onClick={onClick} className={styles.botao}>
      <ShoppingCart className={styles.carrinho} />
    </button>
  );
}
