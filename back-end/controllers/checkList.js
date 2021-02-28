const CheckList = require('../models/checkList');

module.exports = app => {
    app.get('/checkLists', (req, res) => {
        Nota.lista(res);
    });

    app.post('/checkLists', (req, res) => {
        const checkList = req.body;
        console.log(checkList);
        CheckList.adicionar(checkList, res);
    });

    app.patch('checkLists/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        CheckList.alterar(id, valores, res);
    });

    app.delete('checkLists/:id', (req, res) => {
        const id = parseInt(req.params.id);

        CheckList.deletar(id, res);
    });
};