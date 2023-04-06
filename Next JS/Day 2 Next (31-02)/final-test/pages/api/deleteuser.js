import dbConn from "./models/models";

export default async function deleteuser(req, res) {
  try {
    dbConn.query(
      `update prince_final set delstatus = 0,endeffdt = concat(curdate()," ",curtime()) where recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
      }
    );
  } catch (error) {
    console.log(error);
  }
}
