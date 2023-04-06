import dbConn from "./models/models";

export default async function gettodo(req, res) {
  try {
    dbConn.query(
      `select * from prince_todo where id="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
