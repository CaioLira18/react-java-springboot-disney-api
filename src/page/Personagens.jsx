import React, { useState, useEffect } from 'react';

const Personagens = () => {
  const [todosPersonagens, setTodosPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Buscar todos os personagens
    fetch('http://localhost:8080/personagens')
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar personagens');
        }
        return res.json();
      })
      .then(data => {
        setTodosPersonagens(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar personagens:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const PersonagemCard = ({ personagem }) => {
    return (
      <div className="personagem-card">
        <a href="/personagem/${personagem.Id`}"><img 
          src={personagem.image} 
          alt={personagem.name} 
          className="personagem-imagem"
        /></a>
        <h3 className="personagem-nome">{personagem.name}</h3>
      </div>
    );
  };

  if (loading) {
    return <div className="loading">Carregando personagens...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  // Filtrar personagens por franquia
  const personagensTinkerBell = todosPersonagens.filter(
    personagem => personagem.franquia === "Tinker Bell"
  );
  
  const personagensFrozen = todosPersonagens.filter(
    personagem => personagem.franquia === "Frozen"
  );

  return (
    <div className="personagens-container">
      <div className="texts-container">
        <h1>Explore os Personagens Mágicos da Disney</h1>
        <p>Descubra mais sobre seus personagens favoritos de diferentes franquias Disney</p>
      </div>

      {/* Franquia Tinker Bell */}
      <div className="franquia-section">
        <div className="franquia-header">
          <img src="./public/images/franquias/tinkerbell.png" alt="Franquia Tinker Bell" className="franquia-logo" />
        </div>
         <div className="texts-franquia">
            <h2>Personagens de Tinker Bell</h2>
          </div>
        
        {personagensTinkerBell.length === 0 ? (
          <p>Nenhum personagem encontrado para esta franquia.</p>
        ) : (
          <div className="personagens-grid">
            {personagensTinkerBell.map(personagem => (
              <PersonagemCard key={personagem.Id} personagem={personagem} />
            ))}
          </div>
        )}
      </div>

      {/* Franquia Frozen */}
      <div className="franquia-section">
        <div className="franquia-header">
          <img src="./public/images/franquias/frozen.png" alt="Franquia Frozen" className="franquia-logo" />
          <h2>Personagens de Frozen</h2>
        </div>
        
        {personagensFrozen.length === 0 ? (
          <p>Nenhum personagem encontrado para esta franquia.</p>
        ) : (
          <div className="personagens-grid">
            {personagensFrozen.map(personagem => (
              <PersonagemCard key={personagem.Id} personagem={personagem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Personagens;