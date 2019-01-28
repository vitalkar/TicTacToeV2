const { Client }  = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tictactoe',
    password: '',
    port: 5432,   
});

client.connect();

module.exports = {
    query: (text, params) => client.query(text, params)
}