const personagem = [
  {
    id: 1,
    nome: 'Dracula',
    level: '98',
    HP: '600/1,200',
    descricao: 'Lord of Wallachia. Father of Alucard.',
    img: 'https://static.wikia.nocookie.net/castlevania/images/8/8b/Sotn-predrac.gif/revision/latest/scale-to-width-down/40?cb=20170723015101',
  },
  {
    id: 2,
    nome: 'Blood Skeleton',
    level: '0',
    HP: '9',
    descricao: 'Revives due to blood soaked bones',
    img: 'https://static.wikia.nocookie.net/castlevania/images/d/d9/Sotn-bloodskel-1-.gif/revision/latest/scale-to-width-down/40?cb=20170723014916',
  },
  {
    id: 3,
    nome: 'Bat',
    level: '1',
    HP: '1',
    descricao: 'Vampires bats. Feared as servents of evil.',
    img: 'https://static.wikia.nocookie.net/castlevania/images/e/ea/Sotn-bat-1-.gif/revision/latest?cb=20170723014915',
  },
];

const findAllPersonagem = () => {
  return personagem;
};

const findByIdPersonagem = (parametroId) => {
  return personagem.find((personagem) => personagem.id === parametroId);
};

const createPersonagem = (novoPersonagem) => {
  const novoId = personagem.length + 1;
  novoPersonagem.id = novoId;
  personagem.push(novoPersonagem);
  return novoPersonagem;
};

const updatePersonagem = (personagemId, editar) => {
  editar['id'] = personagemId;
  const personagemIndex = personagem.findIndex(
    (personagem) => personagem.id == personagemId,
  );
  personagem[personagemIndex] = editar;
  return editar;
};

const deletePersonagem = (personagemId) => {
  const personagemIndex = personagem.findIndex((personagem)=> personagem.id == personagemId);
  return personagem.splice(personagemIndex, 1);

};

module.exports = {
  findAllPersonagem,
  findByIdPersonagem,
  createPersonagem,
  updatePersonagem,
  deletePersonagem
};
