import React from "react";
import { Link, useParams } from "react-router-dom";
import { tinkerbell } from "../assets/database/tinkerbell"; // Updated import to match your data file
import background from '../images/fundos/tinkerbellFundo.png'; // Add your background image path here

const Personagens = () => {
    const { id, franquia } = useParams(); 
    const personagem = tinkerbell.find(personagem => personagem.id === Number(id)); // Find character by ID

    if (!personagem) {
      <Link to={'*'}></Link>
    }

    return (
        <div>
          <div className="background-container">
            <img src={ background } alt="fundo" />
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

export default Personagens;