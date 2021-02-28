const conexao = require('../infraestrutura/conexao');

class Nota {
    adicionar(nota) {
        const sql = 'INSERT INTO NOTA SET ?';

        conexao.query(sql, nota, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            };
        });
    };
    lista(res) {
        const sql = 'SELECT * FROM NOTA';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    buscaPorId(id, res) {
        const sql = `SELECT * FROM NOTA WHERE ID_NOTA = ${id}`;

        conexao.query(sql, (erro, resultados) => {
            const usuario = resultados[0];

            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(usuario);
            };
        });
    };

    alterar(id, valores, res) {
        const sql = 'UPDATE NOTA SET ? WHERE ID_NOTA=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    deletar(id, res) {
        const sql = 'DELETE FROM NOTA WHERE ID_NOTA = ?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(erro);
            };
        });

    }
};

module.exports = new Nota;