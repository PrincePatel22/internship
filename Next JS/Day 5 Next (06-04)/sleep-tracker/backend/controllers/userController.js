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
  dbConn.query(
    `SELECT email FROM sleep_user WHERE email = "${email}" AND password = "${password}"`,
    (err, result) => {
      if (result.length > 0 && result[0].email === email) {
        const token = jwt.sign({ email: email }, secretKey);
        dbConn.query(
          `UPDATE sleep_user SET accesstoken="${token}" WHERE password = "${password}"`
        );
        res.send(token);
        // console.log(result);
      } else {
        res.send("Please enter valid credentials");
      }
    }
  );
};
