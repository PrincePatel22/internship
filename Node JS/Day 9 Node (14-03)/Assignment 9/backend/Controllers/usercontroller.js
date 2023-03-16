import dbConn from "../Models/models.js";
import jwt from "jsonwebtoken";
let secretKey = "secretkey";

export const registration = async (req, res) => {
  console.log(req.body);
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let password = req.body.password;
  let address = req.body.address;
  let query = `INSERT INTO prince_customer (firstname, lastname, email, phone, gender, dob, password, address) VALUES ("${firstname}","${lastname}","${email}","${phone}","${gender}","${dob}","${password}","${address}")`;

  try {
    dbConn.query(query, (err, results) => {
      if (err) throw err;
      res.send("Data Added successfully.");
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const validation = `SELECT email FROM prince_customer WHERE email = "${email}" AND password = "${password}"`;

  dbConn.query(validation, (err, result) => {
    if (result.length > 0 && result[0].email === email) {
      const token = jwt.sign({ email: email }, secretKey);
      const sqlquery = `UPDATE prince_customer SET token="${token}" WHERE password = "${password}"`;
      dbConn.query(sqlquery);
      res.send(token);
      // console.log(result);
    } else {
      res.send("Please enter valid credentials");
    }
  });
};

export const userprofile = async (req, res) => {
  try {
    const token = req.headers["token"];
    if (!token) res.send("Please register first");

    jwt.verify(token, secretKey, (err, decode) => {
      if (err) throw err;
      const query = `SELECT * from prince_customer WHERE email = "${decode.email}"`;
      dbConn.query(query, (err, result) => {
        res.status(200).send(result);
        console.log(result);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req,res) => {
    try {
        const query = `UPDATE prince_customer SET firstname="${req.body.firstname}",lastname="${req.body.lastname}",phone="${req.body.phone}",gender="${req.body.gender}",dob="${req.body.dob}",password="${req.body.password}",address="${req.body.address}" WHERE email="${req.body.email}"`;
        dbConn.query(query);
        res.send("Data Updated Successfully");
    } catch (error) {
         console.log(error);
    }
}


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
