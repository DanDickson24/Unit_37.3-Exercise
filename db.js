// /** Database for lunchly */

// const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

// db.connect();

// module.exports = db;


const pg = require("pg");

const db = new pg.Client({
  user: "test",
  password: "test123",
  host: "localhost",
  port: 5432,
  database: "lunchly"
});

db.connect();

module.exports = db;