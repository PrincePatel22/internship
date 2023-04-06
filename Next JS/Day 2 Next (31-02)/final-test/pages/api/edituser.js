import dbConn from "./models/models";

export default async function editUser(req, res) {
  console.log(req.body);
  try {
    dbConn.query(
      `update prince_final set firstname="${req.body.firstname}",lastname="${req.body.lastname}",email="${req.body.email}",gender="${req.body.gender}",hobbies="${req.body.hobbies}",photo="${req.body.filename}",country="${req.body.country}",dateupdated=concat(curdate()," ",curtime()) where recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(200);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
