import dbConn from "./models/models";

export default async function add(req, res) {
  try {
    dbConn.query(
      `update prince_todo set title="${req.body.title}",description="${req.body.description}" where id="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Updated successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
