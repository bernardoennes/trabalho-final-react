import { useState } from "react";
import { Lock, Mail, User, LogOut } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"
import './login.css';

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [logado, setLogado] = useState(false);
  const [loading, setLoading] = useState(false);

  function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      setLoading(false);
      return;
    }
    if (!validarEmail(email)) {
      setErro("E-mail inválido.");
      setLoading(false);
      return;
    }
    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: email,
        password: senha
      });

      const token = response.headers['authorization'] || response.headers['Authorization'];

      if (token) {
        localStorage.setItem("token", token);

        const clientesResp = await axios.get("http://localhost:8080/clientes", {
          headers: { Authorization: token }
        });

        const cliente = clientesResp.data.find(c => c.email === email);
        if (cliente) {
          localStorage.setItem("nome", cliente.nome);
          localStorage.setItem("email", cliente.email);
          localStorage.setItem("telefone", cliente.telefone);
          localStorage.setItem("cep", cliente.cep);
          localStorage.setItem("cpf", cliente.cpf);
        }

        setErro("");
        setLogado(true);
      } else {
        setErro("Token não recebido. Verifique o backend.");
      }
    } catch (err) {
      setErro("Usuário ou senha inválidos.");
    }

    setLoading(false);
  }

  function handleLogout() {
    setEmail("");
    setSenha("");
    setErro("");
    setLogado(false);
  }

  if (logado) {
    return (
      <div className="login-container">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <div className="icon-container success-icon">
              { <User className="icon" /> }
            </div>
            <h1 className="dashboard-title">Bem-vindo ao Canto do corvo!</h1>
            <p className="dashboard-subtitle">Acesso autorizado com sucesso</p>
          </div>

          <div className="user-info">
            <p className="user-label">Usuário autenticado:</p>
            <p className="user-email">{email}</p>
          </div>

          <button onClick={() => (window.location.href = "/")} className="logout-btn">
            <LogOut className="btn-icon" />
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-container primary-icon">
          </div>
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">
            "Aqui repousam livros que ousam tocar a alma — este é o Canto do Corvo."
          </p>
        </div>

        <div className="form-container">
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {erro && (
            <div className="error-container">
              <p className="error-message">{erro}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`login-btn ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </div>

        <div className="form-footer">
          <p className="footer-text">
            Use qualquer e-mail válido e senha com 6 ou + caracteres
          </p>
          <p className="footer-text">
            O Corvo chama por novos leitores... responda ao chamado{" "}
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}