import dbConn from "../Models/models.js";

export const getemployeeid = async (req, res) => {
  try {
    dbConn.query(
      `SELECT emp_id FROM prince_emp WHERE delstatus=0`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const addhr = async (req, res) => {
  console.log(req.body);
  try {
    dbConn.query(
      `INSERT INTO prince_hr (emp_id, payroll, security_no, salary) VALUES ("${req.body.emp_id}","${req.body.payroll}","${req.body.securityno}","${req.body.salary}")`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const gethr = async (req, res) => {
  try {
    dbConn.query(`SELECT * FROM prince_hr `, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};
export const deletehr = async (req, res) => {
  try {
    dbConn.query(
      `DELETE FROM prince_hr WHERE recid="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
