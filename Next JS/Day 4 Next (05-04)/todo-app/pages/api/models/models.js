import mysql from "mysql";

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

export default dbConn;
