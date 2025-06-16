import styles from "./rotulo.module.css";

export function Rotulo({ children }) {
  return (
    <div className={styles.tag}>
      <span className={styles.rotulo}>{children}</span>
    </div>
  );
}
