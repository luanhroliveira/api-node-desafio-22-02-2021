const Tag = require('../models/tag');

module.exports = app => {
    app.get('/tags', (req, res) => {
        Tag.lista(res);
    });

    app.post('/tags', (req, res) => {
        const tag = req.body;
        console.log(tag);
        Tag.adicionar(tag, res);
    });

    app.patch('tags/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Tag.alterar(id, valores, res);
    });

    app.delete('tags/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Tag.deletar(id, res);
    });
};