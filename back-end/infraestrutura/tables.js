class Tables {
    init(conexao) {
        this.conexao = conexao;
        console.log('Tabelas chamadas');

        this.criarUsuarios();
    };

    criarUsuarios() {

        const sql = 'CREATE TABLE IF NOT EXISTS USUARIO (ID_USUARIO INT NOT NULL PRIMARY KEY, DS_NOME VARCHAR(200) NOT NULL, DS_EMAIL VARCHAR(200) NOT NULL, DS_SENHA VARCHAR(300) NOT NULL, AVATAR TEXT)'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela de usuários criada com sucesso!');
            };
        });
    };

};

module.exports = new Tables;