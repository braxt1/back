require("dotenv").config();
const db = require("knex")({
  client: "pg",
  connection: {
    host: '',
    user: 'crypwbbt_root',
    password: 'Notreally$',
    database: 'crypwbbt_azcrypt',
    port: 5432
  },
})

const b = async () => {
  const a = await db("users")
  console.log({ a });
}

b()
module.exports = db;
