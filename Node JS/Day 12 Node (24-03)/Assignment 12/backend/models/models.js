import mysql from "mysql";

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

export default dbConn;

// Table used

// CREATE TABLE  `traineedb`.`prince_final` (
//   `recid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
//   `code` char(6) DEFAULT NULL,
//   `firstname` varchar(100) DEFAULT NULL,
//   `lastname` varchar(100) DEFAULT NULL,
//   `email` varchar(255) DEFAULT NULL,
//   `gender` char(1) DEFAULT NULL,
//   `hobbies` varchar(255) DEFAULT NULL,
//   `photo` varchar(100) DEFAULT NULL,
//   `country` varchar(30) DEFAULT NULL,
//   `status` char(1) DEFAULT NULL,
//   `dateadded` datetime DEFAULT NULL,
//   `dateupdated` datetime DEFAULT NULL,
//   `endeffdt` datetime DEFAULT NULL,
//   `delstatus` varchar(10) DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );
