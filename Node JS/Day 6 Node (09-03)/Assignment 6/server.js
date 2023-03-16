import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cors());

const dbConnect = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

dbConnect.connect((error) => {
  if (error) throw error;
  console.log("Database Connected!");
});

app.post("/add", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let genre = req.body.genre;
  let rating = req.body.rating;
  let language = req.body.language;
  let query = `INSERT INTO movies_prince (id,name, genre,rating,language) VALUES ("${id}","${name}", "${genre}", "${rating}", "${language}")`;
  dbConnect.query(query, (error) => {
    if (error) throw error;
    return res.send("Data Added successfully.");
  });
});

app.get("/movies", (req, res) => {
  let query = `SELECT * FROM movies_prince`;
  dbConnect.query(query, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
});

app.get("/topmovies", (req, res) => {
  let query = `SELECT * FROM movies_prince ORDER BY rating DESC LIMIT 3`;
  dbConnect.query(query, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
});

app.put("/update", (req, res) => {
  let rating = req.body.rating;
  let query = `UPDATE movies_prince SET rating="${rating}" WHERE genre="comedy"`;
  dbConnect.query(query, (error) => {
    if (error) throw error;
    return res.send("Data Updated successfully.");
  });
});

app.delete("/delete", (req, res) => {
  let query = `DELETE FROM movies_prince ORDER BY rating ASC limit 1`;
  dbConnect.query(query, (error) => {
    if (error) throw error;
    return res.send("Data Deleted successfully.");
  });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000.");
});
