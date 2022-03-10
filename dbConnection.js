const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "lifechoices",
  password: "@Lifechoices1234",
  database: "hotel-api",
});

module.exports = con; 
