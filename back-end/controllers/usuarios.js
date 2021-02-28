const Usuario = require('../models/usuarios');

module.exports = app => {

    app.get('/usuarios', (req, res) => {
        Usuario.lista(res);
    });

    app.get('/usuarios/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Usuario.buscaPorId(id, res);

    });

    app.post('/usuarios', (req, res) => {
        const usuario = req.body;
        console.log(usuario);
        Usuario.adicionar(usuario, res);
    });

    app.patch('usuarios/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Usuario.alterar(id, valores, res);
    });

    app.delete('usuarios/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Usuario.deletar(id, res);
    });
};