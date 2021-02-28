const pg = require('pg');

const conexao = new pg.Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password:'71XDZV',
    database: 'api-node'
});

module.exports = conexao;