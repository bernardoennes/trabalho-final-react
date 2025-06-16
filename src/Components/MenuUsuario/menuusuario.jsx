import styles from "./menuusuario.module.css";
import { useNavigate } from "react-router-dom";

export function MenuUsuario() {
  const navigate = useNavigate();
  const isLogado = !!localStorage.getItem("token");

  function verifLogin() {
    if (isLogado) {
      navigate("/perfil");
    } else {
      navigate("/login");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("telefone");
    localStorage.removeItem("cep");
    localStorage.removeItem("cpf");
    navigate("/login");
  }

  return (
    <div className={styles.menuDeUsuario}>
      <img
        src="https://i.postimg.cc/3xFL6Xcs/0Perfil.png"
        alt="Foto de Perfil"
        className={styles.avatar}
      />
      <div className={styles.suspenso}>
        <ul>
          <li onClick={verifLogin}>{isLogado ? "Perfil" : "Logar"}</li>
          <li onClick={() => navigate("/pedidos")}>Meus Pedidos</li>
          <li onClick={() => navigate("/favoritos")}>Favoritos</li>
          <li onClick={() => navigate("/configuracoes")}>Configurações</li>
          {isLogado && <li onClick={handleLogout}>Sair</li>}
        </ul>
      </div>
    </div>
  );
}
