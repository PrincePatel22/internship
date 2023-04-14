import dbConn from "../models/models.js";
import jwt from "jsonwebtoken";
const secretKey = "secretKey";

export const signup = async (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;
  try {
    dbConn.query(
      `INSERT INTO sleep_user (firstname, lastname, email, password, dateadded) VALUES ("${firstname}","${lastname}","${email}","${password}",CURDATE())`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const temp = [];
  dbConn.query(
    `SELECT email,password,recid FROM sleep_user WHERE email = "${email}" AND password = "${password}"`,
    (err, result) => {
      if (
        result.length > 0 &&
        result[0].email === email &&
        result[0].password === password
      ) {
        const token = jwt.sign({ email: email }, secretKey);
        dbConn.query(
          `UPDATE sleep_user SET accesstoken="${token}" WHERE password = "${password}" AND email = "${email}"`
        );
        temp.push(token);
        temp.push(result[0].recid);
        res.send(temp);
        // console.log(result);
      } else {
        res.send("Please enter valid credentials");
      }
    }
  );
};

