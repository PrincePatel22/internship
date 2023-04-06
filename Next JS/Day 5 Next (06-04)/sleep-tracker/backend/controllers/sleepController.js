import dbconn from "../models/models.js";

export const addsleep = (req, res) => {
  try {
    dbconn.query(
      `insert into sleep_data (sleepdate, asleeptime, wakeuptime, uid) values("${req.body.sleepdate}","${req.body.asleeptime}","${req.body.wakeuptime}","${req.body.id}")`,
      (err, result) => {
        if (err) throw err;
        res.status(200).send("Data added successfully");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deletesleep = (req, res) => {
  try {
    dbconn.query(
      `delete from sleep_data where recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data deleted successfully");
      }
    );
  } catch (error) {     
    console.log(error);
  }
};

export const getsleep = (req, res) => {
  try {
    dbconn.query(`select * from sleep_data`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};
