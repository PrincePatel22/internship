import mysql from "mysql";

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

export default dbConn;

// CREATE TABLE  `traineedb`.`sleep_data` (
//   `recid` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `sleepdate` varchar(45) DEFAULT NULL,
//   `asleeptime` varchar(45) DEFAULT NULL,
//   `wakeuptime` varchar(45) DEFAULT NULL,
//   `uid` int(11) DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );

// CREATE TABLE  `traineedb`.`sleep_user` (
//   `recid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(100) DEFAULT NULL,
//   `lastname` varchar(100) DEFAULT NULL,
//   `email` varchar(100) DEFAULT NULL,
//   `password` varchar(255) DEFAULT NULL,
//   `accesstoken` varchar(255) DEFAULT NULL,
//   `dateadded` date DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );

