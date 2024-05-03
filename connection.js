const mysql = require("mysql2");
var mysqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Employee",
});

var connection = mysqlconnection.connect((err) => {
  if (err) {
    console.log("Error in DB Connection" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("Connection succesfull");
  }
});

module.exports = mysqlconnection;
