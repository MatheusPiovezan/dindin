import * as L from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import schemaLogin from "../../schemas/schemaLogin";
import success from "../../messages/success";
import { setItem } from "../../utils/storage";
import Logo from "../../assets/Logo.svg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await schemaLogin.validate({ email, password });

      const response = await api.post("/login", {
        email,
        password,
      });

      setItem("token", response.data.token.token);
      setItem("userId", response.data.id);
      toast.success(success.usersLoggedInSuccessfully);      
      navigate("home");
    } catch (err) {
      toast.error(err.response.data);
    }
  }
  return (
    <L.Container>
      <div className="logo-img">
        <img src={Logo} alt=""/>
      </div>
      <div className="container-row">
        <div className="registration">
          <h1>
            Controle suas <span>finanças</span>, sem planilha chata.
          </h1>
          <p>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <Link className="link" to="/signup">
            Cadastre-se
          </Link>
        </div>
        <div className="form-login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Entrar</button>
          </form>
          <Link className="link-mobile" to="/signup">
            Não tem cadastro? Clique aqui!
          </Link>
        </div>
      </div>
    </L.Container>
  );
}

export default Login;
