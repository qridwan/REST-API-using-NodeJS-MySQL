const { createPool } = require("mysql");
/** Connection pool creation - START */

const db = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "your_new_password",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;