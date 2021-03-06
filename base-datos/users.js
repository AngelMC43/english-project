const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

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

//------------------------------SIGN UP-----------------------------------

app.post("/signup", function (request, response) {
  console.log(request.body);
  conectar();

  let name = request.body.name;
  let surname = request.body.surname;
  let age = request.body.age;
  let email = request.body.email;
  let password = request.body.password;
  let avatar = request.body.avatar;

  connection.query(
    `INSERT into users (name, surname, age, email, password, avatar) values ("${name}","${surname}", "${age}", "${email}","${password}", "${avatar}")`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//---------------LOGIN-------------------------------------------------------------

app.post("/login", function (request, response) {
  console.log(request.body);
  conectar();

  let email = request.body.email;
  let password = request.body.password;

  connection.query(
    `SELECT * from users Where email like "${email}" AND password like "${password}"`,
    function (err, rows, fields) {
      if (err) throw err;
      if (rows.length == 0) {
        response.send({ error: "Usuario no encontardo hulio" });
      } else {
        response.json({
          name: rows[0].name,
          surname: rows[0].surname,
          age: rows[0].age,
          email: rows[0].email,
          id: rows[0].id,
          avatar: rows[0].avatar,
        });
        console.log("conexion perfecta");
      }
    }
  );

  desconectar();
});

//-----------------------UPLOAD USER----------------------------------

app.put("/upload/:id", (request, response) => {
  conectar();
  let myBody = request.body;
  let name = myBody.name;
  let surname = myBody.surname;
  let age = myBody.age;
  let id = myBody.id;

  connection.query(
    `UPDATE users SET name="${name}", surname="${surname}", age=${age} WHERE id = ${id}`,
    // `UPDATE users SET name='${name}', surname='${surname}', age=${age}, WHERE id = ${id}`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//--------------------------DELETE USER-----------------------------------

app.delete("/delete/:id", function (request, response) {
  conectar();
  console.log(request.params);
  let id = request.params.id;

  connection.query(
    `DELETE from users WHERE id = "${id}"`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------ALL RANKING SCORE------------------------------
app.get("/showscore/uno", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM punctuation JOIN users ORDER BY score DESC`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

// //------------------------SCORE ID------------------------------
// app.get("/showscore/my-score", function (request, response) {
//   conectar();
//   let id = request.body.id;

//   connection.query(
//     `    SELECT name, surname, level, type, score FROM users u JOIN punctuation p ON u.id = p.idUser WHERE id= "${id}" limit 10

//     `,
//     function (err, rows, fields) {
//       if (err) throw err;
//       response.json(rows);
//     }
//   );
//   desconectar();
// });

//------------------------SCORE INTERMEDIATE VOCABULARIO------------------------------
app.get("/showscore/intermediate-vocabulary", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="Intermediate" AND p.type="vocabulary" ORDER BY score DESC limit 5
    `,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE INTERMEDIATE GRAMMAR------------------------------
app.get("/showscore/intermediate-grammar", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="intermediate" AND p.type="grammar" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE INTERMEDIATE VERBS------------------------------
app.get("/showscore/intermediate-verbs", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="intermediate" AND p.type="verbs" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE INTERMEDIATE MATCH------------------------------
app.get("/showscore/intermediate-match", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="intermediate" AND p.type="can you find?" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE ADVANCED VOCABULARY------------------------------
app.get("/showscore/advanced-vocabulary", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="advanced" AND p.type="vocabulary" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE ADVANCED GRAMMAR------------------------------
app.get("/showscore/advanced-grammar", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="advanced" AND p.type="grammar" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE ADVANCED VERBS------------------------------
app.get("/showscore/advanced-verbs", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="advanced" AND p.type="phrasal verbs" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//------------------------SCORE ADVANCED MATCH------------------------------
app.get("/showscore/advanced-match", function (request, response) {
  conectar();
  connection.query(
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="advanced" AND p.type="guess what" ORDER BY score DESC limit 5`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//-----------------------SCORE BY ID------------------------
app.get("/my-score/:id", function (request, response) {
  conectar();
  let id = request.params.id;

  connection.query(
    // `SELECT name, surname from users WHERE id= "${id}"`,
    `SELECT * FROM users u JOIN punctuation p ON u.id = p.idUser WHERE p.level="advanced" AND p.type="guess what" ORDER BY score DESC limit 5`,

    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

//--------------------------SEND SCORE--------------------------

app.post("/score", function (request, response) {
  console.log(request.body);
  conectar();

  let idUser = request.body.idUser;
  let level = request.body.level;
  let type = request.body.type;
  let score = request.body.score;

  connection.query(
    `INSERT into punctuation (idUser, level, type, score) values (${idUser}, "${level}", "${type}", ${score})`,
    function (err, rows, fields) {
      if (err) throw err;
      response.json(rows);
    }
  );
  desconectar();
});

/////////////////////////////////////////////////////////////
//---------------------------ALL USERS-----------------------

app.get("/allusers", function (request, response) {
  conectar();
  connection.query(`SELECT * from users`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
    console.log(rows);
  });
  desconectar();
});

//--------------------PROFILE ID---------------------------

app.get("/profile/:id", function (request, response) {
  conectar();

  let id = request.params.id;
  console.log(request.params);
  connection.query(
    `SELECT * from users WHERE id = "${id}"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(id);
    }
  );
  desconectar();
});

//---------------------ALL QUESTIONS-------------------------

app.get("/allquestions", function (request, response) {
  conectar();

  connection.query(`SELECT * from vocabulary`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
    console.log(rows);
  });
  desconectar();
});

//------------------------BASIC----------------------

app.get("/games/basic", function (request, response) {
  conectar();

  connection.query(`SELECT * FROM basic`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
    console.log(rows);
  });
  desconectar();
});

//------------------------BASIC VOCABULARY----------------------

app.get("/games/basic/vocabulary", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM basic WHERE type = "vocabulary"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------BASIC GRAMMAR----------------------

app.get("/games/basic/grammar", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM basic WHERE type = "grammar"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------BASIC MATCH----------------------

app.get("/games/basic/match", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM basic WHERE type = "match"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------BASIC CHOOSE----------------------

app.get("/games/basic/choose", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM basic WHERE type = "choose"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------INTERMEDIATE----------------------

app.get("/games/intermediate", function (request, response) {
  conectar();

  connection.query(`SELECT * FROM intermediate`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
    console.log(rows);
  });
  desconectar();
});

//------------------------INTERMEDIATE VOCABULARY----------------------

app.get("/games/intermediate/vocabulary", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM intermediate WHERE type = "vocabulary"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------INTERMEDIATE GRAMATICA----------------------

app.get("/games/intermediate/grammar", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM intermediate WHERE type = "grammar"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------INTERMEDIATE VERBS----------------------

app.get("/games/intermediate/verbs", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM intermediate WHERE type = "verbs"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------INTERMEDIATE MATCH----------------------

app.get("/games/intermediate/match", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM intermediate WHERE type = "match"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------ADVANCED----------------------

app.get("/games/advanced", function (request, response) {
  conectar();

  connection.query(`SELECT * from advanced`, function (err, rows, fields) {
    if (err) throw err;

    response.json(rows);
    console.log(rows);
  });
  desconectar();
});

//------------------------ADVANCED VOCABULARY----------------------

app.get("/games/advanced/vocabulary", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM advanced WHERE type = "vocabulary"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------ADVANCED GRAMMAR----------------------

app.get("/games/advanced/grammar", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM advanced WHERE type = "grammar"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------ADVANCED VERBS----------------------

app.get("/games/advanced/verbs", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM advanced WHERE type = "verbs"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//------------------------ADVANCED MATCH----------------------

app.get("/games/advanced/match", function (request, response) {
  conectar();

  connection.query(
    `SELECT * FROM advanced WHERE type = "match"`,
    function (err, rows, fields) {
      if (err) throw err;

      response.json(rows);
      console.log(rows);
    }
  );
  desconectar();
});

//-------------------------------------------------------------------

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
