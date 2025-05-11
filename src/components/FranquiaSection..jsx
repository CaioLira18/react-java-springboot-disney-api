// components/FranquiaSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FranquiaSection = ({ titulo, logo, fundo, personagens }) => {
  const PersonagemCard = ({ personagem }) => (
    <div className="personagem-card" style={{ cursor: 'pointer' }}>
      <Link to={`/personagens/${personagem.franquia.toLowerCase()}/${personagem._id}`}>
        <img src={personagem.image} alt={personagem.name} className="personagem-imagem" />
      </Link>
      <h3 className="personagem-nome">{personagem.name}</h3>
    </div>
  );

  return (
    <div className="franquia-section">
      <div
        className="background"
        style={{ backgroundImage: `url(${fundo})` }}
      ></div>

      <div className="franquia-header">
        <img src={logo} alt={`Franquia ${titulo}`} className="franquia-logo" />
        <h2>Personagens de {titulo}</h2>
      </div>

      {personagens.length === 0 ? (
        <p>Nenhum personagem encontrado para esta franquia.</p>
      ) : (
        <div className="personagens-grid">
          {personagens.map(personagem => (
            <PersonagemCard key={personagem._id} personagem={personagem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FranquiaSection;
