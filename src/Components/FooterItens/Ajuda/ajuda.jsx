import styles from "./ajuda.module.css";

import iconContato from "../../../assets/0Contato.png";

import { ButtonCommon } from "../../Button/Comum/buttonCommon";

export function Ajuda() {
  return (
    <div className={styles.ajuda}>
      <p className={styles.chamada}>Central de Ajuda</p>
      <img className={styles.icon} src={iconContato} alt="Icon Ajuda" />
      <ButtonCommon
        onClick={() => (window.location.href = "/ajuda")}
        title={"TIRE SUAS DÚVIDAS"}
      />
    </div>
  );
}
