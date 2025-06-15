import styles from "./card.module.css";

import { CarrinhoB } from "../Button/OpcoesHome/carrinhoB";
import { Descricao } from "../Button/OpcoesHome/descricao";
import { Tag } from "../Tag/tag";
import { Rotulo } from "../Rotulo/rotulo";

export function Card({ nome, preco, imagem, descricao, addCarrinho }) {
  return (
    <div className={styles.cardContainer}>
      <Rotulo>{nome}</Rotulo>
      <div className={styles.card}>
        <img className={styles.livroImagem} alt={nome} src={imagem} />
      </div>
      <div className={styles.opcoes}>
        <CarrinhoB addCarrinho={addCarrinho} />
        <Tag>R$ {preco}</Tag>
        <Descricao text={descricao} />
      </div>
    </div>
  );
}
