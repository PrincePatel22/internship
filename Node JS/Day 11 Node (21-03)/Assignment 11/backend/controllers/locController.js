import dbConn from "../Models/models.js";

export const addlocation = async (req, res) => {
  console.log(req.body);
  let buildingid = req.body.buildingid;
  let address = req.body.address;
  let zipcode = req.body.zipcode;
  let manager = req.body.manager;

  try {
    dbConn.query(
      `INSERT INTO prince_locations (building_id, address, zipcode, manager,delstatus) VALUES ("${buildingid}","${address}","${zipcode}","${manager}","1")`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getlocation = async (req, res) => {
  try {
    dbConn.query(`SELECT * FROM prince_locations where delstatus="1"`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletelocation = async (req, res) => {
  try {
    dbConn.query(
      `UPDATE prince_locations SET delstatus="0" WHERE recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updatelocation = async (req, res) => {
  try {
    dbConn.query(
      `UPDATE prince_locations SET building_id="${req.body.building_id}",address="${req.body.address}",zipcode="${req.body.zipcode}",manager="${req.body.manager}" WHERE recid="${req.body.recid}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data updated");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
