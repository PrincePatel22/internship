import dbConn from "../models/models.js";

// recid,code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded,dateupdated,endeffdt,delstatus;

export const addUser = async (req, res) => {
  try {
    dbConn.query(
      `insert into prince_final (code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded,delstatus) values ("${req.body.code}","${req.body.firstname}","${req.body.lastname}","${req.body.email}","${req.body.gender}","${req.body.hobbies}","${req.file.originalname}","${req.body.country}","N",concat(curdate()," ",curtime()),1);`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    dbConn.query(
      `select recid,code,concat(firstname," ",lastname) as name,email,gender,hobbies,photo,country,status,date_format(dateadded,"%d/%m/%Y %h:%i:%s") as dateadded,dateupdated,endeffdt from prince_final where delstatus="1"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
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
};

export const deleteUser = async (req, res) => {
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
};

export const updateStatus = async (req, res) => {
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
};

export const editUser = async (req, res) => {
//   console.log(req.body, req.file);
  try {
    dbConn.query(
      `update prince_final set firstname="${req.body.firstname}",lastname="${req.body.lastname}",email="${req.body.email}",gender="${req.body.gender}",hobbies="${req.body.hobbies}",photo="${req.file && req.file.originalname}",country="${req.body.country}",dateupdated=concat(curdate()," ",curtime()) where recid="${req.params.id}"`,
      (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
