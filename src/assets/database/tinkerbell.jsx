import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/shuffle";
import tinkerBellImg from '../../../public/images/personagens/tinkerbell/tinkerBell.png';
import silvermistImg from '../../../public/images/personagens/tinkerbell/silvermist.jpg';

const imageMap = {
  "Tinker Bell": tinkerBellImg,
  "Silvermist": silvermistImg
};

export default function TinkerBellList() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/personagens")
      .then((res) => res.json())
      .then((data) => {
        // Adiciona as imagens correspondentes
        const personagensComImagens = data.map(p => ({
          ...p,
          image: imageMap[p.name] || null // ou uma imagem padrão
        }));

        shuffleArray(personagensComImagens);
        setPersonagens(personagensComImagens);
      })
      .catch((err) => console.error("Erro ao buscar personagens:", err));
  }, []);

  return (
    <div>
      {personagens.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.descricao}</p>
        </div>
      ))}
    </div>
  );
}
