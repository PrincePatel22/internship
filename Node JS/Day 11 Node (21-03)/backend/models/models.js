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

// Table used
// CREATE TABLE  `traineedb`.`prince_hr` (
//   `recid` int(11) NOT NULL AUTO_INCREMENT,
//   `emp_id` int(11) NOT NULL,
//   `payroll` float DEFAULT NULL,
//   `security_no` varchar(100) NOT NULL,
//   `salary` float DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );

// CREATE TABLE  `traineedb`.`prince_locations` (
//   `recid` int(11) NOT NULL AUTO_INCREMENT,
//   `building_id` varchar(45) NOT NULL,
//   `address` varchar(255) NOT NULL,
//   `zipcode` varchar(50) NOT NULL,
//   `manager` varchar(50) NOT NULL,
//   PRIMARY KEY (`recid`)
// );

// CREATE TABLE  `traineedb`.`prince_emp` (
//   `emp_id` int(11) NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(45) NOT NULL,
//   `lastname` varchar(45) NOT NULL,
//   `phone` varchar(45) NOT NULL,
//   `address` varchar(255) NOT NULL,
//   `gender` varchar(10) NOT NULL,
//   `work_location` varchar(255) NOT NULL,
//   `email` varchar(45) NOT NULL,
//   `delstatus` varchar(45) NOT NULL,
//   PRIMARY KEY (`emp_id`)
// );