class Tables {
    init(conexao) {
        this.conexao = conexao;
        console.log('Tabelas chamadas');

        this.criarUsuario();
        this.criarNota();
        this.criarTag();
        this.criarCheckList();
    };

    criarUsuario() {

        const sql = 'CREATE TABLE IF NOT EXISTS USUARIO (ID_USUARIO BIGSERIAL NOT NULL PRIMARY KEY, DS_NOME VARCHAR(200) NOT NULL, DS_EMAIL VARCHAR(200) NOT NULL, DS_SENHA VARCHAR(300) NOT NULL, AVATAR TEXT)'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela de USUARIO criada com sucesso!');
            };
        });
    };

    criarNota() {

        const sql = 'CREATE TABLE IF NOT EXISTS NOTA (ID_NOTA BIGSERIAL NOT NULL PRIMARY KEY, ID_USUARIO INT NOT NULL, DS_TITULO VARCHAR(100), DS_DESCRICAO TEXT, DH_CRIADO DATE NOT NULL, DH_ATUALIZADO DATE, FOREIGN KEY(ID_USUARIO) REFERENCES USUARIO (ID_USUARIO))';
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela de NOTA criada com sucesso!');
            };
        });
    };

    criarTag() {

        const sql = 'CREATE TABLE IF NOT EXISTS TAG (ID_TAG BIGSERIAL NOT NULL PRIMARY KEY, ID_NOTA INT NOT NULL, DS_NOME VARCHAR(50) NOT NULL, FOREIGN KEY(ID_NOTA) REFERENCES NOTA (ID_NOTA))';
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela de TAG criada com sucesso!');
            };
        });
    };

    criarCheckList() {

        const sql = 'CREATE TABLE IF NOT EXISTS CHECKLIST (ID_CHECKLIST BIGSERIAL NOT NULL PRIMARY KEY, ID_NOTA INT NOT NULL, DS_DESCRICAO TEXT NOT NULL, TP_CONCLUIDA BIT NOT NULL, FOREIGN KEY(ID_NOTA) REFERENCES NOTA (ID_NOTA))';
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela de CHECKLIST criada com sucesso!');
            };
        });
    };
};

module.exports = new Tables;