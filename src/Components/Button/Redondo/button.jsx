import styles from "./button.module.css";

export function Button({ type, icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      <img src={icon} alt="ícone" />
    </button>
  );
}
