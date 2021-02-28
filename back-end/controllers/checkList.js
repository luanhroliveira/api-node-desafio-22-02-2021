const CheckList = require('../models/checkList');

module.exports = app => {
    app.get('/checkLists', (req, res) => res.send('recebendo dados checkList(GET)'));

    app.post('/checkLists', (req, res) => {
        const checkList = req.body;
        console.log(checkList);
        CheckList.adicionar(checkList);

        res.send('Post checkList');
    });
};