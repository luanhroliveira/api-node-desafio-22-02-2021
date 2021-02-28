const Nota = require('../models/notas');

module.exports = app => {
    app.get('/notas', (req, res) => {
        Nota.lista(res);
    });

    app.get('/notas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Nota.buscaPorId(id, res);
    });

    app.post('/notas', (req, res) => {
        const nota = req.body;
        console.log(nota);
        Nota.adicionar(nota, res);
    });

    app.patch('notas/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Nota.alterar(id, valores, res);
    });

    app.delete('notas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Nota.deletar(id, res);
    });
};