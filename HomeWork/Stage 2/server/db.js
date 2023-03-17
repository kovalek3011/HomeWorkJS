const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "9195",
  host: "localhost",
  port: 5432,
  database: "kinopoiskSQL",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
