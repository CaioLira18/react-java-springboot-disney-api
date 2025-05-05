import { shuffleArray } from "../../utils/shuffle";
import tinkerBell from '../../images/personagens/tinkerbell/tinkerBell.png'
import silvermist from '../../images/personagens/tinkerbell/silvermist.jpg'


export const tinkerbell = [
  {
    id: 1,
    image: silvermist, 
    name: "Silvermist",
    habilidades: "Controle da água, voo",
    franquia: "Tinker Bell",
    primeira_aparicao: "Tinker Bell (2009)",
    descricao: "Silvermist é uma fada da água com personalidade serena e tranquila. Ela tem poderes de manipular a água e é conhecida por sua gentileza e sabedoria. Junto com Tinker Bell e suas amigas, ela vive em Pixie Hollow e ajuda a trazer as estações para o continente."
  },
 
  {
    id: 2,
    image: tinkerBell,
    name: "Tinker Bell",
    habilidades: "Conserto de objetos, inventora, voo",
    franquia: "Tinker Bell",
    primeira_aparicao: "Peter Pan (1953)",
    descricao: "Tinker Bell é uma fada artesã muito curiosa e talentosa. Ela tem a habilidade de consertar objetos e criar novas invenções. Conhecida por seu temperamento forte e lealdade aos amigos, Tinker Bell é a protagonista da franquia."
  }
];

export const charactersIndexedById = tinkerbell.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

export const charactersIndexedByName = tinkerbell.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

// Shuffle the array for random display
shuffleArray(tinkerbell);