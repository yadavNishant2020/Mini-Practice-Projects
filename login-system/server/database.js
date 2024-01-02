const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "nsy123",
  host: "localhost",
  port: 5432,
  database: "login_system",
});

// const createQry  = `CREATE TABLE account ( user_id INT NOT NULL, username VARCHAR (50) UNIQUE NOT NULL , password VARCHAR (50) UNIQUE NOT NULL);`

// pool.query(createQry).then((response) => {
//   console.log("Table created!");
//   console.log(response);
// }).catch((err) => {
// console.log(err);
// })

module.exports = pool;
