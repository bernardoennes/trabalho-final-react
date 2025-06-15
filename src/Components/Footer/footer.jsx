import styles from "./footer.module.css";

import { Termos } from "../FooterItens/Termos/termos";
import { SecoesTematicas } from "../FooterItens/secoesTematicas/secoesTematicas";
import { Mapa } from "../FooterItens/Mapa/mapa";
import { Ajuda } from "../FooterItens/Ajuda/ajuda";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColunas}>
        <div className={styles.ladoEsquerdo}>
          <Ajuda />
        </div>

        <div className={styles.meio}>
          <Termos />
          <SecoesTematicas />
          <Mapa />
        </div>

        <div className={styles.ladoDireito}>
          <img
            className={styles.logo}
            src="https://i.postimg.cc/02mXGRd2/0Logo.png"
            alt="Logo"
          />
        </div>
      </div>

      <p className={styles.copy}>
        &copy; 2025 ChineseKingdom. Todos os direitos reservados. — Trabalho
        Individual, Laryssa Peixoto - Desenvolvimento Web
      </p>
    </footer>
  );
}
