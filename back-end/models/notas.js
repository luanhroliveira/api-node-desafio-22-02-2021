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
};

module.exports = new Nota;