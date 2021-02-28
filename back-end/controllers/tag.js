const Tag = require('../models/tag');

module.exports = app => {
    app.get('/tag', (req, res) => res.send('recebendo dados tag(GET)'));

    app.post('/tag', (req, res) => {
        const tag = req.body;
        console.log(tag);
        Tag.adicionar(tag);

        res.send('Post tag');
    });
};