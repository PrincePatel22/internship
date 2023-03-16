import mysql from "mysql";

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

// dbCon.connect((err) => {
//   if (err) throw err;
//   console.log("Database Connected!");
// });

// app.listen(8000, () => {
//   console.log(`Server is running on port 8000.`);
// });

export default dbConn;