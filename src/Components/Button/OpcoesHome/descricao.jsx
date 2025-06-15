import { useState } from "react";
import { createPortal } from "react-dom";
import { Eye } from "lucide-react";
import styles from "./descricao.module.css";

export function Descricao({ text }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const abrirDescricao = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  return (
    <>
      <button onClick={abrirDescricao} className={styles.botao}>
        <Eye className={styles.descricao} />
      </button>

      {mostrarPopup &&
        createPortal(
          <div className={styles.popupBackground}>
            <div className={styles.popup}>
              <p>{text}</p>
              <button onClick={fecharPopup} className={styles.botaoFechar}>
                Fechar
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
