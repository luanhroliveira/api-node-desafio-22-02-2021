const { query } = require('../infraestrutura/conexao');
const conexao = require('../infraestrutura/conexao');

class Usuario {
    adicionar(usuario, res) {
        const sql = 'INSERT INTO Usuario SET ?';

        conexao.query(sql, usuario, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(resultados);
            };
        });
    };

    lista(res) {
        const sql = 'SELECT * FROM USUARIO';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    buscaPorId(id, res) {
        const sql = `SELECT * FROM USUARIO WHERE ID_USUARIO = ${id}`;

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
        const sql = 'UPDATE USUARIO SET ? WHERE ID_USUARIO=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    deletar(id, res) {
        const sql = 'DELETE FROM USUARIO WHERE ID_USUARIO = ?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(erro);
            };
        });

    }
};

module.exports = new Usuario;