import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import background from '../../public/images/fundos/tinkerbellFundo.png';


const Personagem = () => {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/personagens/${id}`)
      .then(res => res.json())
      .then(data => {
        setPersonagem(data);
      })
      .catch(err => console.error("Erro ao buscar personagem:", err));
  }, [id]);

  // Enquanto personagem não for carregado, mostrar "carregando"
  if (!personagem) {
    return <p>Carregando personagem...</p>;
  }

  return (
    <div>
      <div className="background-container">
        <img src={background} alt="fundo" />
      </div>
      <div className="container">
        <div className="box-personagens">
          <div className="personagens-images">
            <img src={personagem.image || personagem.descricao} alt={personagem.name} />
          </div>
          <div className="informacoes">
            <h1>{personagem.name}</h1>
            <p>Franquia: {personagem.franquia}</p>
            <p>Habilidades: {personagem.habilidades || "Não especificado"}</p>
            <p>Primeira Aparição: {personagem.primeira_aparicao || "Não especificado"}</p>
            <p>Descrição: {typeof personagem.descricao === 'string' ? personagem.descricao : "Descrição não disponível"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personagem;
