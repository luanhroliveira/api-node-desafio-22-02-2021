const conexao = require('../infraestrutura/conexao');

class Tag {
    adicionar(tag) {
        const sql = 'INSERT INTO TAG SET ?';

        conexao.query(sql, tag, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            };
        });
    };

    alterar(id, valores, res) {
        const sql = 'UPDATE TAG SET ? WHERE ID_TAG=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    deletar(id, res) {
        const sql = 'DELETE FROM TAG WHERE ID_TAG = ?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(erro);
            };
        });
    }
};

module.exports = new Tag;