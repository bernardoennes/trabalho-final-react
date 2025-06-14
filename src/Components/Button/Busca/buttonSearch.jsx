import style from "./buttonSearch.module.css";

export function ButtonSearch({ type, icon, onClick }) {
  return (
    <button className={style.button} onClick={onClick} type={type}>
      <img src={icon} alt="ícone" />
    </button>
  );
}
