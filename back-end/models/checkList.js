const conexao = require('../infraestrutura/conexao');

class CheckList {
    adicionar(checkList) {
        const sql = 'INSERT INTO CHECKLIST SET ?';

        conexao.query(sql, checkList, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            };
        });
    };

    lista(res) {
        const sql = 'SELECT * FROM CHECKLIST';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    alterar(id, valores, res) {
        const sql = 'UPDATE CHECKLIST SET ? WHERE ID_CHECKLIST=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            };
        });
    };

    deletar(id, res) {
        const sql = 'DELETE FROM CHECKLIST WHERE ID_CHECKLIST = ?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(erro);
            };
        });
    }
};

module.exports = new CheckList;