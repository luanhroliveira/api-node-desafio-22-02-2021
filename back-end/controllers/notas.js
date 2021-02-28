const Nota = require('../models/notas');

module.exports = app => {
    app.get('/notas', (req, res) => res.send('recebendo dados Notas(GET)'));

    app.post('/notas', (req, res) => {
        const nota = req.body;
        console.log(nota);
        Nota.adicionar(nota);

        res.send('Post nota');
    });
};