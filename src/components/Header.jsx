import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../public/images/Disney_logo.png'

const Header = () => {

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
              try {
                  const parsedUser = JSON.parse(storedUser);
                  setUserEmail(parsedUser.email || parsedUser.login || "");
                  setIsAuthenticated(true);
                  setIsAdmin(parsedUser.role === "ADMIN");
                  console.log("Dados do usuário carregados:", parsedUser);
              } catch (error) {
                  console.error("Erro ao carregar dados do usuário:", error);
              }
          } else {
              console.log("Nenhum usuário encontrado no localStorage");
          }
      }, []);
        
  return (
        <div className="header">
        <Link to="/">
            <img src={logo} alt="Logo Disney" />
        </Link>
          <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="">Personagens</a></li>
              {!isAuthenticated && (
                    <>
                      <li><a href="/login">Faça Login</a></li>
                    </>
                )}
                  {isAuthenticated && (
                    <>
                      <li><a href="/Profile">Perfil</a></li>
                      <li><a href="/Chat">Chat</a></li>
                      <li><a href="">{userEmail.split('@')[0]}</a></li>
                      
                    </>
                )}
          </ul>
</div>
  )
}

export default Header
