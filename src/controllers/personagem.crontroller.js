const personagemService = require('../services/personagem.service');

const findAllPersonagem = (req, res) => {
  const personagem = personagemService.findAllPersonagem();
  res.send(personagem);
};

const findByIdPersonagem = (req, res) => {
  const personagemId = Number(req.params.id);
  const escolhaP = personagemService.findByIdPersonagem(personagemId);
  res.send(escolhaP);
};

const createPersonagem = (req, res) =>{
   const personagem = req.body;
   const novoPersonagem = personagemService.createPersonagem(personagem);
   res.send(novoPersonagem);
  
};
const deletePersonagem = (req, res) =>{
  const personagemId = req.params.id;
  personagemService.deletePersonagem(personagemId);
  res.send({message : 'Personagem excluido com êxito!'})

  
};
const updatePersonagem = (req, res) =>{
  const personagemId = Number(req.params.id);
  const editar = req.body; 
  const atualizarPersonagem = personagemService.updatePersonagem(personagemId, editar );
  res.send(atualizarPersonagem);
};


module.exports = {
 findAllPersonagem,
 findByIdPersonagem,
 createPersonagem,
 deletePersonagem,
 updatePersonagem

};
