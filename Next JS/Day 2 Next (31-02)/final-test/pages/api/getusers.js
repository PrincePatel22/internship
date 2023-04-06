import dbConn from "./models/models.js";

export default async function getusers(req, res){
  try {
    dbConn.query(
      `select recid,code,concat(firstname," ",lastname) as name,email,gender,hobbies,photo,country,status,date_format(dateadded,"%d/%m/%Y %h:%i:%s") as dateadded,dateupdated,endeffdt from prince_final where delstatus="1" order by code`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
