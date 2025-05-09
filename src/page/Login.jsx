import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import Profile from "./Profile";
// import { AuthContext } from "./AuthContext"; // Descomente se for usar

const API_URL = "http://localhost:8080";

const Login = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({ ...parsedUser, authenticated: true });
      } catch (error) {
        console.error("Erro ao fazer parse do usuário:", error);
        // Limpar o localStorage se estiver corrompido
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleClickLogin = async (values) => {
    setLoading(true);
    setError("");

    try {
      const response = await Axios.post("http://localhost:8080/login/auth", {
        email: values.email,
        password: values.password,
      });

      const {user: userData } = response.data;

      if (userData) {
       
        localStorage.setItem("user", JSON.stringify(userData));

        // Atualizar o estado
        setUser({ ...userData, authenticated: true });
      } else {
        throw new Error("Dados de usuário incompletos");
      }
    } catch (err) {
      console.error("Erro de login:", err);
      setError("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "Mínimo de 6 caracteres").required("Campo obrigatório"),
  });

  if (user && user.authenticated) {
    return <Profile />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="cabecalho-login">
          <div className="cabecalho-text">
            <h1>Seja Bem-Vindo!</h1>
            <p>Preencha seus dados para acessar a plataforma</p>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <Formik
          initialValues={{ email: "", password: "", role: "user" }} 
          validationSchema={validationLogin}
          onSubmit={handleClickLogin}
        >
          {({ errors, touched }) => (
            <Form className="login-form">
              <div className="login-form-group">
                <p>E-mail *</p>
                <Field name="email" className="form-field" />
                <ErrorMessage component="span" name="email" className="form-error" />
              </div>

              <div className="login-form-group">
                <p>Senha *</p>
                <Field type="password" name="password" className="form-field" />
                <ErrorMessage component="span" name="password" className="form-error" />
              </div>

              <div className="options-login">
                <label>
                  <input type="checkbox" name="remember" />
                  Lembre de mim
                </label>
                <a href="/EsqueceuSenha">
                  <p>Esqueceu a senha?</p>
                </a>
              </div>

              <button className="register-button" type="submit" disabled={loading}>
                {loading ? "Carregando..." : "LOGIN"}
              </button>

              <div className="divider">
                <span> ou </span>
              </div>
            </Form>
          )}
        </Formik>

        <div className="google">
          <button className="google-button">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              style={{ width: "20px", marginRight: "38px" }}
            />
            Entre com Google
          </button>
        </div>

        <div className="register-link">
          <a href="/Register">
            <p>
              Não tem conta ainda? <strong>Registre-se</strong>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;