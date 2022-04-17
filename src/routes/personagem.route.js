const route = require('express').Router();
const controllerPersonagem = require('../controllers/personagem.crontroller')


route.get('/todas-personagem', controllerPersonagem.findAllPersonagem);
route.get('/:id', controllerPersonagem.findByIdPersonagem);
route.delete('/delete/:id',controllerPersonagem.deletePersonagem);
route.put('/update/:id', controllerPersonagem.updatePersonagem);
route.post('/create', controllerPersonagem.createPersonagem);


module.exports = route;
