import {React, useState, useEffect} from 'react'

const Box = () => {
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
    <div className="container-box">
      <div className="box">
        <div className="title">
          <h1>Bem Vindo ao Mundo Magico da Disney</h1>
          <p>Explore Todos os Universos da Disney</p>
          <div className="button-disney">
            <button className="disney-button">Explore as Franquias</button>
            {!isAuthenticated && (
              <>
                <button className="disney-button">Entre com uma Conta</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box