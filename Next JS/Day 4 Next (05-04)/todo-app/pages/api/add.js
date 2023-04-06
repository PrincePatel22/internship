import dbConn from "./models/models";

export default async function add(req, res) {
  try {
    dbConn.query(
      `insert into prince_todo (title,description,dateadded) values("${req.body.title}","${req.body.description}",curdate())`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
