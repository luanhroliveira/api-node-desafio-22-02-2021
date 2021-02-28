const Usuario = require('../models/usuarios');

module.exports = app => {
    app.get('/usuarios', (req, res) => res.send('recebendo dados usuarios(GET)'));

    app.post('/usuarios', (req, res) => {
        const usuario = req.body;
        console.log(usuario);
        Usuario.adicionar(usuario);

        res.send('Post usuário');
    });
};