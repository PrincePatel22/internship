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
    dbConn.query(query, (err, result) => {
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

export const update = async (req, res) => {
  try {
    const query = `UPDATE prince_customer SET firstname="${req.body.firstname}",lastname="${req.body.lastname}",phone="${req.body.phone}",gender="${req.body.gender}",dob="${req.body.dob}",password="${req.body.password}",address="${req.body.address}" WHERE email="${req.body.email}"`;
    dbConn.query(query);
    res.send("Data Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};


