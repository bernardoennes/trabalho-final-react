import styles from "./tag.module.css";

export function Tag({ children }) {
  return (
    <div className={styles.tag}>
      <span className={styles.tagPreco}>{children}</span>
    </div>
  );
}
