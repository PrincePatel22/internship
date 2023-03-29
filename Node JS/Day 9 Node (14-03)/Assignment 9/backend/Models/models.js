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

// CREATE TABLE  `traineedb`.`prince_customer` (
//   `customerid` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `firstname` varchar(100) NOT NULL,
//   `lastname` varchar(100) NOT NULL,
//   `email` varchar(100) NOT NULL,
//   `phone` varchar(20) NOT NULL,
//   `gender` varchar(20) NOT NULL,
//   `dob` varchar(20) NOT NULL,
//   `password` varchar(100) NOT NULL,
//   `token` varchar(255) DEFAULT NULL,
//   `address` varchar(255) NOT NULL,
//   PRIMARY KEY (`customerid`)
// );

// CREATE TABLE  `traineedb`.`prince_products` (
//   `procode` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `proname` varchar(100) NOT NULL,
//   `brand` varchar(100) NOT NULL,
//   `proprice` float NOT NULL,
//   `status` varchar(50) NOT NULL,
//   PRIMARY KEY (`procode`)
// )

// CREATE TABLE  `traineedb`.`prince_pro_cus` (
//   `recid` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `proid` int(10) unsigned NOT NULL,
//   `cusid` int(10) unsigned NOT NULL,
//   `qty` int(10) unsigned DEFAULT NULL,
//   PRIMARY KEY (`recid`)
// );

// CREATE TABLE  `traineedb`.`prince_order` (
//   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `date` varchar(20) NOT NULL,
//   PRIMARY KEY (`id`)
// );

// CREATE TABLE  `traineedb`.`prince_orderdetails` (
//   `recid` int(10) unsigned NOT NULL AUTO_INCREMENT,
//   `ordid` int(11) NOT NULL,
//   `procode` int(11) NOT NULL,
//   `proname` varchar(100) NOT NULL,
//   `proprice` float NOT NULL,
//   `qty` int(11) NOT NULL,
//   `total` varchar(45) NOT NULL,
//   PRIMARY KEY (`recid`)
// );