import dbConn from "./models/models";

export default async function getUser(req, res) {
  try {
    dbConn.query(
      `select *,date_format(dateadded,"%d/%m/%Y %h:%i:%s") as dateadded,date_format(dateupdated,"%d/%m/%Y %h:%i:%s") as dateupdated from prince_final where recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
