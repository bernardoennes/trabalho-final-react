import styles from "./buttonCommon.module.css";

export function ButtonCommon({ onClick, title, type }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {title}
    </button>
  );
}
