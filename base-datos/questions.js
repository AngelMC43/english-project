const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");

app.use(express.json());

let connection;

function conectar() {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "polodigital",
    database: "project",
  });

  connection.connect(function (err) {
    if (err) {
      return console.error("error:" + err.message);
    }
    console.log("connected to the MySQL server.");
  });
}

function desconectar() {
  connection.end(function (err) {
    if (err) {
      return console.error("Error:" + err.message);
    }

    console.log("Desconectado!");
  });
}

////////////////////////////////////////////////
app.get("/allquestions", function (request, response) {
  conectar();
  connection.query(`SELECT type from vocabulary`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
  });
  desconectar();
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
