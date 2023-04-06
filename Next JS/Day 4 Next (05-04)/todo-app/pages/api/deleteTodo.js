import dbConn from "./models/models";

export default async function deleteTodo(req, res) {
  try {
    dbConn.query(
      `delete from prince_todo where id="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data deleted sucessfully");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
