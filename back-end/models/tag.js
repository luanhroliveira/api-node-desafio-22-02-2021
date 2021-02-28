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
};

module.exports = new Tag;