import dbConn from "./models/models";

export default async function register(req, res) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;
  let query = `INSERT INTO Temp (firstname, lastname, email, password, dateadded) VALUES ("${firstname}","${lastname}","${email}","${password}",CURDATE())`;
  try {
    dbConn.query(query, (err, result) => {
      if (err) throw err;
      res.send("Data Added successfully.");
    });
  } catch (error) {
    console.log(error);
  }
}
