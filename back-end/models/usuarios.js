const conexao = require('../infraestrutura/conexao');

class Usuario {
    adicionar(usuario) {
        const sql = 'INSERT INTO USUARIO SET ?';

        conexao.query(sql, usuario, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            };
        });
    };
};

module.exports = new Usuario;