const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Ayaz2502", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
