import styles from "./footer.module.css";

import { Termos } from "../FooterItens/Termos/termos";
import { SecoesTematicas } from "../FooterItens/secoesTematicas/secoesTematicas";
import { Mapa } from "../FooterItens/Mapa/mapa";
import { Ajuda } from "../FooterItens/Ajuda/ajuda";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ladoEsquerdo}>
        <Ajuda />
      </div>

      <div className={styles.meio}>
        <Termos />
        <SecoesTematicas />
        <Mapa />
      </div>

      <div className={styles.ladoDireito}>
        <img className={styles.logo} src="https://i.postimg.cc/02mXGRd2/0Logo.png" alt="Logo" />
      </div>
    </footer>
  );
}
