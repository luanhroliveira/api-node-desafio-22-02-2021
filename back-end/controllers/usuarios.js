module.exports = app => {
    app.get('/usuarios', (req, res) => res.send('recebendo dados usuarios(GET)'));

    app.post('/usuarios', (req, res) => {
        console.log(req.body);
        res.send('Enviando dados usuario(POST)');
    });
}