import express from "express";
import cors from "cors";
import mysql from "mysql";
import jwt from "jsonwebtoken";
const app = express();
let secretKey = "secretkey";

app.use(express.json({ extended: true }));
app.use(cors());

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;
  let query = `INSERT INTO registration_prince (firstname, lastname, email, password, dateadded) VALUES ("${firstname}","${lastname}","${email}","${password}",CURDATE())`;
  try {
    dbConn.query(query, (err, result) => {
      if (err) throw err;
      res.send("Data Added successfully.");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const validation = `SELECT email,password FROM registration_prince WHERE email = "${email}" AND password = "${password}"`;

  dbConn.query(validation, (err, result) => {
    if (
      result.length > 0 &&
      result[0].email === email &&
      result[0].password === password
    ) {
      const token = jwt.sign({ email: email }, secretKey);
      const sqlquery = `UPDATE registration_prince SET accesstoken="${token}" WHERE password = "${password}" AND email = "${email}"`;
      dbConn.query(sqlquery);
      res.send(token);
      // console.log(result);
    } else {
      res.send("Please enter valid credentials");
    }
  });
});

app.get("/profile", (req, res) => {
  try {
    const token = req.headers["token"];
    if (!token) {
      res.send("Please register first");
    } else {
      jwt.verify(token, secretKey, (err, decode) => {
        if (err) throw err;
        const query = `SELECT * from registration_prince WHERE email = "${decode.email}"`;
        dbConn.query(query, (err, result) => {
          res.status(200).send(result);
          console.log(result);
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

// Table used

// CREATE TABLE  `traineedb`.`registration_prince` (
//   `recid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(100) DEFAULT NULL,
//   `lastname` varchar(100) DEFAULT NULL,
//   `email` varchar(100) DEFAULT NULL,
//   `password` varchar(255) DEFAULT NULL,
//   `accesstoken` varchar(255) DEFAULT NULL,
//   `dateadded` date DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );
