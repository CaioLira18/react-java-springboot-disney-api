import React, { useState, useEffect } from 'react';
import FranquiaSection from '../components/FranquiaSection.';

const Personagens = () => {
  const [todosPersonagens, setTodosPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/personagens')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar personagens');
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

  if (loading) return <div className="loading">Carregando personagens...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  const franquias = [
    {
      titulo: "Tinker Bell",
      logo: "/images/franquias/tinkerbell.png",
      fundo: "/images/fundos/tinkerbellFundo.png",
      personagens: todosPersonagens.filter(p => p.franquia === "Tinker Bell"),
    },
    {
      titulo: "Frozen",
      logo: "/images/franquias/frozen.png",
      fundo: "/images/fundos/frozen.jpg",
      personagens: todosPersonagens.filter(p => p.franquia === "Frozen"),
    },
  ];

  return (
    <div className="personagens-container">
      <div className="texts-container">
        <h1>Explore os Personagens Mágicos da Disney</h1>
        <p>Descubra mais sobre seus personagens favoritos de diferentes franquias Disney</p>
      </div>

      {franquias.map(franquia => (
        <FranquiaSection
          key={franquia.titulo}
          titulo={franquia.titulo}
          logo={franquia.logo}
          fundo={franquia.fundo}
          personagens={franquia.personagens}
        />
      ))}
    </div>
  );
};

export default Personagens;
