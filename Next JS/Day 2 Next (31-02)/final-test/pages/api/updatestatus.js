import dbConn from "./models/models";

export default async function updatestatus(req, res) {
  if (req.body.status == "N") {
    try {
      dbConn.query(
        `update prince_final set status = "Y" where recid="${req.body.id}"`,
        (err, result) => {
          if (err) throw err;
        }
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      dbConn.query(
        `update prince_final set status = "N" where recid="${req.body.id}"`,
        (err, result) => {
          if (err) throw err;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
