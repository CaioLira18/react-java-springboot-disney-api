import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import Profile from "./Profile";
// import { AuthContext } from "./AuthContext"; // Descomente se for usar

const API_URL = "http://localhost:8080";

const decodeJwtPayload = (token) => {
  // Implementar depois
};

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Lógica para recuperar usuário do localStorage
  }, []);

  const handleClickLogin = async (values) => {
    // Implementar lógica de login
  };

  const validationLogin = yup.object().shape({
    // Adicionar regras depois
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
          initialValues={{ email: "", password: "", role: "" }}
          validationSchema={validationLogin}
          onSubmit={handleClickLogin}
        >
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

            <div className="login-form-group">
              <p>Função *</p>
              <Field name="role" className="form-field" />
              <ErrorMessage component="span" name="role" className="form-error" />
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
              <span>ou</span>
            </div>
          </Form>
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
