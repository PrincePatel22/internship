import dbConn from "../Models/models.js";

export const getemployeeid = async (req, res) => {
  try {
    dbConn.query(
      `SELECT emp_id FROM prince_emp WHERE delstatus=1`,
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
export const updatehr = async (req, res) => {
  console.log(req.body);
  try {
    dbConn.query(
      `UPDATE prince_hr SET emp_id="${req.body.emp_id}",payroll="${req.body.payroll}",security_no="${req.body.security_no}",salary="${req.body.salary}" WHERE recid="${req.body.recid}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data updated");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
