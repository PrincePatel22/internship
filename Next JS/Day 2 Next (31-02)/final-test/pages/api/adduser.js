import dbConn from "./models/models";

export default async function adduser(req, res) {
    console.log(req.body);
  try {
    dbConn.query(
      `insert into prince_final (code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded,delstatus) values ("${req.body.code}","${req.body.firstname}","${req.body.lastname}","${req.body.email}","${req.body.gender}","${req.body.hobbies}","${req.body.filename}","${req.body.country}","N",concat(curdate()," ",curtime()),1);`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
