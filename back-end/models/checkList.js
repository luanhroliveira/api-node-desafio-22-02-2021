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
};

module.exports = new CheckList;