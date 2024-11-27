const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Ayaz2502", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

async function createTable() {
  const client = await pool.connect();
  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS tasks (
            task_id SERIAL PRIMARY KEY,
            description TEXT NOT NULL,
            status TEXT NOT NULL
        );
        `);
    console.log("Table created successfully.");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    client.release();
  }
}

module.exports = pool;
