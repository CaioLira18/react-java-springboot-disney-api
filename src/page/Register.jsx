import React, { useState, useEffect, createContext, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import Profile from "./Profile";

// URL da API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Contexto de autenticação
export const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validação do formulário
const validationRegisterFull = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Senhas não coincidem')
    .required('Campo obrigatório'),
  role: yup.string().oneOf(["0", "1"]).required("Campo obrigatório"),
  adminSecret: yup.string().when("role", {
    is: "0",
    then: () => yup.string().required("Senha secreta obrigatória para admin")
      .test("is-correct-secret", "Senha secreta incorreta", value => value === "supersecreta"),
    otherwise: () => yup.string().notRequired()
  })
});

// Componente de Registro
const Register = () => {
  const [localUser, setLocalUser] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const [error, setError] = useState();

  const authContext = useContext(AuthContext);
  const user = authContext?.user || localUser;
  const setUser = authContext?.setUser || setLocalUser;
  const loading = authContext?.loading || localLoading;
  const setLoading = authContext?.setLoading || setLocalLoading;

  const handleClickRegister = async (values) => {
    setLoading(true);
    try {
      const requestData = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role === "0" ? "ADMIN" : "USER",
        cpf: values.cpf,
        adminSecret: values.adminSecret,
      };

      if (values.role === "0") {
        requestData.adminSecret = values.adminSecret;
      }

      const response = await Axios.post(`${API_URL}/login`, requestData);

      alert("Registro realizado com sucesso!");

      if (response.status === 200) {
        const savedUser = {
          email: values.email,
          authenticated: true,
          role: values.role === "0" ? "ADMIN" : "USER"
        };

        localStorage.setItem("user", JSON.stringify(savedUser));
        setUser(savedUser);
      }

    } catch (error) {
      console.error("Erro ao registrar:", error);
      setError("Erro ao registrar usuário: " + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (!parsedUser.authenticated) {
          parsedUser.authenticated = true;
        }
        setUser(parsedUser);
      } catch (e) {
        console.error("Erro ao analisar dados do usuário:", e);
        localStorage.removeItem("user");
      }
    }
  }, [setUser]);

  if (user && user.authenticated) {
    return <Profile />;
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="cabecalho-register">
          <div className="cabecalho-icon">
            <img src='' alt="Ícone de logo" />
          </div>
          <div className="cabecalho-text-register">
            <h1>Cadastre-se!</h1>
            <p>Preencha seus dados para criar sua conta</p>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <Formik
          initialValues={{
            name: '',
            cpf: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: '1',
            adminSecret: ''
          }}
          onSubmit={handleClickRegister}
          validationSchema={validationRegisterFull}
        >
          {({ values }) => (
           <Form className="registration-form">
            <div className="form-group">
                <label htmlFor="name">
                <p>Nome Completo</p> <span className="required">*</span>
                </label>
                <Field id="name" name="name" className="form-field" />
                <ErrorMessage component="span" name="name" className="form-error" />
            </div>

            <div className="form-group">
                <label htmlFor="cpf">
                <p>CPF</p> <span className="required">*</span>
                </label>
                <Field id="cpf" name="cpf" className="form-field" />
                <ErrorMessage component="span" name="cpf" className="form-error" />
            </div>

            <div className="form-group">
                <label htmlFor="password">
                <p>Senha</p> <span className="required">*</span>
                </label>
                <Field type="password" id="password" name="password" className="form-field" />
                <ErrorMessage component="span" name="password" className="form-error" />
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">
                <p>Confirmar Senha</p> <span className="required">*</span>
                </label>
                <Field type="password" id="confirmPassword" name="confirmPassword" className="form-field" />
                <ErrorMessage component="span" name="confirmPassword" className="form-error" />
            </div>

            <div className="form-group">
                <label htmlFor="email">
                <p>E-mail</p> <span className="required">*</span>
                </label>
                <Field type="email" id="email" name="email" className="form-field" />
                <ErrorMessage component="span" name="email" className="form-error" />
            </div>

            <div className="form-group">
                <label htmlFor="role">
                <p>Tipo de Conta</p> <span className="required">*</span>
                </label>
                <Field as="select" id="role" name="role" className="form-field">
                <option value="1">Usuário</option>
                <option value="0">Administrador</option>
                </Field>
                <ErrorMessage component="span" name="role" className="form-error" />
            </div>

            {values.role === '0' && (
                <div className="form-group">
                <label htmlFor="adminSecret">
                    <p>Senha Secreta do Admin</p> <span className="required">*</span>
                </label>
                <Field
                    type="password"
                    id="adminSecret"
                    name="adminSecret"
                    className="form-field"
                    placeholder="Digite 'supersecreta'"
                />
                <small className="form-hint">Dica: A senha é 'supersecreta'</small>
                <ErrorMessage component="span" name="adminSecret" className="form-error" />
                </div>
            )}

            <button className="register-button" type="submit">
                REGISTRAR
            </button>

            {error && (
                <div className="form-error-box">
                {error}
                </div>
            )}
            </Form>

          )}
        </Formik>

        <div className="register-link">
          <a href="/Login"><p>Já tem uma Conta? <strong>Entrar</strong></p></a>
        </div>
      </div>
    </div>
  );
};

export default Register;
