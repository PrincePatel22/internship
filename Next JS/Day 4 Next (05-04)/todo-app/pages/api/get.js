import dbConn from "./models/models";

export default async function get(req, res) {
  try {
    dbConn.query(`select * from prince_todo`, (err, result) => {
      if (err) throw err;
      res.send(result)
    });
  } catch (error) {
    console.log(error);
  }
}
