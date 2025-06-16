import styles from "./ajuda.module.css";

import { ButtonCommon } from "../../Button/Comum/buttonCommon";

export function Ajuda() {
  return (
    <div className={styles.ajuda}>
      <p className={styles.chamada}>Central de Ajuda</p>
      <img
        className={styles.icon}
        src="https://i.postimg.cc/qBWZCMK5/0Contato.png"
        alt="Icon Ajuda"
      />
      <ButtonCommon
        onClick={() => (window.location.href = "/ajuda")}
        title={"TIRE SUAS DÚVIDAS"}
      />
    </div>
  );
}
