import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

dbConn.connect((error) => {
  if (error) throw error;
  console.log("Database Connected!");
});

app.post("/addbug", (req, res) => {
  console.log(req.body);
  let title = req.body.title;
  let description = req.body.description;
  let assignee = req.body.assignee;
  let query = `INSERT INTO bug_prince (title, description, date, time, assignee) VALUES ("${title}","${description}",CURDATE(),CURTIME(),"${assignee}")`;
  dbConn.query(query, (error) => {
    if (error) throw error;
    res.send("Data Added successfully.");
  });
});

app.get("/getdata", (req, res) => {
  var query = `SELECT *,DATEDIFF(CURDATE(),date) as difference from bug_prince`;
  try {
    dbConn.query(query, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

//Table used

// CREATE TABLE  `traineedb`.`bug_prince` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `title` varchar(100) NOT NULL,
//   `description` varchar(100) NOT NULL,
//   `date` date DEFAULT NULL,
//   `time` time DEFAULT NULL,
//   `assignee` varchar(45) NOT NULL,
//   PRIMARY KEY (`id`)
// );
