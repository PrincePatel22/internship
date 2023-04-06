import dbConn from "./models/models";
import jwt from "jsonwebtoken";
let secretKey = "secretkey";

export default async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const validation = `SELECT email FROM Temp WHERE email = "${email}" AND password = "${password}"`;

  dbConn.query(validation, (err, result) => {
    if (result.length > 0 && result[0].email === email) {
      const token = jwt.sign({ email: email }, secretKey);
      const sqlquery = `UPDATE Temp SET accesstoken="${token}" WHERE password = "${password}"`;
      dbConn.query(sqlquery);
      res.send(token);
      // console.log(result);
    } else {
      res.send("Please enter valid credentials");
    }
  });
}
