require('dotenv').config()
const dbx = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.HOST,
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
});


module.exports = dbx