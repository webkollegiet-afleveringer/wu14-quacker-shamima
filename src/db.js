const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:DIT_PASSWORD@localhost:5432/Quacker",
});

module.exports = pool;