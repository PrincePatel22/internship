import dbConn from "./models/models";
import jwt from "jsonwebtoken";
let secretKey = "secretkey";

export default async function profile(req, res) {
  try {
    const token = req.headers["token"];
    if (!token) res.send("Please register first");

    jwt.verify(token, secretKey, (err, decode) => {
      if (err) throw err;
      const query = `SELECT * from Temp WHERE email = "${decode.email}"`;
      dbConn.query(query, (err, result) => {
        res.status(200).send(result);
        console.log(result);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
