import dbconn from "../models/models.js";

export const addsleep = (req, res) => {
  try {
    dbconn.query(
      `insert into sleep_data (sleepdate, asleeptime, wakeuptime, uid,delstatus) values("${req.body.date}","${req.body.sleeptime}","${req.body.wakeuptime}","${req.body.id}","1")`,
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
      `update sleep_data set delstatus="0" where recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getsleeps = (req, res) => {
  try {
    dbconn.query(
      `select *,TIMEDIFF(wakeuptime,asleeptime) as sleepdiff,date_format(sleepdate,"%d/%c") as sleepdate  from sleep_data where uid="${req.body.id}" and delstatus="1" order by sleepdate desc limit 7`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
